import { Link } from 'react-router-dom'
import './VenturisTech.css'

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function MortgageConsultancy() {
  return (
    <>
      <style>{`
        .vt-hero-content {
          margin-left: 10%;
          width: 80%;
        }
        .vt-hero-actions .vt-btn-primary {
          background: linear-gradient(135deg, #19283a, #ae683f);
          color: #fff;
        }
        .vt-hero-actions .vt-btn-primary:hover {
          background: linear-gradient(135deg, #ae683f, #19283a);
          box-shadow: 0 12px 32px rgba(174, 104, 63, 0.35);
        }
        .mc-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 50px;
        }
        .mc-service-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 30px;
          box-shadow: 0 2px 20px rgba(25,40,58,0.06);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border-top: 3px solid #af693f;
        }
        .mc-service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(25,40,58,0.12);
        }
        .mc-service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #19283a;
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
        }
        .mc-service-card p {
          font-size: 14px;
          color: #5a6577;
          line-height: 1.7;
        }
        @media (max-width: 1024px) {
          .mc-service-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .mc-service-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .vt-hero-content { padding: 0 16px; }
        }
      `}</style>

      <section className="vt-hero">
        <img className="vt-hero-video" src="/client-hero.jpg" alt="Mortgage Consultancy" />
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content">
          <span className="vt-hero-badge">MORTGAGE CONSULTANCY</span>
          <h1 className="vt-hero-title">
            Mortgage <span className="vt-hero-gradient-text">Consultancy</span><br />Solutions
          </h1>
          <p className="vt-hero-desc">
            Helping clients navigate the mortgage process with confidence through personalized advice, financing solutions, and expert support tailored to their property goals.
          </p>
          <div className="vt-hero-actions">
            <Link to="/contact" className="vt-btn-primary">
              Book a Consultation <ArrowIcon />
            </Link>
            <Link to="/services" className="vt-btn-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="vt-about">
        <div className="container">
          <div className="vt-about-grid">
            <div className="vt-about-content">
              <span className="vt-badge">OVERVIEW</span>
              <h2 className="vt-about-title">
                Smart Mortgage <span className="vt-gradient-text">Solutions</span>
              </h2>
              <p className="vt-about-desc">
                Our mortgage consultancy provides expert guidance throughout the entire property financing journey. Whether you are a first-time homebuyer, an investor expanding your portfolio, or a homeowner seeking refinancing options, our advisors deliver personalized solutions that align with your financial goals and circumstances.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Home Loan Advisory
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Property Financing
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Refinancing Solutions
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Credit Assessment
                </div>
              </div>
            </div>
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="/30.png" alt="Mortgage Consultancy" className="vt-about-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8faff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR SERVICES</span>
            <h2 className="section-title">What We Offer</h2>
          </div>
          <div className="mc-service-grid">
            <div className="mc-service-card">
              <h3>Home Purchase Advisory</h3>
              <p>Comprehensive guidance on mortgage options, interest rates, and loan structures for first-time and repeat homebuyers.</p>
            </div>
            <div className="mc-service-card">
              <h3>Investment Property Loans</h3>
              <p>Specialized financing solutions for real estate investors including buy-to-let mortgages and portfolio lending.</p>
            </div>
            <div className="mc-service-card">
              <h3>Refinancing</h3>
              <p>Evaluate refinancing opportunities to secure better rates, reduce monthly payments, or access home equity.</p>
            </div>
            <div className="mc-service-card">
              <h3>Credit Assessment</h3>
              <p>Thorough credit analysis and pre-qualification to determine borrowing capacity and identify the best loan options.</p>
            </div>
            <div className="mc-service-card">
              <h3>Documentation Support</h3>
              <p>End-to-end assistance with mortgage applications, documentation, and approval processes for a smooth experience.</p>
            </div>
            <div className="mc-service-card">
              <h3>Property Insurance</h3>
              <p>Guidance on property insurance requirements and options to protect your investment and meet lender requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="vt-cta-section">
        <div className="container">
          <div className="vt-cta-card">
            <div className="vt-cta-glow"></div>
            <div className="vt-cta-body">
              <div className="vt-cta-text">
                <span className="vt-cta-badge">GET IN TOUCH</span>
                <h2 className="vt-cta-title">Ready to Find Your Perfect Mortgage?</h2>
                <p className="vt-cta-desc">Let our mortgage consultants help you navigate the path to property ownership.</p>
              </div>
              <div className="vt-cta-actions">
                <Link to="/contact" className="vt-btn-primary">
                  Schedule a Call <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
