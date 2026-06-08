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
        .cpc-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 50px;
        }
        .cpc-service-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 30px;
          box-shadow: 0 2px 20px rgba(25,40,58,0.06);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border-top: 3px solid #af693f;
        }
        .cpc-service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(25,40,58,0.12);
        }
        .cpc-service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #19283a;
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
        }
        .cpc-service-card p {
          font-size: 14px;
          color: #5a6577;
          line-height: 1.7;
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
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto 56px;
          position: relative;
          z-index: 1;
        }
        .cn-corp-division {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
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
          background: linear-gradient(180deg, var(--accent), #c97a4a);
          border-radius: 0 0 2px 2px;
        }
        .cn-corp-division:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(25, 40, 58, 0.08);
          border-color: rgba(175, 105, 63, 0.15);
          background: #ffffff;
        }
        .cn-corp-division:hover .cn-corp-div-icon {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 8px 25px rgba(175, 105, 63, 0.3);
        }
        .cn-corp-div-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, var(--accent), #c97a4a);
        }
        .cn-corp-div-icon svg {
          width: 22px;
          height: 22px;
          color: #fff;
        }
        .cn-corp-division h4 {
          font-size: 17px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          transition: color 0.3s ease;
        }
        .cn-corp-division:hover h4 {
          color: var(--accent);
        }
        .cn-corp-division p {
          font-size: 13.5px;
          color: var(--text-light);
          line-height: 1.7;
          margin: 0;
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
        .cn-corp-sister {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .cn-corp-sister::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .cn-corp-sister:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(25, 40, 58, 0.08);
          border-color: rgba(175, 105, 63, 0.15);
          background: #ffffff;
        }
        .cn-corp-sister:hover::before {
          opacity: 1;
        }
        .cn-corp-sister-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, var(--accent), #c97a4a);
        }
        .cn-corp-sister:hover .cn-corp-sister-icon {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 8px 25px rgba(175, 105, 63, 0.3);
        }
        .cn-corp-sister-icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
        }
        .cn-corp-sister h5 {
          font-size: 16px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          transition: color 0.3s ease;
        }
        .cn-corp-sister:hover h5 {
          color: var(--accent);
        }
        .cn-corp-sister p {
          font-size: 13px;
          color: var(--text-light);
          line-height: 1.7;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .cn-corp-divisions {
            grid-template-columns: repeat(2, 1fr);
          }
          .cn-corp-sisters {
            grid-template-columns: repeat(2, 1fr);
          }
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
      `}</style>

      <section className="vt-hero">
        <img className="vt-hero-video" src="/client-hero.jpg" alt="Corporate Consultancy" />
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
              <h3>Board Advisory</h3>
              <p>Strategic guidance to boards on governance best practices, fiduciary responsibilities, and regulatory compliance.</p>
            </div>
            <div className="cpc-service-card">
              <h3>M&A Advisory</h3>
              <p>End-to-end transaction support including target identification, valuation, due diligence, and integration planning.</p>
            </div>
            <div className="cpc-service-card">
              <h3>Organizational Design</h3>
              <p>Restructure your organization for optimal performance, agility, and alignment with strategic objectives.</p>
            </div>
            <div className="cpc-service-card">
              <h3>Risk & Compliance</h3>
              <p>Comprehensive risk assessment frameworks and compliance programs tailored to your industry and regulatory environment.</p>
            </div>
            <div className="cpc-service-card">
              <h3>Strategic Partnerships</h3>
              <p>Identify, evaluate, and structure strategic alliances, joint ventures, and partnership opportunities.</p>
            </div>
            <div className="cpc-service-card">
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
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4>Financial Consultancy</h4>
              <p>Investment strategies, portfolio planning, risk management, and financial advisory solutions tailored for sustainable business growth.</p>
            </div>
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

          <div className="cn-corp-section-label">
            <h3>Sister Companies</h3>
            <p>Complementary services under one umbrella</p>
          </div>
          <div className="cn-corp-sisters">
            <div className="cn-corp-sister">
              <div className="cn-corp-sister-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h5>Accounting Services</h5>
              <p>Comprehensive accounting solutions including bookkeeping, financial reporting, payroll management, and audit support for businesses of all sizes.</p>
            </div>
            <div className="cn-corp-sister">
              <div className="cn-corp-sister-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              </div>
              <h5>Tax Advisory</h5>
              <p>Expert tax planning, VAT consultation, corporate tax compliance, and strategic advisory services to optimize tax efficiency and ensure regulatory adherence.</p>
            </div>
            <div className="cn-corp-sister">
              <div className="cn-corp-sister-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h5>Mortgage Consultancy</h5>
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
