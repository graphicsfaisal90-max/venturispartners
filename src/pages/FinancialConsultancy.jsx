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
        @media (max-width: 1024px) {
          .vt-hero-content {
            margin: 0 auto;
            width: 100%;
            text-align: center;
          }
        }
        .fc-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 50px;
        }
        .fc-service-card {
          background: linear-gradient(135deg, #1e2d3d, #b8753e);
          border-radius: 18px;
          padding: 34px 28px 40px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        .fc-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: rgba(255,255,255,0.35);
          border-radius: 0 2px 2px 0;
          transition: all 0.4s ease;
          z-index: 2;
        }
        .fc-service-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
          z-index: 1;
        }
        .fc-service-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow:
            0 30px 60px rgba(25,40,58,0.35),
            0 0 50px rgba(175,105,63,0.15);
        }
        .fc-service-card:hover::before {
          background: #ffffff;
          width: 4px;
          box-shadow: 0 0 14px rgba(255,255,255,0.5);
        }
        .fc-service-card:hover::after {
          left: 100%;
        }
        .fc-service-num {
          font-size: 42px;
          font-weight: 800;
          font-family: 'Playfair Display', serif;
          color: rgba(255,255,255,0.04);
          position: absolute;
          top: 12px;
          right: 18px;
          line-height: 1;
          pointer-events: none;
          z-index: 1;
          transition: color 0.5s ease;
        }
        .fc-service-card:hover .fc-service-num {
          color: rgba(255,255,255,0.08);
        }
        .fc-service-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          background: rgba(175,105,63,0.25);
          border: 1px solid rgba(255,255,255,0.12);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 2;
        }
        .fc-service-card:hover .fc-service-icon {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border-color: transparent;
          box-shadow: 0 8px 28px rgba(175,105,63,0.35);
          transform: scale(1.1) rotate(-3deg);
        }
        .fc-service-icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
          transition: transform 0.6s ease;
        }
        .fc-service-card:hover .fc-service-icon svg {
          transform: scale(1.08);
        }
        .fc-service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .fc-service-card:hover h3 {
          color: #ffffff;
        }
        .fc-service-card p {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin: 0;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .fc-service-card:hover p {
          color: rgba(255,255,255,0.75);
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
        @media (max-width: 1024px) {
          .fc-service-grid { grid-template-columns: repeat(2, 1fr); }
          .fc-features { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .fc-service-grid { grid-template-columns: 1fr; }
          .fc-features { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .vt-hero-content { padding: 0 16px; }
        }
        .cn-financial {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .cn-financial::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(175, 105, 63, 0.12), transparent);
        }
        .cn-financial::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(175, 105, 63, 0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }
        .cn-fin-header {
          text-align: center;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }
        .cn-fin-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: 7px 20px;
          background: rgba(175, 105, 63, 0.08);
          border: 1px solid rgba(175, 105, 63, 0.2);
          border-radius: 50px;
          margin-bottom: 18px;
        }
        .cn-fin-title {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0;
          font-family: 'Playfair Display', serif;
          line-height: 1.15;
        }
        .cn-fin-title span {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cn-fin-intro {
          text-align: center;
          max-width: 620px;
          margin: 20px auto 50px;
          position: relative;
          z-index: 1;
        }
        .cn-fin-intro p {
          font-size: 16px;
          color: var(--text-light);
          line-height: 1.85;
        }
        .cn-fin-intro-accent {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
          margin: 22px auto 0;
          border-radius: 2px;
        }
        .cn-fin-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .cn-fin-card {
          background: linear-gradient(135deg, #19283a, #ae683f);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        .cn-fin-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: rgba(255,255,255,0.4);
          border-radius: 0 2px 2px 0;
          transition: all 0.4s ease;
          z-index: 3;
        }
        .cn-fin-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
          z-index: 1;
        }
        .cn-fin-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow:
            0 30px 60px rgba(25,40,58,0.35),
            0 0 50px rgba(175,105,63,0.15);
        }
        .cn-fin-card:hover::before {
          background: #ffffff;
          width: 4px;
          box-shadow: 0 0 14px rgba(255,255,255,0.5);
        }
        .cn-fin-card:hover::after {
          left: 100%;
        }
        .cn-fin-card:hover .cn-fin-card-icon {
          transform: scale(1.1) rotate(-3deg);
          box-shadow: 0 8px 25px rgba(175, 105, 63, 0.3);
        }
        .cn-fin-card:hover .cn-fin-card-num {
          color: rgba(255,255,255,0.1);
        }
        .cn-fin-card:hover h3 {
          color: #ffffff;
        }
        .cn-fin-card:hover li {
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
        }
        .cn-fin-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }
        .cn-fin-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border: none;
        }
        .cn-fin-card-icon svg {
          width: 22px;
          height: 22px;
          color: #fff;
        }
        .cn-fin-card-num {
          margin-left: auto;
          font-size: 26px;
          font-weight: 800;
          color: rgba(255,255,255,0.06);
          font-family: 'Playfair Display', serif;
          line-height: 1;
          transition: color 0.4s ease;
        }
        .cn-fin-card h3 {
          font-size: 17px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 8px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cn-fin-card-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin-bottom: 14px;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cn-fin-card:hover .cn-fin-card-desc {
          color: rgba(255,255,255,0.75);
        }
        .cn-fin-card ul {
          display: flex;
          flex-direction: column;
          gap: 7px;
          position: relative;
          z-index: 2;
        }
        .cn-fin-card li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: rgba(255,255,255,0.55);
          transition: all 0.3s ease;
          padding: 5px 10px;
          background: rgba(255,255,255,0.06);
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .cn-fin-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.7;
          flex-shrink: 0;
        }
        @media (max-width: 1024px) {
          .cn-fin-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .cn-financial {
            padding: 70px 0;
          }
          .cn-fin-grid {
            grid-template-columns: 1fr;
          }
          .cn-fin-card {
            padding: 24px 20px;
          }
        }
        @media (max-width: 480px) {
          .cn-fin-card {
            padding: 20px 16px;
          }
          .cn-fin-card-header {
            gap: 10px;
          }
          .cn-fin-card-icon {
            width: 40px;
            height: 40px;
          }
          .cn-fin-card-icon svg {
            width: 18px;
            height: 18px;
          }
          .cn-fin-card h3 {
            font-size: 15px;
          }
          .cn-fin-card-desc {
            font-size: 12.5px;
          }
          .cn-fin-card li {
            font-size: 12px;
            padding: 4px 8px;
          }
        }
      `}</style>

      <section className="vt-hero">
        <img className="vt-hero-video" src="https://tagco.pk/wp-content/uploads/2024/11/TAG-Supports-Effective-Financial-scaled.jpg" alt="Financial Consultancy" />
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
              <span className="fc-service-num">01</span>
              <div className="fc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3>Strategic Planning</h3>
              <p>Comprehensive financial planning aligned with your long-term business objectives and growth aspirations.</p>
            </div>
            <div className="fc-service-card">
              <span className="fc-service-num">02</span>
              <div className="fc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h3>Investment Advisory</h3>
              <p>Expert guidance on investment opportunities, portfolio diversification, and asset allocation strategies.</p>
            </div>
            <div className="fc-service-card">
              <span className="fc-service-num">03</span>
              <div className="fc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Risk Management</h3>
              <p>Identification and mitigation of financial risks through robust frameworks and proactive monitoring.</p>
            </div>
            <div className="fc-service-card">
              <span className="fc-service-num">04</span>
              <div className="fc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3>M&A Advisory</h3>
              <p>End-to-end support for mergers, acquisitions, and divestitures including valuation and due diligence.</p>
            </div>
            <div className="fc-service-card">
              <span className="fc-service-num">05</span>
              <div className="fc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3>Regulatory Compliance</h3>
              <p>Navigating complex regulatory environments with expert compliance guidance and reporting support.</p>
            </div>
            <div className="fc-service-card">
              <span className="fc-service-num">06</span>
              <div className="fc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <h3>Wealth Management</h3>
              <p>Tailored wealth preservation and growth strategies for high-net-worth individuals and family offices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cn-financial">
        <div className="container">
          <div className="cn-fin-header">
            <span className="cn-fin-badge">FINANCIAL SOLUTIONS</span>
            <h2 className="cn-fin-title">Financial <span>Consultancy</span></h2>
          </div>
          <div className="cn-fin-intro">
            <p>Comprehensive financial advisory services designed to help individuals and businesses achieve long-term financial stability, growth, and success through expert guidance and strategic planning.</p>
            <div className="cn-fin-intro-accent" />
          </div>

          <div className="cn-fin-grid">
            <div className="cn-fin-card">
              <div className="cn-fin-card-header">
                <div className="cn-fin-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 1 18" /><polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <span className="cn-fin-card-num">01</span>
              </div>
              <h3>Financial Planning</h3>
              <p className="cn-fin-card-desc">Strategic financial planning solutions designed to help individuals and businesses achieve long-term financial stability and growth.</p>
              <ul>
                <li><span className="cn-fin-dot" />Budget Planning</li>
                <li><span className="cn-fin-dot" />Cash Flow Management</li>
                <li><span className="cn-fin-dot" />Financial Goal Setting</li>
              </ul>
            </div>
            <div className="cn-fin-card">
              <div className="cn-fin-card-header">
                <div className="cn-fin-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <span className="cn-fin-card-num">02</span>
              </div>
              <h3>Investment Advisory</h3>
              <p className="cn-fin-card-desc">Professional investment guidance to help clients make informed decisions and maximize potential returns.</p>
              <ul>
                <li><span className="cn-fin-dot" />Portfolio Management</li>
                <li><span className="cn-fin-dot" />Investment Strategies</li>
                <li><span className="cn-fin-dot" />Market Analysis</li>
              </ul>
            </div>
            <div className="cn-fin-card">
              <div className="cn-fin-card-header">
                <div className="cn-fin-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 15V9" /><path d="M9 12h6" />
                  </svg>
                </div>
                <span className="cn-fin-card-num">03</span>
              </div>
              <h3>Wealth Management</h3>
              <p className="cn-fin-card-desc">Comprehensive wealth management services focused on preserving, growing, and transferring wealth effectively.</p>
              <ul>
                <li><span className="cn-fin-dot" />Asset Management</li>
                <li><span className="cn-fin-dot" />Retirement Planning</li>
                <li><span className="cn-fin-dot" />Estate Planning</li>
              </ul>
            </div>
            <div className="cn-fin-card">
              <div className="cn-fin-card-header">
                <div className="cn-fin-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                </div>
                <span className="cn-fin-card-num">04</span>
              </div>
              <h3>Business Finance</h3>
              <p className="cn-fin-card-desc">Financial solutions and advisory services to support business expansion, profitability, and operational efficiency.</p>
              <ul>
                <li><span className="cn-fin-dot" />Business Valuation</li>
                <li><span className="cn-fin-dot" />Financial Forecasting</li>
                <li><span className="cn-fin-dot" />Capital Planning</li>
              </ul>
            </div>
            <div className="cn-fin-card">
              <div className="cn-fin-card-header">
                <div className="cn-fin-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" /><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                </div>
                <span className="cn-fin-card-num">05</span>
              </div>
              <h3>Tax & Compliance</h3>
              <p className="cn-fin-card-desc">Expert assistance with tax planning, compliance management, and financial regulations for businesses and individuals.</p>
              <ul>
                <li><span className="cn-fin-dot" />Tax Planning</li>
                <li><span className="cn-fin-dot" />Regulatory Compliance</li>
                <li><span className="cn-fin-dot" />Financial Reporting</li>
              </ul>
            </div>
            <div className="cn-fin-card">
              <div className="cn-fin-card-header">
                <div className="cn-fin-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="cn-fin-card-num">06</span>
              </div>
              <h3>Risk Management</h3>
              <p className="cn-fin-card-desc">Identify, assess, and mitigate financial risks through strategic planning and professional advisory services.</p>
              <ul>
                <li><span className="cn-fin-dot" />Risk Assessment</li>
                <li><span className="cn-fin-dot" />Insurance Advisory</li>
                <li><span className="cn-fin-dot" />Financial Protection</li>
              </ul>
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
