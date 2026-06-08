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
        @media (max-width: 1024px) {
          .vt-hero-content {
            margin: 0 auto;
            width: 100%;
            text-align: center;
          }
        }
        .mc-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 50px;
        }
        .mc-service-card {
          background: linear-gradient(135deg, #1e2d3d, #b8753e);
          border-radius: 18px;
          padding: 34px 28px 40px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        .mc-service-card::before {
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
        .mc-service-card::after {
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
        .mc-service-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow:
            0 30px 60px rgba(25,40,58,0.35),
            0 0 50px rgba(175,105,63,0.15);
        }
        .mc-service-card:hover::before {
          background: #ffffff;
          width: 4px;
          box-shadow: 0 0 14px rgba(255,255,255,0.5);
        }
        .mc-service-card:hover::after {
          left: 100%;
        }
        .mc-service-num {
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
        .mc-service-card:hover .mc-service-num {
          color: rgba(255,255,255,0.08);
        }
        .mc-service-icon {
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
        .mc-service-card:hover .mc-service-icon {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border-color: transparent;
          box-shadow: 0 8px 28px rgba(175,105,63,0.35);
          transform: scale(1.1) rotate(-3deg);
        }
        .mc-service-icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
          transition: transform 0.6s ease;
        }
        .mc-service-card:hover .mc-service-icon svg {
          transform: scale(1.08);
        }
        .mc-service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .mc-service-card:hover h3 {
          color: #ffffff;
        }
        .mc-service-card p {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin: 0;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .mc-service-card:hover p {
          color: rgba(255,255,255,0.75);
        }
        .cn-mortgage {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .cn-mortgage::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(175, 105, 63, 0.12), transparent);
        }
        .cn-mortgage::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(175, 105, 63, 0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }
        .cn-mortgage-header {
          text-align: center;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }
        .cn-mortgage-badge {
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
        .cn-mortgage-title {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0;
          font-family: 'Playfair Display', serif;
          line-height: 1.15;
        }
        .cn-mortgage-title span {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cn-mortgage-intro {
          text-align: center;
          max-width: 620px;
          margin: 20px auto 50px;
          position: relative;
          z-index: 1;
        }
        .cn-mortgage-intro p {
          font-size: 16px;
          color: var(--text-light);
          line-height: 1.85;
        }
        .cn-mortgage-intro-accent {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
          margin: 22px auto 0;
          border-radius: 2px;
        }
        .cn-mortgage-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .cn-mortgage-card {
          background: linear-gradient(135deg, #19283a, #ae683f);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        .cn-mortgage-card::before {
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
        .cn-mortgage-card::after {
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
        .cn-mortgage-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow:
            0 30px 60px rgba(25,40,58,0.35),
            0 0 50px rgba(175,105,63,0.15);
        }
        .cn-mortgage-card:hover::before {
          background: #ffffff;
          width: 4px;
          box-shadow: 0 0 14px rgba(255,255,255,0.5);
        }
        .cn-mortgage-card:hover::after {
          left: 100%;
        }
        .cn-mortgage-card:hover .cn-mortgage-card-icon {
          transform: scale(1.1) rotate(-3deg);
          box-shadow: 0 8px 25px rgba(175, 105, 63, 0.3);
        }
        .cn-mortgage-card:hover .cn-mortgage-card-num {
          color: rgba(255,255,255,0.1);
        }
        .cn-mortgage-card:hover h3 {
          color: #ffffff;
        }
        .cn-mortgage-card:hover li {
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
        }
        .cn-mortgage-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }
        .cn-mortgage-card-icon {
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
        .cn-mortgage-card-icon svg {
          width: 22px;
          height: 22px;
          color: #fff;
        }
        .cn-mortgage-card-num {
          margin-left: auto;
          font-size: 26px;
          font-weight: 800;
          color: rgba(255,255,255,0.06);
          font-family: 'Playfair Display', serif;
          line-height: 1;
          transition: color 0.4s ease;
        }
        .cn-mortgage-card h3 {
          font-size: 17px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 8px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cn-mortgage-card-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin-bottom: 14px;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cn-mortgage-card:hover .cn-mortgage-card-desc {
          color: rgba(255,255,255,0.75);
        }
        .cn-mortgage-card ul {
          display: flex;
          flex-direction: column;
          gap: 7px;
          position: relative;
          z-index: 2;
        }
        .cn-mortgage-card li {
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
        .cn-mortgage-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.7;
          flex-shrink: 0;
        }
        @media (max-width: 1024px) {
          .mc-service-grid { grid-template-columns: repeat(2, 1fr); }
          .cn-mortgage-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .mc-service-grid { grid-template-columns: 1fr; }
          .cn-mortgage {
            padding: 70px 0;
          }
          .cn-mortgage-grid { grid-template-columns: 1fr; }
          .cn-mortgage-card { padding: 24px 20px; }
        }
        @media (max-width: 480px) {
          .vt-hero-content { padding: 0 16px; }
        }
      `}</style>

      <section className="vt-hero">
        <img className="vt-hero-video" src="/mortgage-hero.jpg" alt="Mortgage Consultancy" />
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

      <section className="cn-mortgage">
        <div className="container">
          <div className="cn-mortgage-header">
            <span className="cn-mortgage-badge">MORTGAGE SOLUTIONS</span>
            <h2 className="cn-mortgage-title">Mortgage <span>Consultancy</span></h2>
          </div>
          <div className="cn-mortgage-intro">
            <p>Comprehensive mortgage advisory services designed to help individuals and investors secure the right financing solutions for their property goals with expert guidance every step of the way.</p>
            <div className="cn-mortgage-intro-accent" />
          </div>

          <div className="cn-mortgage-grid">
            <div className="cn-mortgage-card">
              <div className="cn-mortgage-card-header">
                <div className="cn-mortgage-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <span className="cn-mortgage-card-num">01</span>
              </div>
              <h3>Residential Mortgages</h3>
              <p className="cn-mortgage-card-desc">Expert guidance for securing residential mortgages tailored to your homeownership goals and financial profile.</p>
              <ul>
                <li><span className="cn-mortgage-dot" />Home Purchase Loans</li>
                <li><span className="cn-mortgage-dot" />First-Time Buyer Support</li>
                <li><span className="cn-mortgage-dot" />Mortgage Approval Assistance</li>
              </ul>
            </div>
            <div className="cn-mortgage-card">
              <div className="cn-mortgage-card-header">
                <div className="cn-mortgage-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 6h2" /><path d="M13 6h2" /><path d="M9 10h2" /><path d="M13 10h2" /><path d="M9 14h2" /><path d="M13 14h2" /><path d="M9 18h6" />
                  </svg>
                </div>
                <span className="cn-mortgage-card-num">02</span>
              </div>
              <h3>Commercial Mortgages</h3>
              <p className="cn-mortgage-card-desc">Customized financing solutions for commercial properties, offices, retail spaces, and investment projects.</p>
              <ul>
                <li><span className="cn-mortgage-dot" />Commercial Property Loans</li>
                <li><span className="cn-mortgage-dot" />Business Property Financing</li>
                <li><span className="cn-mortgage-dot" />Investment Mortgages</li>
              </ul>
            </div>
            <div className="cn-mortgage-card">
              <div className="cn-mortgage-card-header">
                <div className="cn-mortgage-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15l2 2 4-4" />
                  </svg>
                </div>
                <span className="cn-mortgage-card-num">03</span>
              </div>
              <h3>Mortgage Pre-Approval</h3>
              <p className="cn-mortgage-card-desc">Strengthen your buying position with professional mortgage pre-approval and eligibility assessment services.</p>
              <ul>
                <li><span className="cn-mortgage-dot" />Eligibility Assessment</li>
                <li><span className="cn-mortgage-dot" />Credit Evaluation</li>
                <li><span className="cn-mortgage-dot" />Pre-Approval Processing</li>
              </ul>
            </div>
            <div className="cn-mortgage-card">
              <div className="cn-mortgage-card-header">
                <div className="cn-mortgage-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
                  </svg>
                </div>
                <span className="cn-mortgage-card-num">04</span>
              </div>
              <h3>Mortgage Refinancing</h3>
              <p className="cn-mortgage-card-desc">Reduce costs and improve financial flexibility through strategic mortgage refinancing solutions.</p>
              <ul>
                <li><span className="cn-mortgage-dot" />Loan Restructuring</li>
                <li><span className="cn-mortgage-dot" />Interest Rate Optimization</li>
                <li><span className="cn-mortgage-dot" />Refinancing Support</li>
              </ul>
            </div>
            <div className="cn-mortgage-card">
              <div className="cn-mortgage-card-header">
                <div className="cn-mortgage-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="6" width="22" height="3" rx="1" /><path d="M3 9v8" /><path d="M7 9v8" /><path d="M11 9v8" /><path d="M15 9v8" /><path d="M19 9v8" /><path d="M2 22h20" /><path d="M12 2L2 6h20L12 2z" />
                  </svg>
                </div>
                <span className="cn-mortgage-card-num">05</span>
              </div>
              <h3>Bank Liaison Services</h3>
              <p className="cn-mortgage-card-desc">Dedicated coordination with leading banks and lenders to simplify and accelerate the mortgage process.</p>
              <ul>
                <li><span className="cn-mortgage-dot" />Lender Coordination</li>
                <li><span className="cn-mortgage-dot" />Application Management</li>
                <li><span className="cn-mortgage-dot" />Approval Follow-Up</li>
              </ul>
            </div>
            <div className="cn-mortgage-card">
              <div className="cn-mortgage-card-header">
                <div className="cn-mortgage-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /><polyline points="2 20 22 20" />
                  </svg>
                </div>
                <span className="cn-mortgage-card-num">06</span>
              </div>
              <h3>Investment Property Financing</h3>
              <p className="cn-mortgage-card-desc">Specialized financing solutions for property investors seeking long-term growth and portfolio expansion.</p>
              <ul>
                <li><span className="cn-mortgage-dot" />Buy-to-Let Mortgages</li>
                <li><span className="cn-mortgage-dot" />Investment Analysis</li>
                <li><span className="cn-mortgage-dot" />Portfolio Financing</li>
              </ul>
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
              <span className="mc-service-num">01</span>
              <div className="mc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>Home Purchase Advisory</h3>
              <p>Comprehensive guidance on mortgage options, interest rates, and loan structures for first-time and repeat homebuyers.</p>
            </div>
            <div className="mc-service-card">
              <span className="mc-service-num">02</span>
              <div className="mc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <h3>Investment Property Loans</h3>
              <p>Specialized financing solutions for real estate investors including buy-to-let mortgages and portfolio lending.</p>
            </div>
            <div className="mc-service-card">
              <span className="mc-service-num">03</span>
              <div className="mc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10" /><polyline points="20.49 15.13 21 16 22 16 22 18 16 18 16 16 18 16 18.39 15.24" /><path d="M2 11.5V5a2 2 0 012-2h16a2 2 0 012 2v3" /><path d="M2 12.5V19a2 2 0 002 2h8" /><path d="M8 15h6" /><circle cx="14" cy="17" r="4" />
                </svg>
              </div>
              <h3>Refinancing</h3>
              <p>Evaluate refinancing opportunities to secure better rates, reduce monthly payments, or access home equity.</p>
            </div>
            <div className="mc-service-card">
              <span className="mc-service-num">04</span>
              <div className="mc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Credit Assessment</h3>
              <p>Thorough credit analysis and pre-qualification to determine borrowing capacity and identify the best loan options.</p>
            </div>
            <div className="mc-service-card">
              <span className="mc-service-num">05</span>
              <div className="mc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3>Documentation Support</h3>
              <p>End-to-end assistance with mortgage applications, documentation, and approval processes for a smooth experience.</p>
            </div>
            <div className="mc-service-card">
              <span className="mc-service-num">06</span>
              <div className="mc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
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
