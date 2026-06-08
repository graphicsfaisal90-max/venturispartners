import { Link } from 'react-router-dom'
import './VenturisTech.css'

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function CorporateConsultancy() {
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
        .cpc-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 50px;
        }
        .cpc-service-card {
          background: linear-gradient(135deg, #1e2d3d, #b8753e);
          border-radius: 18px;
          padding: 34px 28px 40px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        .cpc-service-card::before {
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
        .cpc-service-card::after {
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
        .cpc-service-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow:
            0 30px 60px rgba(25,40,58,0.35),
            0 0 50px rgba(175,105,63,0.15);
        }
        .cpc-service-card:hover::before {
          background: #ffffff;
          width: 4px;
          box-shadow: 0 0 14px rgba(255,255,255,0.5);
        }
        .cpc-service-card:hover::after {
          left: 100%;
        }
        .cpc-service-num {
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
        .cpc-service-card:hover .cpc-service-num {
          color: rgba(255,255,255,0.08);
        }
        .cpc-service-icon {
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
        .cpc-service-card:hover .cpc-service-icon {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border-color: transparent;
          box-shadow: 0 8px 28px rgba(175,105,63,0.35);
          transform: scale(1.1) rotate(-3deg);
        }
        .cpc-service-icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
          transition: transform 0.6s ease;
        }
        .cpc-service-card:hover .cpc-service-icon svg {
          transform: scale(1.08);
        }
        .cpc-service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cpc-service-card:hover h3 {
          color: #ffffff;
        }
        .cpc-service-card p {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin: 0;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cpc-service-card:hover p {
          color: rgba(255,255,255,0.75);
        }

        .cn-corporate {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .cn-corporate::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(175, 105, 63, 0.12), transparent);
        }
        .cn-corporate::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(175, 105, 63, 0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }
        .cn-corp-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .cn-corp-orb--1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.04), transparent 70%);
          top: -200px;
          left: -150px;
        }
        .cn-corp-orb--2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.03), transparent 70%);
          bottom: -100px;
          right: -100px;
        }
        .cn-corp-header {
          text-align: center;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }
        .cn-corp-badge {
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
        .cn-corp-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: var(--primary);
          line-height: 1.2;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          max-width: 650px;
          margin: 0 auto 14px;
        }
        .cn-corp-title span {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cn-corp-sub {
          font-size: 15.5px;
          color: var(--text-light);
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.75;
        }
        .cn-corp-intro-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin: 40px auto 50px;
          position: relative;
          z-index: 1;
        }
        .cn-corp-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 50px;
          font-size: 12px;
          color: var(--text-light);
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 600;
        }
        .cn-corp-pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
        }
        .cn-corp-section-label {
          text-align: center;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }
        .cn-corp-section-label h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--primary);
          font-family: 'Playfair Display', serif;
          margin-bottom: 6px;
        }
        .cn-corp-section-label p {
          font-size: 13px;
          color: var(--text-light);
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .cn-corp-divisions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto 56px;
          position: relative;
          z-index: 1;
        }
        .cn-corp-division {
          background: linear-gradient(135deg, #19283a, #ae683f);
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        .cn-corp-division::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: rgba(255,255,255,0.4);
          border-radius: 0 2px 2px 0;
          transition: all 0.4s ease;
          z-index: 2;
        }
        .cn-corp-division::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
          z-index: 1;
        }
        .cn-corp-division:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow:
            0 30px 60px rgba(25,40,58,0.35),
            0 0 50px rgba(175,105,63,0.18);
        }
        .cn-corp-division:hover::before {
          background: #ffffff;
          width: 4px;
          box-shadow: 0 0 14px rgba(255,255,255,0.5);
        }
        .cn-corp-division:hover::after {
          left: 100%;
        }
        .cn-corp-division:hover .cn-corp-div-icon {
          transform: scale(1.15) rotate(-5deg);
          box-shadow: 0 10px 30px rgba(175, 105, 63, 0.4);
        }
        .cn-corp-div-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: rgba(175,105,63,0.3);
          border: 1px solid rgba(255,255,255,0.15);
          position: relative;
          z-index: 2;
        }
        .cn-corp-division:hover .cn-corp-div-icon {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border-color: transparent;
          box-shadow: 0 10px 30px rgba(175, 105, 63, 0.4);
        }
        .cn-corp-div-icon svg {
          width: 22px;
          height: 22px;
          color: #fff;
          transition: transform 0.6s ease;
        }
        .cn-corp-division:hover .cn-corp-div-icon svg {
          transform: scale(1.1);
        }
        .cn-corp-division h4 {
          font-size: 17px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cn-corp-division:hover h4 {
          color: #ffffff;
        }
        .cn-corp-division p {
          font-size: 13.5px;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin: 0;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cn-corp-division:hover p {
          color: rgba(255,255,255,0.8);
        }
        .cn-corp-sisters {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 1024px) {
          .cn-corp-divisions {
            grid-template-columns: repeat(2, 1fr);
          }
          .cn-corp-sisters {
            grid-template-columns: repeat(2, 1fr);
          }
          .cpc-service-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .cn-corporate {
            padding: 70px 0;
          }
          .cpc-service-grid { grid-template-columns: 1fr; }
          .cn-corp-divisions {
            grid-template-columns: 1fr;
          }
          .cn-corp-sisters {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .vt-hero-content { padding: 0 16px; }
        }
      `}</style>

      <section className="vt-hero">
        <img className="vt-hero-video" src="/corporate-hero.jpg" alt="Corporate Consultancy" />
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content">
          <span className="vt-hero-badge">CORPORATE CONSULTANCY</span>
          <h1 className="vt-hero-title">
            Corporate <span className="vt-hero-gradient-text">Consultancy</span><br />Solutions
          </h1>
          <p className="vt-hero-desc">
            Supporting organizations with strategic insights, business planning, and operational guidance to enhance performance, strengthen competitiveness, and drive sustainable growth.
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
                Enterprise-Grade <span className="vt-gradient-text">Corporate Advisory</span>
              </h2>
              <p className="vt-about-desc">
                Our corporate consultancy practice provides senior-level advisory services to established enterprises navigating complex business environments. We help organizations strengthen governance frameworks, execute strategic transactions, and build resilient structures that drive long-term shareholder value.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Corporate Governance
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Mergers & Acquisitions
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Organizational Restructuring
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Enterprise Risk Management
                </div>
              </div>
            </div>
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="/20.jpg" alt="Corporate Consultancy" className="vt-about-img" />
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
          <div className="cpc-service-grid">
            <div className="cpc-service-card">
              <span className="cpc-service-num">01</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>Board Advisory</h3>
              <p>Strategic guidance to boards on governance best practices, fiduciary responsibilities, and regulatory compliance.</p>
            </div>
            <div className="cpc-service-card">
              <span className="cpc-service-num">02</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>M&A Advisory</h3>
              <p>End-to-end transaction support including target identification, valuation, due diligence, and integration planning.</p>
            </div>
            <div className="cpc-service-card">
              <span className="cpc-service-num">03</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <h3>Organizational Design</h3>
              <p>Restructure your organization for optimal performance, agility, and alignment with strategic objectives.</p>
            </div>
            <div className="cpc-service-card">
              <span className="cpc-service-num">04</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Risk & Compliance</h3>
              <p>Comprehensive risk assessment frameworks and compliance programs tailored to your industry and regulatory environment.</p>
            </div>
            <div className="cpc-service-card">
              <span className="cpc-service-num">05</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>Strategic Partnerships</h3>
              <p>Identify, evaluate, and structure strategic alliances, joint ventures, and partnership opportunities.</p>
            </div>
            <div className="cpc-service-card">
              <span className="cpc-service-num">06</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3>Performance Management</h3>
              <p>Design and implement performance management systems that drive accountability and business results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cn-corporate">
        <div className="cn-corp-orb cn-corp-orb--1" />
        <div className="cn-corp-orb cn-corp-orb--2" />
        <div className="container">
          <div className="cn-corp-header">
            <span className="cn-corp-badge">CORPORATE GROUP</span>
            <h2 className="cn-corp-title">Corporate <span>Consultancy</span></h2>
            <p className="cn-corp-sub">
              Venturis Consultancy operates as a unified multi-sector advisory practice delivering professional solutions across strategy, finance, operations, and business transformation.
            </p>
          </div>

          <div className="cn-corp-intro-strip">
            <span className="cn-corp-pill"><span className="cn-corp-pill-dot" />Est. 2010</span>
            <span className="cn-corp-pill"><span className="cn-corp-pill-dot" />UAE Based</span>
            <span className="cn-corp-pill"><span className="cn-corp-pill-dot" />Multi-Sector</span>
            <span className="cn-corp-pill"><span className="cn-corp-pill-dot" />Global Reach</span>
          </div>

          <div className="cn-corp-section-label">
            <h3>Our Expertise</h3>
            <p>Four core divisions driving your success</p>
          </div>
          <div className="cn-corp-divisions">
            <div className="cn-corp-division">
              <div className="cn-corp-div-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4>Asset Management</h4>
              <p>Professional asset management services focused on wealth growth, operational efficiency, and long-term investment planning.</p>
            </div>
            <div className="cn-corp-division">
              <div className="cn-corp-div-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4>Legal Compliance</h4>
              <p>Ensuring compliance with local and international legal frameworks through professional documentation and regulatory guidance.</p>
            </div>
            <div className="cn-corp-division">
              <div className="cn-corp-div-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4>Business Incorporation</h4>
              <p>Business setup, company structuring, licensing support, and operational establishment services for startups and enterprises.</p>
            </div>
          </div>

          <div className="cn-corp-sisters">
            <div className="cn-corp-division">
              <div className="cn-corp-div-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4>Accounting Services</h4>
              <p>Comprehensive accounting solutions including bookkeeping, financial reporting, payroll management, and audit support for businesses of all sizes.</p>
            </div>
            <div className="cn-corp-division">
              <div className="cn-corp-div-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              </div>
              <h4>Tax Advisory</h4>
              <p>Expert tax planning, VAT consultation, corporate tax compliance, and strategic advisory services to optimize tax efficiency and ensure regulatory adherence.</p>
            </div>
            <div className="cn-corp-division">
              <div className="cn-corp-div-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4>Mortgage Consultancy</h4>
              <p>Professional mortgage advisory services covering home loans, property financing, refinancing solutions, and tailored lending strategies for individuals and investors.</p>
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
                <h2 className="vt-cta-title">Elevate Your Corporate Strategy</h2>
                <p className="vt-cta-desc">Partner with our corporate consultancy team to drive meaningful business transformation.</p>
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
