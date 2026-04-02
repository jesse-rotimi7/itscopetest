import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  activeSection?: string
  onNavigate?: (sectionId: string) => void
}

const Layout = ({ children, activeSection = 'home', onNavigate }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} onNavigate={onNavigate} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout 