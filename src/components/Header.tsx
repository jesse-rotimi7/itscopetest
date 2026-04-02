import { useState } from 'react'
import Logo from '../assets/images/itscope-logo.png'
import { useNavigate, useLocation } from 'react-router-dom'

interface HeaderProps {
  activeSection?: string
  onNavigate?: (sectionId: string) => void
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/#about' },
    { id: 'services', label: 'Services', path: '/#services' },
    { id: 'sme', label: 'SME', path: '/sme' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (sectionId: string) => {
    const navItem = navItems.find(item => item.id === sectionId)
    if (navItem) {
      if (navItem.path === '/sme') {
        // Handle SME page navigation
        navigate(navItem.path)
      } else if (navItem.path.startsWith('/#')) {
        // Handle anchor links - navigate to home page first if not already there
        if (location.pathname !== '/') {
          navigate('/')
          // Wait for navigation to complete before scrolling
          setTimeout(() => {
            const element = document.getElementById(sectionId)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
            if (onNavigate) {
              onNavigate(sectionId)
            }
          }, 100)
        } else {
          // Already on home page, just scroll to section
          if (onNavigate) {
            onNavigate(sectionId)
          }
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      } else {
        // Handle page navigation
        navigate(navItem.path)
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="itscope logo" className='w-25 sm:w-24 md:w-28 h-auto' />
          
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
               <button
               key={item.id}
               onClick={() => handleNavClick(item.id)}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                 focus:outline-none focus:ring-0 
                 ${
                   activeSection === item.id
                     ? 'text-[#F97316] bg-transparent shadow-md border border-[#F97316]'
                     : 'text-gray-700 hover:text-[#F97316] hover:bg-orange-50 '
                 }`}
             >
               {item.label}
             </button>
             
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 sm:p-3 rounded-lg text-gray-700 hover:text-[#F97316] hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 transition-all duration-200 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px]"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-5 w-5 sm:h-6 sm:w-6 transition-all duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-5 w-5 sm:h-6 sm:w-6 transition-all duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg border-t border-gray-100 absolute top-full left-0 right-0 w-full`}>
        <div className="px-3 py-3 space-y-1 sm:px-4 sm:py-4 sm:space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-3 sm:px-4 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 min-h-[44px] flex items-center ${
                activeSection === item.id
                  ? 'text-white bg-[#F97316] shadow-md'
                  : 'text-gray-700 hover:text-[#F97316] hover:bg-orange-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header 