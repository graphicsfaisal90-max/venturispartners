import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.svg" alt="Venturis Partners" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Empowering businesses with strategic insights and innovative solutions. Your trusted partner in growth and transformation.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Strategy Consulting</Link></li>
              <li><Link to="/services">Business Analytics</Link></li>
              <li><Link to="/services">Digital Transformation</Link></li>
              <li><Link to="/services">Risk Management</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><strong>Head Office:</strong> 5th Floor Al Saqr Tower SZR Dubai UAE</li>
              <li><strong>US Office:</strong> 6501 Arlington Expressway B105 #7330 Jacksonville FL 32211 United States</li>
              <li>info@venturisholdings.com</li>
              <li>+971 58 531 8860 &nbsp;|&nbsp; +1 (904) 6550900</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Venturis Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
