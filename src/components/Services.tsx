
import { 
  FaCode, 
  FaNetworkWired, 
  FaMicrosoft, 
  FaDesktop, 
  FaUsers, 
  FaAd 
} from 'react-icons/fa';

// Import client logos
import client1Logo from '../assets/images/hp.jpeg';
import client2Logo from '../assets/images/cisco.jpeg';
import client3Logo from '../assets/images/ibm.jpg';
// import client4Logo from '../assets/images/leadway.jpg';
import client5Logo from '../assets/images/mic.jpg';
import client6Logo from '../assets/images/acer.png';


const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web design & Development",
      description: "We design and develop end-to-end portals using cutting-edge technologies. From defining requirements to deployment and training, we work closely with you to align solutions with your business goals. Our approach ensures scalable, user-centric platforms built for impact.",
             icon: <FaCode className="w-8 h-8 text-[#F97316]" />,
      features: ["Technology Assessment", "Digital Transformation Roadmap", "IT Governance", "Risk Management"]
    },
     {
      id: 2,
      title: "Computer Hardwares/Consumables",
      description: "We provide a wide range of high-quality IT hardware including servers, laptops, desktops, routers, printers, and accessories like hard drives, keyboards, and power packs. All products are sourced from trusted, accredited global brands. With competitive pricing and guaranteed authenticity, we ensure you get reliable technology that meets your business needs.",
             icon: <FaDesktop className="w-8 h-8 text-purple-600" />,
      features: ["Process Automation", "Legacy Modernization", "Change Management", "Training"]
    },
    {
      id: 3,
      title: "Microsoft Office 365",
      description: "We bring together expert knowledge and strategic execution to deliver results efficiently, with low risk and cost. Our Office 365 services cover business-class email, file sharing, team collaboration, and communication tools like Exchange, SharePoint, and Skype for Business, all designed to support your workflow and productivity",
             icon: <FaMicrosoft className="w-8 h-8 text-red-600" />,
      features: ["Security Assessment", "Penetration Testing", "Incident Response", "Compliance"]
    },
    {
      id: 4,
      title: "Networking Services",
      description: "We design and implement secure, high-performance network infrastructure for businesses of all sizes. From LANs and wireless networks to cabling, routing, VPNs, and encryption, we ensure seamless connectivity and robust data protection. Our expertise spans both large-scale corporate deployments and tailored SME solutions.",
             icon: <FaNetworkWired className="w-8 h-8 text-green-600" />,
      features: ["Cloud Migration", "AWS/Azure/GCP", "Cost Optimization", "Security & Compliance"]
    },
    {
      id: 5,
      title: "Outsourcing and Internships",
      description: "At ITSCOPE, we deliver quality IT solutions through a team of skilled professionals embedded across the full software development life cycle. From full-stack development to QA and testing, our experts support projects of any size, either remotely or onsite. We also offer internship opportunities to select partners and clients, fostering hands-on collaboration and growth.",
             icon: <FaUsers className="w-8 h-8 text-yellow-600" />,
      features: ["Agile/Scrum", "Risk Management", "Stakeholder Communication", "Quality Assurance"]
    },
    {
      id: 6,
      title: "InterAd",
      description: "InterAd is a zero-rated user engagement platform that helps you connect with your audience across multiple channels. It centralizes communication from social media and messaging platforms into one portal, enabling real-time tracking and interaction. With built-in rewards and instant redemption features, InterAd boosts customer engagement and loyalty through seamless, targeted outreach.",
             icon: <FaAd className="w-8 h-8 text-indigo-600" />,
      features: ["Help Desk Support", "System Monitoring", "Backup & Recovery", "Performance Tuning"]
    }
  ]

 

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive IT solutions designed to meet your business needs 
            and drive digital transformation success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-3 transition-all duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
             
            </div>
          ))}
        </div>



      


        {/* Client Logo Carousel */}
       <section className="py-16 bg-transparent mt-5">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Trusted by Our Partners
              Companies
            </h3>
            <p className="text-gray-600">
              We've helped businesses of all sizes achieve their technology goals
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <div className="flex animate-scroll gap-10">
              {/* First set of logos */}
              <div className="flex items-center space-x-16 min-w-max">
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client1Logo} alt="Client 1" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client2Logo} alt="Client 2" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client3Logo} alt="Client 3" className="w-full h-full object-contain rounded-xl" />
                </div>
           
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client5Logo} alt="Client 5" className="w-full h-full object-contain rounded-xl" />
                  </div>
                  
                  <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client6Logo} alt="Client 6" className="w-full h-full object-contain rounded-xl" />
                </div>
                
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-16 min-w-max">
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client1Logo} alt="Client 1" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client2Logo} alt="Client 2" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client3Logo} alt="Client 3" className="w-full h-full object-contain rounded-xl" />
                </div>
              
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client5Logo} alt="Client 5" className="w-full h-full object-contain rounded-xl" />
                </div>
               
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client6Logo} alt="Client 6" className="w-full h-full object-contain rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>


       
    </div>
  )
}

export default Services 