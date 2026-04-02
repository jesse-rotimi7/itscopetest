import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import SMEPage from './pages/SME'
// import NewsletterModal from './components/NewsletterModal'

function AppContent() {
  const [activeSection, setActiveSection] = useState('home')
  // const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Update active section based on current route
    if (location.pathname === '/sme') {
      setActiveSection('sme')
    } else if (location.pathname === '/') {
      setActiveSection('home')
    }
  }, [location.pathname])

  // useEffect(() => {
  //   // Check if user has already subscribed or if modal was dismissed recently
  //   const hasSubscribed = localStorage.getItem('newsletterSubscribed')
  //   const modalDismissed = localStorage.getItem('newsletterModalDismissed')
    
  //   // Show modal if:
  //   // 1. User hasn't subscribed
  //   // 2. Modal wasn't dismissed in the last 24 hours
  //   // 3. User is on the SME page
  //   if (!hasSubscribed && !modalDismissed && location.pathname === '/sme') {
  //     // Delay showing modal by 2 seconds to let page load
  //     const timer = setTimeout(() => {
  //       setShowNewsletterModal(true)
  //     }, 2000)
      
  //     return () => clearTimeout(timer)
  //   }
  // }, [location.pathname])

  // const handleCloseNewsletterModal = () => {
  //   setShowNewsletterModal(false)
  //   // Mark as dismissed for 24 hours
  //   localStorage.setItem('newsletterModalDismissed', 'true')
  //   setTimeout(() => {
  //     localStorage.removeItem('newsletterModalDismissed')
  //   }, 24 * 60 * 60 * 1000) // 24 hours
  // }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      
      <Routes>
        <Route path="/" element={
          <main>
            <section id="home">
              <Home />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="services">
              <Services />
            </section>
          </main>
        } />
        
        <Route path="/sme" element={<SMEPage />} />
      </Routes>
      
      <Footer />
      
      {/* Newsletter Modal - DISABLED */}
      {/* <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={handleCloseNewsletterModal} 
      /> */}
    </div>
  )
}

function App() {
  return <AppContent />
}

export default App
