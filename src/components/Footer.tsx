import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#F97316] text-white border-t border-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company Info */}
          <div className="">
            <h3 className="text-2xl font-bold text-white mb-4">
              IT Scope Solutions
            </h3>
            <p className="text-orange-100 mb-6 max-w-md">
              At ITScope Solutions Ltd, "Innovation" and "Speed" are on the very top of our priority list. Our main focus is to empower our customers with robust solutions that meet their needs and at the same time solutions that are versatile and easy to be used, managed and operated.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ITScope_NG" className="text-white hover:text-orange-200 transition-all duration-300 transform hover:scale-110">
                <FaTwitter className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.facebook.com/Itscopesolutions?mibextid=ZbWKwL" className="text-white hover:text-orange-200 transition-all duration-300 transform hover:scale-110">
                <FaFacebook className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.instagram.com/itscopesolutionsltd/" className="text-white hover:text-orange-200 transition-all duration-300 transform hover:scale-110">
                <FaInstagram className="w-6 h-6 text-white"  />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Lagos Office */}
              <div className="space-y-4">
                <h5 className="font-medium text-orange-100 mb-3">Nigeria Office</h5>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-orange-100">2b, Babalola Gardens,<br />Off Freedom Way, Lekki Phase 1, Lagos</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-orange-100">+234 816 231 5024</span>
                </div>
              </div>

              {/* Abuja Office */}
              <div className="space-y-4">
                <h5 className="font-medium text-orange-100 mb-3">United Kingdom Office</h5>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-orange-100">Kemp House, 160 City Road,<br />London, United Kingdom, EC1V 2NX</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-orange-100">+234 901 295 4782</span>
                </div>
              </div>
            </div>
            
            {/* Email - shared across both offices */}
            <div className="flex items-center mt-6">
              <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-orange-100">info@itscopesolutions.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-500 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-200 text-sm">
              © 2025 IT Scope Solutions. All rights reserved.
            </p>
           
          </div>
        </div>
      </div> 
    </footer>
  )
}

export default Footer 