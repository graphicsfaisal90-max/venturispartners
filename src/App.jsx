import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import VenturisTech from './pages/VenturisTech'
import ECommerceTrading from './pages/ECommerceTrading'
import Consultancy from './pages/Consultancy'
import FinancialConsultancy from './pages/FinancialConsultancy'
import ClientConsultancy from './pages/ClientConsultancy'
import DocumentationConsultancy from './pages/DocumentationConsultancy'
import ComprehensiveConsultancy from './pages/ComprehensiveConsultancy'
import CorporateConsultancy from './pages/CorporateConsultancy'
import MortgageConsultancy from './pages/MortgageConsultancy'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/venturis-tech" element={<VenturisTech />} />
        <Route path="services/e-commerce-trading" element={<ECommerceTrading />} />
        <Route path="services/consultancy" element={<Consultancy />} />
        <Route path="services/consultancy/financial-consultancy" element={<FinancialConsultancy />} />
        <Route path="services/consultancy/client-consultancy" element={<ClientConsultancy />} />
        <Route path="services/consultancy/documentation-consultancy" element={<DocumentationConsultancy />} />
        <Route path="services/consultancy/comprehensive-consultancy" element={<ComprehensiveConsultancy />} />
        <Route path="services/consultancy/corporate-consultancy" element={<CorporateConsultancy />} />
        <Route path="services/consultancy/mortgage-consultancy" element={<MortgageConsultancy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Routes>
  )
}

export default App
