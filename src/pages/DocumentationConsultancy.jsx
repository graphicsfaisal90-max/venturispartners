import { Link } from 'react-router-dom'
import './VenturisTech.css'

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function DocumentationConsultancy() {
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
        .dc-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 50px;
        }
        .dc-service-card {
          background: linear-gradient(135deg, #1e2d3d, #b8753e);
          border-radius: 18px;
          padding: 34px 28px 40px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        .dc-service-card::before {
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
        .dc-service-card::after {
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
        .dc-service-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow:
            0 30px 60px rgba(25,40,58,0.35),
            0 0 50px rgba(175,105,63,0.15);
        }
        .dc-service-card:hover::before {
          background: #ffffff;
          width: 4px;
          box-shadow: 0 0 14px rgba(255,255,255,0.5);
        }
        .dc-service-card:hover::after {
          left: 100%;
        }
        .dc-service-num {
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
        .dc-service-card:hover .dc-service-num {
          color: rgba(255,255,255,0.08);
        }
        .dc-service-icon {
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
        .dc-service-card:hover .dc-service-icon {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border-color: transparent;
          box-shadow: 0 8px 28px rgba(175,105,63,0.35);
          transform: scale(1.1) rotate(-3deg);
        }
        .dc-service-icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
          transition: transform 0.6s ease;
        }
        .dc-service-card:hover .dc-service-icon svg {
          transform: scale(1.08);
        }
        .dc-service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .dc-service-card:hover h3 {
          color: #ffffff;
        }
        .dc-service-card p {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin: 0;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .dc-service-card:hover p {
          color: rgba(255,255,255,0.75);
        }

        .cn-documentary {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .cn-documentary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(rgba(175, 105, 63, 0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }
        .cn-doc-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .cn-doc-orb--1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.04), transparent 70%);
          top: -150px;
          right: -100px;
        }
        .cn-doc-orb--2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.03), transparent 70%);
          bottom: -100px;
          left: -80px;
        }
        .cn-doc-header {
          text-align: center;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }
        .cn-doc-badge {
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
        .cn-doc-title {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0;
          font-family: 'Playfair Display', serif;
          line-height: 1.15;
        }
        .cn-doc-title span {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cn-doc-intro {
          text-align: center;
          max-width: 620px;
          margin: 20px auto 50px;
          position: relative;
          z-index: 1;
        }
        .cn-doc-intro p {
          font-size: 16px;
          color: var(--text-light);
          line-height: 1.85;
        }
        .cn-doc-intro-accent {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
          margin: 22px auto 0;
          border-radius: 2px;
        }
        .cn-doc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .cn-doc-card {
          background: linear-gradient(135deg, #19283a, #ae683f);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        .cn-doc-card::before {
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
        .cn-doc-card::after {
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
        .cn-doc-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow:
            0 30px 60px rgba(25,40,58,0.35),
            0 0 50px rgba(175,105,63,0.15);
        }
        .cn-doc-card:hover::before {
          background: #ffffff;
          width: 4px;
          box-shadow: 0 0 14px rgba(255,255,255,0.5);
        }
        .cn-doc-card:hover::after {
          left: 100%;
        }
        .cn-doc-card:hover .cn-doc-card-icon {
          transform: scale(1.1) rotate(-3deg);
          box-shadow: 0 8px 25px rgba(175, 105, 63, 0.3);
        }
        .cn-doc-card:hover .cn-doc-card-num {
          color: rgba(255,255,255,0.1);
        }
        .cn-doc-card:hover h3 {
          color: #ffffff;
        }
        .cn-doc-card:hover li {
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
        }
        .cn-doc-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }
        .cn-doc-card-icon {
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
        .cn-doc-card-icon svg {
          width: 22px;
          height: 22px;
          color: #fff;
        }
        .cn-doc-card-num {
          margin-left: auto;
          font-size: 26px;
          font-weight: 800;
          color: rgba(255,255,255,0.06);
          font-family: 'Playfair Display', serif;
          line-height: 1;
          transition: color 0.4s ease;
        }
        .cn-doc-card h3 {
          font-size: 17px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 8px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cn-doc-card-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin-bottom: 14px;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cn-doc-card:hover .cn-doc-card-desc {
          color: rgba(255,255,255,0.75);
        }
        .cn-doc-card ul {
          display: flex;
          flex-direction: column;
          gap: 7px;
          position: relative;
          z-index: 2;
        }
        .cn-doc-card li {
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
        .cn-doc-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.7;
          flex-shrink: 0;
        }
        .cn-doc-footer {
          max-width: 800px;
          margin: 48px auto 0;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 30px;
          align-items: center;
          background: linear-gradient(135deg, rgba(175, 105, 63, 0.04), rgba(201, 122, 74, 0.06));
          border: 1px solid rgba(175, 105, 63, 0.1);
          border-radius: 16px;
          padding: 36px 40px;
        }
        .cn-doc-footer p {
          font-size: 14.5px;
          color: var(--text-light);
          line-height: 1.8;
        }
        .cn-doc-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.4s ease;
          white-space: nowrap;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }
        .cn-doc-footer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(175, 105, 63, 0.3);
        }
        .cn-doc-footer-btn svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }
        .cn-doc-footer-btn:hover svg {
          transform: translateX(3px);
        }
        @media (max-width: 1024px) {
          .cn-doc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cn-doc-intro {
            margin: 16px auto 40px;
          }
          .cn-doc-footer {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .cn-doc-footer-btn {
            justify-content: center;
          }
          .dc-service-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .cn-documentary {
            padding: 70px 0;
          }
          .dc-service-grid { grid-template-columns: 1fr; }
          .cn-doc-grid {
            grid-template-columns: 1fr;
          }
          .cn-doc-card {
            padding: 24px 20px;
          }
          .cn-doc-footer {
            padding: 24px 20px;
          }
        }
        @media (max-width: 480px) {
          .vt-hero-content { padding: 0 16px; }
        }
      `}</style>

      <section className="vt-hero">
        <img className="vt-hero-video" src="/documentation-hero.jpg" alt="Documentation Consultancy" />
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content">
          <span className="vt-hero-badge">DOCUMENTATION CONSULTANCY</span>
          <h1 className="vt-hero-title">
            Documentation <span className="vt-hero-gradient-text">Consultancy</span><br />Solutions
          </h1>
          <p className="vt-hero-desc">
            Providing professional documentation support and compliance guidance to ensure accurate, organized, and efficient management of business, legal, and administrative records.
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
                Seamless Documentation <span className="vt-gradient-text">Solutions</span>
              </h2>
              <p className="vt-about-desc">
                Our documentation consultancy simplifies complex administrative processes across the UAE. From business setup and visa processing to legal attestation and government coordination, our expert team ensures a seamless experience at every step, saving you time and eliminating unnecessary hassle.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Visa Processing & Immigration
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Legal Document Attestation
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Business Setup & Licensing
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Government Service Coordination
                </div>
              </div>
            </div>
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="https://img.magnific.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?semt=ais_hybrid&w=740&q=80" alt="Documentation Consultancy" className="vt-about-img" />
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
          <div className="dc-service-grid">
            <div className="dc-service-card">
              <span className="dc-service-num">01</span>
              <div className="dc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                </svg>
              </div>
              <h3>Visa Processing</h3>
              <p>Comprehensive visa services including employment visas, investor visas, family sponsorships, and visit visas with end-to-end processing support.</p>
            </div>
            <div className="dc-service-card">
              <span className="dc-service-num">02</span>
              <div className="dc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4" /><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </div>
              <h3>Legal Attestation</h3>
              <p>Professional attestation of educational certificates, commercial documents, and personal papers from relevant authorities and embassies.</p>
            </div>
            <div className="dc-service-card">
              <span className="dc-service-num">03</span>
              <div className="dc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <h3>Business Setup</h3>
              <p>Complete business incorporation services including company formation, trade license acquisition, and PRO services across all UAE jurisdictions.</p>
            </div>
            <div className="dc-service-card">
              <span className="dc-service-num">04</span>
              <div className="dc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Government Services</h3>
              <p>Efficient processing of government-related transactions, renewals, and correspondence with local and federal authorities.</p>
            </div>
            <div className="dc-service-card">
              <span className="dc-service-num">05</span>
              <div className="dc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h3>Translation Services</h3>
              <p>Certified translation of legal, financial, and technical documents by qualified translators in multiple languages.</p>
            </div>
            <div className="dc-service-card">
              <span className="dc-service-num">06</span>
              <div className="dc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>PRO Services</h3>
              <p>Dedicated public relations officer services handling all government paperwork, submissions, and follow-ups on your behalf.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cn-documentary">
        <div className="cn-doc-orb cn-doc-orb--1" />
        <div className="cn-doc-orb cn-doc-orb--2" />
        <div className="container">
          <div className="cn-doc-header">
            <span className="cn-doc-badge">DOCUMENTATION</span>
            <h2 className="cn-doc-title">Documentation <span>Consultancy</span></h2>
          </div>

          <div className="cn-doc-intro">
            <p>Simplifying complex administrative processes across the UAE — from business setup and visa processing to legal attestation and government coordination. Our expert team ensures a seamless experience at every step.</p>
            <div className="cn-doc-intro-accent" />
          </div>

          <div className="cn-doc-grid">
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">01</span>
              </div>
              <h3>Business Setup & Licensing</h3>
              <p className="cn-doc-card-desc">Complete company formation and licensing support across UAE free zones and mainland.</p>
              <ul>
                <li><span className="cn-doc-dot" />Company Formation</li>
                <li><span className="cn-doc-dot" />Trade License Processing</li>
                <li><span className="cn-doc-dot" />Business Consultancy</li>
              </ul>
            </div>
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">02</span>
              </div>
              <h3>Visa & Immigration</h3>
              <p className="cn-doc-card-desc">End-to-end visa processing and immigration services for individuals and corporate teams.</p>
              <ul>
                <li><span className="cn-doc-dot" />Visa Processing</li>
                <li><span className="cn-doc-dot" />Emirates ID Services</li>
                <li><span className="cn-doc-dot" />Immigration Documentation</li>
              </ul>
            </div>
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">03</span>
              </div>
              <h3>Legal & Attestation</h3>
              <p className="cn-doc-card-desc">Document attestation, notary services, and legal documentation for all UAE authorities.</p>
              <ul>
                <li><span className="cn-doc-dot" />MOFA Attestation</li>
                <li><span className="cn-doc-dot" />Notary & Legal Docs</li>
                <li><span className="cn-doc-dot" />Dubai Courts Support</li>
              </ul>
            </div>
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">04</span>
              </div>
              <h3>Government Services</h3>
              <p className="cn-doc-card-desc">Hassle-free government transaction processing through Tasheel, Tawjeeh, and more.</p>
              <ul>
                <li><span className="cn-doc-dot" />Tasheel & Tawjeeh</li>
                <li><span className="cn-doc-dot" />Tadbeer Services</li>
                <li><span className="cn-doc-dot" />RTA & Health Docs</li>
              </ul>
            </div>
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">05</span>
              </div>
              <h3>Financial & Support</h3>
              <p className="cn-doc-card-desc">Accounting, VAT, translation, and bank account opening services under one roof.</p>
              <ul>
                <li><span className="cn-doc-dot" />VAT & Accounting</li>
                <li><span className="cn-doc-dot" />Translation Services</li>
                <li><span className="cn-doc-dot" />Bank Account Opening</li>
              </ul>
            </div>
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">06</span>
              </div>
              <h3>Corporate PRO</h3>
              <p className="cn-doc-card-desc">Dedicated government coordination and document clearing for your business operations.</p>
              <ul>
                <li><span className="cn-doc-dot" />Government Coordination</li>
                <li><span className="cn-doc-dot" />License Renewals</li>
                <li><span className="cn-doc-dot" />Document Clearing</li>
              </ul>
            </div>
          </div>

          <div className="cn-doc-footer">
            <p>With a strong focus on transparency, efficiency, and customer satisfaction, our Documentation Consultancy serves as a trusted partner for startups, entrepreneurs, corporates, and individuals seeking smooth and hassle-free documentation solutions in the UAE.</p>
            <Link to="/contact" className="cn-doc-footer-btn">
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </Link>
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
                <h2 className="vt-cta-title">Need Help With Documentation?</h2>
                <p className="vt-cta-desc">Let our documentation experts handle the paperwork while you focus on your business.</p>
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
