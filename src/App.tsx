import { Route, Routes } from 'react-router-dom'

import LandingPage from './pages/Landing/LandingPage'

import AboutPage from './pages/About/AboutPage'
import ServicesPage from './pages/Services/ServicesPage'
import PortfolioPage from './pages/Portfolio/PortfolioPage'
import ContactPage from './pages/Contact/ContactPage'
import { aboutSections, portfolioItems, services } from './data/index'
import Layout from './Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/about"
          element={<AboutPage aboutSections={aboutSections} />}
        />
        <Route
          path="/services"
          element={<ServicesPage services={services} />}
        />
        <Route
          path="/portfolio"
          element={<PortfolioPage portfolioItems={portfolioItems} />}
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App
