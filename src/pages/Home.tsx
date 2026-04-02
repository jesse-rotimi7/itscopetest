import { useEffect } from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'

const HomePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="home">
        <Home />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="services">
        <Services />
      </section>
    </>
  )
}

export default HomePage 