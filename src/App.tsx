import { Route, Routes } from 'react-router-dom'

import LandingPage from './pages/Landing/LandingPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import AboutPage from './pages/About/AboutPage'
import ServicesPage from './pages/Services/ServicesPage'
import PortfolioPage from './pages/Portfolio/PortfolioPage'
import ContactPage from './pages/Contact/ContactPage'
import {
  footerNavLinksLeft,
  footerNavLinksRight,
  footerSocialIcons,
} from './data/index'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer
        footerSocialIcons={footerSocialIcons}
        footerNavLinksLeft={footerNavLinksLeft}
        footerNavLinksRight={footerNavLinksRight}
      />
    </>
  )
}

export default App
