import { Link } from 'react-router-dom'
import './VenturisTech.css'

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function FinancialConsultancy() {
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
        .fc-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 50px;
        }
        .fc-service-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 30px;
          box-shadow: 0 2px 20px rgba(25,40,58,0.06);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border-top: 3px solid #af693f;
        }
        .fc-service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(25,40,58,0.12);
        }
        .fc-service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #19283a;
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
        }
        .fc-service-card p {
          font-size: 14px;
          color: #5a6577;
          line-height: 1.7;
        }
        .fc-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 40px;
        }
        .fc-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #19283a;
        }
        .fc-feature svg {
          flex-shrink: 0;
          color: #af693f;
        }
        @media (max-width: 768px) {
          .fc-service-grid { grid-template-columns: 1fr; }
          .fc-features { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="vt-hero">
        <img className="vt-hero-video" src="/client-hero.jpg" alt="Financial Consultancy" />
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content">
          <span className="vt-hero-badge">FINANCIAL CONSULTANCY</span>
          <h1 className="vt-hero-title">
            Financial <span className="vt-hero-gradient-text">Consultancy</span><br />Solutions
          </h1>
          <p className="vt-hero-desc">
            Providing expert financial guidance and strategic planning services to help individuals and businesses optimize resources, manage risks, and achieve long-term financial stability.
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
                Expert Financial <span className="vt-gradient-text">Guidance</span>
              </h2>
              <p className="vt-about-desc">
                Our financial consultancy practice delivers comprehensive advisory solutions tailored to your unique business needs. From strategic planning and investment analysis to risk management and capital optimization, we help organizations navigate complex financial landscapes with confidence.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Investment Strategy & Portfolio Planning
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Risk Assessment & Mitigation
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Capital Structure Optimization
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Financial Modeling & Forecasting
                </div>
              </div>
            </div>
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="/financial-consultancy.jpg" alt="Financial Consultancy" className="vt-about-img" />
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
          <div className="fc-service-grid">
            <div className="fc-service-card">
              <h3>Strategic Planning</h3>
              <p>Comprehensive financial planning aligned with your long-term business objectives and growth aspirations.</p>
            </div>
            <div className="fc-service-card">
              <h3>Investment Advisory</h3>
              <p>Expert guidance on investment opportunities, portfolio diversification, and asset allocation strategies.</p>
            </div>
            <div className="fc-service-card">
              <h3>Risk Management</h3>
              <p>Identification and mitigation of financial risks through robust frameworks and proactive monitoring.</p>
            </div>
            <div className="fc-service-card">
              <h3>M&A Advisory</h3>
              <p>End-to-end support for mergers, acquisitions, and divestitures including valuation and due diligence.</p>
            </div>
            <div className="fc-service-card">
              <h3>Regulatory Compliance</h3>
              <p>Navigating complex regulatory environments with expert compliance guidance and reporting support.</p>
            </div>
            <div className="fc-service-card">
              <h3>Wealth Management</h3>
              <p>Tailored wealth preservation and growth strategies for high-net-worth individuals and family offices.</p>
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
                <h2 className="vt-cta-title">Ready to Transform Your Financial Strategy?</h2>
                <p className="vt-cta-desc">Schedule a free consultation with our financial experts today.</p>
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
