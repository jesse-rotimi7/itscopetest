import EchezonaPayPop from "echezona-pop";
import { useMemo, useState, useRef, useEffect } from 'react'
import emailjs from "@emailjs/browser";
import {Loader}  from '../components/Loader';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import { 
  products, 
  getCategoryColor, 
  getCategoryDisplayName, 
  getPreviewSpecs,
  type Product 
} from '../utils';

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
}

const emailRegex =
  /^(?!\.)(?!.*\.\.)([A-Z0-9_+-.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;

  const api_Key = import.meta.env.VITE_PAYMENT_PUBLIC_KEY

const schema = z.object({
	from_name: z
    .string({ message: "Name is required" })
		.min(1, { message: "Name is required" })
		.trim(),
	phone: z
    .string({ message: "Phone Number is required" })
		.min(1, { message: "Phone Number is required" })
		.trim(),
	email: z
		.string({ message: "Email is required" })
		.min(1, { message: "Email address is required" })
		.regex(emailRegex, { message: "Please enter a valid email address" })
		.trim(),
	message: z
		.string({ message: "Enter your message here" })
		.min(1, { message: "Enter your message here" })
		.trim(),
});
export type ContactSchema = z.infer<typeof schema>;

const SMEPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, reset ,formState:{errors} } = useForm<ContactSchema>({
		defaultValues: {
			email: "",
			message: "",
			from_name: "",
      phone: "",
		},
		resolver: zodResolver(schema),
	});

  const form = useRef<HTMLFormElement>(null);

   const { register:formregister, handleSubmit:formhandleSubmit, formState: { errors:formErrors } } = useForm<FormValues>();
  

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [selectedProductForOrder, setSelectedProductForOrder] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(false);
	const [successAlert, setSuccessAlert] = useState<boolean>(false);
	const [failureAlert, setFailureAlert] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const openOrderForm = (product: Product) => {
    setSelectedProductForOrder(product)
    setIsOrderFormOpen(true)
  }

  const closeOrderForm = () => {
    setIsOrderFormOpen(false)
    setSelectedProductForOrder(null)
  }

  const safeProducts = useMemo(() => (Array.isArray(products) ? products : []), [])
  const activeProduct = safeProducts[activeIndex] ?? safeProducts[0] ?? null

  const goTo = (idx: number) => {
    const len = safeProducts.length
    if (len === 0) return
    const next = ((idx % len) + len) % len
    setActiveIndex(next)
  }

  const nextSlide = () => goTo(activeIndex + 1)
  const prevSlide = () => goTo(activeIndex - 1)

  useEffect(() => {
    if (safeProducts.length <= 1) return
    if (isCarouselPaused) return
    if (isModalOpen || isOrderFormOpen) return
    const id = window.setInterval(() => {
      setActiveIndex((i) => {
        const len = safeProducts.length
        return len === 0 ? 0 : (i + 1) % len
      })
    }, 6500)
    return () => window.clearInterval(id)
  }, [safeProducts.length, isCarouselPaused, isModalOpen, isOrderFormOpen])

  //handle form data collection and payment
  const handlepayment: SubmitHandler<FormValues> = (data) => {
    setIsOrderFormOpen(false);
    const amountToPay = selectedProductForOrder?.newprice ? Number( String(selectedProductForOrder.newprice) .replace(/[₦,]/g, "") )  : 0;
    const requestPayload = {
      amount: amountToPay.toFixed(2),
      transactionId: Math.floor(Math.random() * 99999999) + "",
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      apiKey: api_Key,
      currency: "NGN",
      isLive: true,
      productId: "1001",
      applyConviniencyCharge: true,
      productDescription: "SME Laptop Purchase",
      footerText: "Powered by Echezona Ltd",
      footerLogo: "https://paybridge.africa/logo.png",
    };
    const payPop = new EchezonaPayPop();
    payPop.newTransaction({
      onSuccess: (transaction) => {
        // console.log("Payment successful:", transaction.transactionId);
         toast.success(`Payment initialized successful! ID: ${transaction.transactionId}`);
      },
      onError: (transaction) => {
        // console.log("Payment failed:", transaction.transactionId);
        toast.error(`Payment failed! ID: ${transaction.transactionId}`);
      },
      onCancel: () => {
        // console.log("User closed the popup");
        toast("User closed the payment popup", { icon: "⚠️" });
      },
      request: requestPayload as any,
    });
  }

  // Handle form submission with EmailJS
  const onSubmit: SubmitHandler<ContactSchema> = () => {
		setLoading(true);
    if (
      import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY &&
      form.current
    ) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
          if (response.status === 200) {
            setLoading(false);
            setSuccessAlert(true);
            setTimeout(() => {
              setSuccessAlert(false);
              reset();
            }, 5000);
          }
        })
        .catch(() => {
          setLoading(false);
          setFailureAlert(true);
          setTimeout(() => {
            setFailureAlert(false);
          }, 5000);
        });
    }
	};

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {/* <Toaster position="top-right" /> */}
    <div className='mt-2 pt-16 min-h-screen bg-slate-100'>
      {/* Full-screen SME Carousel (replaces product grid) */}
      <section
        className="relative w-full h-[calc(100dvh-4rem)] min-h-[620px] sm:min-h-[540px] overflow-hidden bg-white"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
      >
        {activeProduct && (
          <>
            {/* ── Mobile layout (non-scrolling split) ── */}
            <div className="sm:hidden h-full w-full flex flex-col bg-white">

              {/* Image — top 40% */}
              <div className="h-[40%] flex-shrink-0 flex items-center justify-center bg-slate-50 px-4 pt-3">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-full object-contain object-center"
                  draggable={false}
                />
              </div>

              {/* Info panel — bottom 60%, flex-col so controls stay pinned */}
              <div className="flex-1 flex flex-col justify-between bg-white border-t border-slate-100 px-4 pt-3 pb-4 min-h-0">

                {/* Top: badges + name + price + CTA */}
                <div className="flex-1 min-h-0 flex flex-col justify-center gap-2">
                  {/* Badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-white ${getCategoryColor(activeProduct.category)}`}>
                      {getCategoryDisplayName(activeProduct.category)}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-[#F97316] bg-orange-50 border border-orange-200">
                      Introductory offer
                    </span>
                  </div>

                  {/* Name — 2 line max */}
                  <h2 className="leading-[1.3] font-bold text-slate-900 line-clamp-2">
                    {activeProduct.name}
                  </h2>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-sm line-through decoration-red-500 decoration-2 text-slate-400">
                      {activeProduct.price}
                    </span>
                    <span className="text-[1.6rem] font-black text-[#F97316] leading-none">
                      {activeProduct.newprice}
                    </span>
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => openOrderForm(activeProduct)}
                      className="flex-1 bg-[#F97316] text-white py-3 rounded-xl font-bold text-sm shadow-[0_8px_24px_rgba(249,115,22,0.35)] active:bg-[#EA580C] hover:bg-[#EA580C] transition-colors border border-[#F97316]"
                    >
                      Shop Now
                    </button>
                    <button
                      onClick={() => openModal(activeProduct)}
                      className="w-16 h-16 flex-shrink-0 rounded-xl border-2 border-[#F97316] bg-white text-[#F97316] flex items-center justify-center active:bg-orange-50 transition-colors"
                      aria-label="View full info"
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 my-3 flex-shrink-0" />

                {/* Controls — always visible; dots meet ~44px touch targets + scroll when many slides */}
                <div className="flex-shrink-0 flex items-stretch gap-1 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))]">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="h-16 w-16 flex-shrink-0 rounded-xl border-2 border-[#F97316] bg-white text-[#F97316] shadow-sm flex items-center justify-center active:bg-orange-50 active:scale-[0.98] transition-all touch-manipulation"
                    aria-label="Previous slide"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div
                    className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
                    role="tablist"
                    aria-label="Choose a product slide"
                  >
                    <div className="flex items-center justify-center min-h-[44px] gap-1 px-1">
                      {safeProducts.map((p, i) => {
                        const isActive = i === activeIndex
                        return (
                          <button
                            key={p.id}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            aria-label={`Go to slide ${i + 1} of ${safeProducts.length}`}
                            onClick={() => goTo(i)}
                            className="snap-center shrink-0 flex items-center justify-center min-h-[44px] min-w-[44px] touch-manipulation rounded-full active:scale-95 transition-transform"
                          >
                            <span
                              className={`block rounded-full transition-all duration-300 ${
                                isActive
                                  ? 'h-2.5 w-8 bg-[#F97316]'
                                  : 'h-2.5 w-2.5 bg-slate-400 border border-slate-200'
                              }`}
                            />
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={nextSlide}
                    className="h-16 w-16 flex-shrink-0 rounded-xl border-2 border-[#F97316] bg-white text-[#F97316] shadow-sm flex items-center justify-center active:bg-orange-50 active:scale-[0.98] transition-all touch-manipulation"
                    aria-label="Next slide"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>

            <div className="hidden sm:block">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="absolute inset-0 w-full h-full object-contain object-center p-8 lg:p-10"
                draggable={false}
              />

              <div className="relative h-full w-full px-8 lg:px-12 pb-20 flex items-center">
                <div className="w-full max-w-xl rounded-2xl border border-white/55 bg-white/50 backdrop-blur-xl shadow-[0_8px_40px_rgba(15,23,42,0.12)] ring-1 ring-white/40 p-6 lg:p-7">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm ${getCategoryColor(activeProduct.category)}`}>
                      {getCategoryDisplayName(activeProduct.category)}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium text-[#F97316] bg-orange-50 border border-orange-200">
                      Introductory offer
                    </span>
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                    {activeProduct.name}
                  </h1>

                  <p className="mt-2 text-base text-slate-700">
                    Powerful portable energy for work, travel, and backup needs.
                  </p>

                  <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
                    <span className="text-base line-through decoration-red-500 decoration-2 text-slate-500">
                      {activeProduct.price}
                    </span>
                    <span className="text-3xl font-black text-[#F97316]">
                      {activeProduct.newprice}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => openOrderForm(activeProduct)}
                      className="hover:cursor-pointer bg-[#F97316] text-white px-6 py-3 rounded-xl font-bold shadow-[0_12px_35px_rgba(249,115,22,0.3)] hover:bg-[#EA580C] border border-[#F97316] transition-colors duration-200"
                    >
                      Shop Now
                    </button>

                    <button
                      onClick={() => openModal(activeProduct)}
                      className="group hover:cursor-pointer w-16 h-16 rounded-xl border-2 border-[#F97316]/80 bg-white/55 backdrop-blur-md text-[#F97316] flex items-center justify-center hover:bg-white/75 transition-colors duration-200 shadow-sm"
                      aria-label="View full product information"
                      title="View full info"
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {getPreviewSpecs(activeProduct.specs).map(([key, value]) => (
                      <div key={key} className="rounded-xl border border-white/50 bg-white/40 backdrop-blur-md shadow-sm px-3 py-2.5">
                        <div className="text-[11px] uppercase tracking-wide text-slate-500">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="mt-1 text-sm font-semibold text-slate-800 truncate" title={value}>
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Controls */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 z-20">
          {safeProducts.slice(0, 8).map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${i === activeIndex ? 'bg-[#F97316] w-6' : 'bg-white hover:bg-slate-50 border border-slate-300'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hidden sm:flex absolute bottom-6 right-6 items-center gap-3 z-20">
          <button
            onClick={prevSlide}
            className="w-16 h-16 rounded-xl border-2 border-[#F97316] bg-white text-[#F97316] shadow-md flex items-center justify-center hover:bg-orange-50 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-16 h-16 rounded-xl border-2 border-[#F97316] bg-white text-[#F97316] shadow-md flex items-center justify-center hover:bg-orange-50 transition-colors duration-200"
            aria-label="Next slide"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="absolute top-4 right-3 sm:top-7 sm:right-7">
          <button
            onClick={() => {
              const el = document.getElementById('sme-offers')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-xs font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors rounded-full px-3 py-2 bg-white border-2 border-[#F97316] shadow-sm hover:bg-orange-50"
            aria-label="Scroll to form"
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <div id="sme-offers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10 sm:py-12 lg:py-16">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                     {/* CTA Content */}
           <div className="text-center lg:text-left">
             <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
             Be the First to Know About Exclusive SME Deals
                          </h3>
             <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
             Drop your details below and we'll keep you updated with our latest tech discounts and special offers. No spam, just savings.
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            </div>
          </div>

                     {/* Contact Form */}
           <div className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8">
             <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
               Get a Quote
             </h4>
            <form className="space-y-4 sm:space-y-6" ref={form}
								onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="from_name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                   type="text"
                   id="from_name"
                   {...register("from_name")}
                   className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-colors duration-200 placeholder-gray-400 text-black text-sm sm:text-base"
                   placeholder="Enter your full name"
                  />
                  {errors.from_name && <span className="text-red-500 text-xs sm:text-sm mt-1">{errors.from_name.message}</span>}
              </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                   type="email"
                   id="email"
                   {...register("email")}
                   className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-colors duration-200 placeholder-gray-400 text-black text-sm sm:text-base"
                   placeholder="Enter your email address"
                  />
                  {errors.email && <span className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</span>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                   type="tel"
                   id="phone"
                   {...register("phone")}
                   className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-colors duration-200 placeholder-gray-400 text-black text-sm sm:text-base"
                   placeholder="Enter your phone number"
                   />
                   {errors.phone && <span className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone.message}</span>}
              </div>

              <div>
                 <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                   Message  
                 </label>
                  <textarea
                   id="message"
                    {...register("message")}
                   rows={3}
                   className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-colors duration-200 placeholder-gray-400 resize-none text-black text-sm sm:text-base"
                   placeholder="Tell us about your requirements..."
                 />
                  {errors.message && <span className="text-red-500 text-xs sm:text-sm mt-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#F97316] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-transparent hover:text-[#F97316] border border-[#F97316] transition-colors duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                {loading ? <Loader className='mx-auto' /> : "Send message"}
              </button>
            </form>
            <div className='my-3 text-center'>
								{failureAlert ? (
									// <span className='text-center text-sm sm:text-lg text-red-500'>
									// 	Failed To send message, try again later
									// </span>
                  toast.error(`Failed To send message, try again later`)
								) : successAlert ? (
									// <span className='text-center text-sm sm:text-lg text-green-500'>
									// 	Message sent successfully!
									// </span>
                  toast.success(`Message sent successfully!`)
								) : null}
							</div>
          </div>
        </div>
      </div>
      </div>

      {/* Product Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white border border-gray-200 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
                             {/* Modal Header */}
               <div className="flex justify-between items-start mb-4 sm:mb-6">
                 <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 pr-4">
                   {selectedProduct.name}
                 </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 flex-shrink-0"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Product Image */}
              <div className="mb-4 sm:mb-6">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-contain rounded-lg bg-gray-50"
                />
              </div>

                             {/* Price */}
               <div className="mb-4 sm:mb-6">
                 <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F97316]">
                   {selectedProduct.newprice}
                 </span>
               </div>

                             {/* Specifications */}
               <div className="mb-4 sm:mb-6">
                 <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                   Technical Specifications
                 </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                     {Object.entries(selectedProduct.specs).map(([key, value]) => (
                     <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                       <span className="text-start text-xs sm:text-sm text-gray-600 capitalize flex-shrink-0 mr-2">
                         {key.replace(/([A-Z])/g, ' $1').trim()}:
                       </span>
                       <span className="text-xs sm:text-sm font-medium text-gray-900 text-end break-words">
                         {value}
                       </span>
                     </div>
                   ))}
                </div>
              </div>

          
            </div>
          </div>
        </div>
      )}

      {/* Order Form Modal */}
      {isOrderFormOpen && selectedProductForOrder && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white border border-gray-200  rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Order {selectedProductForOrder.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Fill in your details to place your order
                  </p>
                </div>
                <button
                  onClick={closeOrderForm}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Product Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src={selectedProductForOrder.image} 
                    alt={selectedProductForOrder.name}
                    className="w-16 h-16 object-contain rounded-lg bg-white"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {selectedProductForOrder.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      {/* <span className="text-sm line-through text-gray-500">
                        {selectedProductForOrder.price}
                      </span> */}
                      <span className="text-lg font-bold text-[#F97316]">
                        {selectedProductForOrder.newprice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Form */}
              <form onSubmit={formhandleSubmit(handlepayment)} className="space-y-4">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    {...formregister("firstname",{ required: "First name is required" })}
                    className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-colors duration-200 placeholder-gray-400"
                    placeholder="Enter your first name"
                    required
                  />
                  {formErrors.firstname && <p className='text-red-500 text-xs sm:text-sm mt-1"'>{formErrors.firstname.message}</p>}
                </div>

                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    {...formregister("lastname",{ required: "last name is required" })}
                    className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-colors duration-200 placeholder-gray-400"
                    placeholder="Enter your last name" 
                    required
                  />
                  {formErrors.lastname && <p className='text-red-500 text-xs sm:text-sm mt-1"'>{formErrors.lastname?.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...formregister("email")}
                    className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-[#F97316] transition-colors duration-200 placeholder-gray-400"
                    placeholder="Enter your email address"
                    required
                  />
                  {formErrors.email && <p className='text-red-500 text-xs sm:text-sm mt-1"'>{formErrors.email.message}</p>}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#F97316] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#EA580C] transition-colors duration-200 shadow-md"
                  >
                    Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default SMEPage 