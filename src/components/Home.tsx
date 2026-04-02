import businessImage from '../assets/images/itscope.jpg'; // Add your image file here
import { useState, useEffect } from 'react';

// Import client logos
import client1Logo from '../assets/images/uba.jpeg';
import client2Logo from '../assets/images/wema.jpeg';
import client3Logo from '../assets/images/leadway.jpeg';
import client4Logo from '../assets/images/access-bank.jpg';
import client5Logo from '../assets/images/fsdh.jpeg';
// import client6Logo from '../assets/images/client6-logo.png';

// Typewriter effect component
interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  className?: string;
  pauseTime?: number;
}

const TypewriterText = ({ texts, speed = 100, className = "", pauseTime = 2000 }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (isDeleting) {
      // Deleting text
      if (currentCharIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(prev => prev - 1);
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
        setCurrentCharIndex(0);
      }
    } else {
      // Typing text
      if (currentCharIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentTextIndex, currentCharIndex, isDeleting, texts, speed, pauseTime]);

  return <span className={className}>{displayText}</span>;
};

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F97316] via-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                      <div className="flex flex-col lg:flex-row gap-24   items-center">
             
             
              {/* Image */}
              <div className="lg:col-span-2 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-80 h-80 lg:w-[500px] lg:h-[500px] bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 overflow-hidden">
                    <img 
                      src={businessImage} 
                      alt="Business people working with technology" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* Floating elements for visual interest */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white/40 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/4 -left-6 w-3 h-3 bg-white/25 rounded-full animate-pulse delay-1500"></div>
                  <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-white/35 rounded-full animate-pulse delay-2000"></div>
                </div>
              </div>

               {/* Text Content */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 max-w-5xl lg:max-w-none">
                  <TypewriterText 
                    texts={[
                      "We Build the Right Environment-Technology Made Simple, Growth Made Certain",
                      "Raising the Bar-Deploying Innovative and Impactful ICT Solutions.",
                      "From Insight to Execution-Turning Business Ideas into Seamless Success",
                      // "Technology Solutions That Drive Growth"
                    ]}
                    speed={80}
                    className="block"
                  />
            </h2>
                <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl lg:max-w-none mx-auto lg:mx-0">
              We help businesses leverage technology to drive growth, efficiency, and innovation. 
              From strategy to implementation, we're your trusted IT partner.
            </p>
            </div>

          </div>
        </div>
      </section>

    

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ITScope Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We stay ahead of technology trends to provide cutting-edge solutions that give your business a competitive edge.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our certified professionals bring years of experience across diverse industries and technologies.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                We deliver results quickly and efficiently, ensuring your projects stay on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

  


        {/* Client Logo Carousel */}
        <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Trusted by Leading Companies
            </h3>
            <p className="text-gray-600">
              We've helped businesses of all sizes achieve their technology goals
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-orange-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-orange-100 to-transparent z-10"></div>
            
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
                  <img src={client4Logo} alt="Client 4" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client5Logo} alt="Client 5" className="w-full h-full object-contain rounded-xl" />
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
                  <img src={client4Logo} alt="Client 4" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300">
                  <img src={client5Logo} alt="Client 5" className="w-full h-full object-contain rounded-xl" />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 