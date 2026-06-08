import { Link } from 'react-router-dom'
import './VenturisTech.css'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Consultancy() {
  return (
    <>
      <style>{`
        .cn-hero-content {
          margin-left: 10%;
        }
        @media (max-width: 1024px) {
          .cn-hero-content {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          .cn-hero-content .vt-hero-badge {
            margin-left: auto;
            margin-right: auto;
          }
          .cn-hero-content .vt-hero-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .cn-hero-content .vt-hero-actions {
            justify-content: center;
          }
        }

        .cn-about-float-card {
          left: auto;
          right: -24px;
        }
        @media (max-width: 768px) {
          .cn-about-float-card {
            left: 16px;
            right: auto;
          }
        }

        /* ── cn-services CSS moved to ComprehensiveConsultancy.jsx ── */

        .cn-process {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .cn-process::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(175, 105, 63, 0.12), transparent);
        }

        .cn-process::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(175, 105, 63, 0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .cn-process-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .cn-process-orb--1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.04), transparent 70%);
          top: -150px;
          left: -100px;
        }

        .cn-process-orb--2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.03), transparent 70%);
          bottom: -120px;
          right: -80px;
        }

        .cn-process-header {
          text-align: center;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .cn-process-badge {
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

        .cn-process-title {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          color: var(--primary);
          font-family: 'Playfair Display', serif;
          line-height: 1.15;
          margin-bottom: 14px;
        }

        .cn-process-title span {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cn-process-sub {
          font-size: 16px;
          color: var(--text-light);
          max-width: 560px;
          margin: 0 auto 50px;
          line-height: 1.75;
        }

        .cn-process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .cn-process-step {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 36px 28px 32px;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .cn-process-step::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
        }

        .cn-process-step:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(25, 40, 58, 0.08);
          border-color: rgba(175, 105, 63, 0.12);
        }

        .cn-process-num {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          color: #fff;
          font-size: 24px;
          font-weight: 800;
          font-family: 'Playfair Display', serif;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          box-shadow: 0 6px 20px rgba(175, 105, 63, 0.25);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .cn-process-step:hover .cn-process-num {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 10px 30px rgba(175, 105, 63, 0.35);
        }

        .cn-process-step h4 {
          font-size: 18px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          transition: color 0.3s ease;
        }

        .cn-process-step:hover h4 {
          color: var(--accent);
        }

        .cn-process-step p {
          font-size: 13.5px;
          color: var(--text-light);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .cn-process-steps {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .cn-process {
            padding: 70px 0;
          }
          .cn-process-steps {
            grid-template-columns: 1fr;
          }
        }

        .cn-verticals {
          padding: 110px 0;
          background: #f9fafc;
          position: relative;
        }

        .cn-verticals-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .cn-verticals-badge {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--accent);
          margin-bottom: 14px;
        }

        .cn-verticals-badge::before,
        .cn-verticals-badge::after {
          content: '';
          width: 28px;
          height: 1px;
          background: var(--accent);
        }

        .cn-verticals-title {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 800;
          color: var(--primary);
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
        }

        .cn-verticals-title span {
          color: var(--accent);
        }

        .cn-verticals-sub {
          font-size: 15px;
          color: var(--text-light);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cn-verticals-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .cn-vertical-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(25,40,58,0.06);
          transition: box-shadow 0.6s ease, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          position: relative;
        }

        .cn-vertical-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #af693f, #d4956a, #af693f);
          background-size: 200% 100%;
          z-index: 10;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .cn-vertical-card:hover {
          box-shadow: 0 25px 70px rgba(25,40,58,0.14);
          transform: translateY(-6px);
        }

        .cn-vertical-card:hover::before {
          opacity: 1;
        }

        .cn-vertical-card:hover .cn-vertical-img img {
          transform: scale(1.08);
          filter: brightness(1.06) contrast(1.04) saturate(1.05);
        }

        .cn-vertical-card:hover .cn-vertical-body h3 {
          color: #af693f;
        }

        .cn-vertical-img {
          height: 220px;
          overflow: hidden;
          position: relative;
        }

        .cn-vertical-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), filter 0.6s ease;
        }

        .cn-vertical-img .img-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          padding: 6px 14px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          color: #19283a;
          letter-spacing: 0.5px;
          z-index: 2;
        }

        .cn-vertical-body {
          padding: 28px 30px 32px;
        }

        .cn-vertical-body h3 {
          font-size: 22px;
          font-weight: 700;
          color: #19283a;
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
          line-height: 1.2;
          transition: color 0.45s ease;
        }

        .cn-vertical-body p {
          font-size: 14px;
          color: #5a6577;
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .cn-vertical-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .cn-vertical-tag {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 500;
          color: #19283a;
          background: #f0f2f6;
          border: 1px solid #e8ecf2;
        }

        .cn-vertical-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
          font-size: 13px;
          font-weight: 600;
          color: #af693f;
          text-decoration: none;
          transition: gap 0.3s ease;
        }

        .cn-vertical-link:hover {
          gap: 10px;
        }

        @media (max-width: 1024px) {
          .cn-verticals-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .cn-verticals {
            padding: 70px 0;
          }
          .cn-verticals-grid {
            grid-template-columns: 1fr;
          }
          .cn-vertical-body {
            padding: 22px 24px 26px;
          }
        }

        .cn-why {
          padding: 110px 0;
          background: linear-gradient(170deg, #0a1628 0%, #12202f 50%, #0f1a28 100%);
          position: relative;
          overflow: hidden;
        }

        .cn-why::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 80% 20%, rgba(175, 105, 63, 0.06), transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(255, 255, 255, 0.02), transparent 50%);
          pointer-events: none;
        }

        .cn-why-header {
          text-align: center;
          margin-bottom: 56px;
          position: relative;
          z-index: 1;
        }

        .cn-why-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: 8px 0;
          margin-bottom: 20px;
        }

        .cn-why-badge::before,
        .cn-why-badge::after {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .cn-why-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          max-width: 600px;
          margin: 0 auto 14px;
        }

        .cn-why-sub {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.5);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cn-why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .cn-why-card {
          background: linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 36px 28px 32px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          backdrop-filter: blur(10px);
        }

        .cn-why-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(160deg, rgba(255,255,255,0.08) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .cn-why-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .cn-why-card:hover::after {
          opacity: 1;
        }

        .cn-why-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          position: relative;
          z-index: 1;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cn-why-card:hover .cn-why-icon {
          transform: scale(1.1) rotate(-3deg);
        }

        .cn-why-icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
        }

        .cn-why-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 1;
        }

        .cn-why-card p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1100px) {
          .cn-why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cn-why {
            padding: 70px 0;
          }
          .cn-why-grid {
            grid-template-columns: 1fr;
          }
          .cn-why-card {
            padding: 28px 24px;
          }
        }

        /* ── Client Consultancy CSS moved to ClientConsultancy.jsx ── */
      `}</style>

      {/* ── Hero ── */}
      <section className="vt-hero">
        <video className="vt-hero-video" autoPlay muted loop playsInline poster="/client-consultancy.jpg">
          <source src="/545.mp4" type="video/mp4" />
        </video>
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content cn-hero-content">
          <span className="vt-hero-badge">CONSULTANCY</span>
          <h1 className="vt-hero-title">
            Strategic <span className="vt-hero-gradient-text">Consulting<br />Services</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.75)', fontWeight: 500, marginBottom: 16 }}>
            Expert Guidance for Business Growth & Transformation
          </p>
          <p className="vt-hero-desc">
            We deliver strategic consulting solutions that empower businesses to navigate complexity, drive innovation, and achieve sustainable growth through data-driven insights and industry expertise.
          </p>
          <div className="vt-hero-actions">
            <Link to="/services" className="vt-btn-primary">
              Explore Services
              <ArrowIcon />
            </Link>
            <Link to="/contact" className="vt-btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="vt-about">
        <div className="container">
          <div className="vt-about-grid">
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="/consultancy-about.jpg" alt="Consultancy Services" className="vt-about-img" />
              </div>
              <div className="vt-about-float-card cn-about-float-card">
                <div className="vt-about-float-icon">CN</div>
                <div className="vt-about-float-text">
                  <strong>Consultancy</strong>
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
            <div className="vt-about-content">
              <span className="vt-badge">ABOUT US</span>
              <h2 className="vt-about-title">
                <span className="vt-gradient-text">Excellence</span> in Strategic<br />Consulting
              </h2>
              <p className="vt-about-desc">
                At Venturis Consultancy, we partner with visionary leaders to architect transformative strategies that redefine industries. Our multidisciplinary team brings together deep domain expertise, rigorous analytical rigor, and an unwavering commitment to delivering outcomes that transcend expectations.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Corporate Strategy & Governance
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Market Intelligence & Advanced Analytics
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Digital Transformation & Technology Strategy
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Organizational Design & Change Leadership
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Verticals ── */}
      <section className="cn-verticals">
        <div className="container">
          <div className="cn-verticals-header">
            <div className="cn-verticals-badge">INDUSTRIES WE SERVE</div>
            <h2 className="cn-verticals-title">Deep <span>Industry Expertise</span></h2>
            <p className="cn-verticals-sub">Specialized consulting capabilities across key sectors, delivered by teams with deep domain knowledge.</p>
          </div>
          <div className="cn-verticals-grid">
            <div className="cn-vertical-card">
              <div className="cn-vertical-img">
                <img src="/financial-consultancy.jpg" alt="Financial Consultancy" loading="lazy" />
                <div className="img-tag">FINANCIAL CONSULTANCY</div>
              </div>
              <div className="cn-vertical-body">
                <h3>Financial Consultancy</h3>
                <p>Strategic advisory for banks, insurance firms, and fintech companies navigating regulatory change, digital disruption, and competitive pressures.</p>
                <div className="cn-vertical-tags">
                  <span className="cn-vertical-tag">Banking</span>
                  <span className="cn-vertical-tag">Insurance</span>
                  <span className="cn-vertical-tag">Fintech</span>
                  <span className="cn-vertical-tag">Wealth Management</span>
                </div>
                <Link to="/services/consultancy/financial-consultancy" className="cn-vertical-link">Learn More →</Link>
              </div>
            </div>
            <div className="cn-vertical-card">
              <div className="cn-vertical-img">
                <img src="https://media.licdn.com/dms/image/v2/C4E12AQGObe_j7ZzdCw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1562336441138?e=2147483647&v=beta&t=gzSMvC5sFc4B8l7owu87F9iRifHmjfRJzxK145OXJrE" alt="Client Consultancy" loading="lazy" />
                <div className="img-tag">CLIENT CONSULTANCY</div>
              </div>
              <div className="cn-vertical-body">
                <h3>Client Consultancy</h3>
                <p>Strategic advisory and business consultancy services helping clients navigate complex challenges, seize growth opportunities, and achieve sustainable success across every stage of their journey.</p>
                <div className="cn-vertical-tags">
                  <span className="cn-vertical-tag">Business Advisory</span>
                  <span className="cn-vertical-tag">Strategic Planning</span>
                  <span className="cn-vertical-tag">Market Entry</span>
                  <span className="cn-vertical-tag">Growth Consulting</span>
                </div>
                <Link to="/services/consultancy/client-consultancy" className="cn-vertical-link">Learn More →</Link>
              </div>
            </div>
            <div className="cn-vertical-card">
              <div className="cn-vertical-img">
                <img src="https://img.magnific.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?semt=ais_hybrid&w=740&q=80" alt="Documentation Consultancy" loading="lazy" />
                <div className="img-tag">DOCUMENTATION CONSULTANCY</div>
              </div>
              <div className="cn-vertical-body">
                <h3>Documentation Consultancy</h3>
                <p>Comprehensive documentation, visa processing, legal attestation, and government coordination services for individuals and businesses navigating UAE administrative processes.</p>
                <div className="cn-vertical-tags">
                  <span className="cn-vertical-tag">Visa Processing</span>
                  <span className="cn-vertical-tag">Legal Attestation</span>
                  <span className="cn-vertical-tag">Business Setup</span>
                  <span className="cn-vertical-tag">Government Services</span>
                </div>
                <Link to="/services/consultancy/documentation-consultancy" className="cn-vertical-link">Learn More →</Link>
              </div>
            </div>
            <div className="cn-vertical-card">
              <div className="cn-vertical-img">
                <img src="/10.png" alt="Comprehensive Consultancy" loading="lazy" />
                <div className="img-tag">COMPREHENSIVE CONSULTANCY</div>
              </div>
              <div className="cn-vertical-body">
                <h3>Comprehensive Consultancy</h3>
                <p>End-to-end business consulting solutions covering strategy development, operational excellence, market analysis, and growth planning for organizations of all sizes.</p>
                <div className="cn-vertical-tags">
                  <span className="cn-vertical-tag">Business Strategy</span>
                  <span className="cn-vertical-tag">Operations</span>
                  <span className="cn-vertical-tag">Market Analysis</span>
                  <span className="cn-vertical-tag">Growth Planning</span>
                </div>
                <Link to="/services/consultancy/comprehensive-consultancy" className="cn-vertical-link">Learn More →</Link>
              </div>
            </div>
            <div className="cn-vertical-card">
              <div className="cn-vertical-img">
                <img src="/20.jpg" alt="Corporate Consultancy" loading="lazy" />
                <div className="img-tag">CORPORATE CONSULTANCY</div>
              </div>
              <div className="cn-vertical-body">
                <h3>Corporate Consultancy</h3>
                <p>Strategic corporate advisory services including governance frameworks, mergers and acquisitions, organizational restructuring, and risk management for established enterprises.</p>
                <div className="cn-vertical-tags">
                  <span className="cn-vertical-tag">Corporate Governance</span>
                  <span className="cn-vertical-tag">Mergers & Acquisitions</span>
                  <span className="cn-vertical-tag">Organizational Design</span>
                  <span className="cn-vertical-tag">Risk Management</span>
                </div>
                <Link to="/services/consultancy/corporate-consultancy" className="cn-vertical-link">Learn More →</Link>
              </div>
            </div>
            <div className="cn-vertical-card">
              <div className="cn-vertical-img">
                <img src="/30.png" alt="Mortgage Consultancy" loading="lazy" />
                <div className="img-tag">MORTGAGE CONSULTANCY</div>
              </div>
              <div className="cn-vertical-body">
                <h3>Mortgage Consultancy</h3>
                <p>Expert mortgage advisory and property financing solutions, guiding clients through home loans, refinancing options, and credit assessment to achieve their property ownership goals.</p>
                <div className="cn-vertical-tags">
                  <span className="cn-vertical-tag">Home Loans</span>
                  <span className="cn-vertical-tag">Property Financing</span>
                  <span className="cn-vertical-tag">Refinancing</span>
                  <span className="cn-vertical-tag">Credit Assessment</span>
                </div>
                <Link to="/services/consultancy/mortgage-consultancy" className="cn-vertical-link">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="cn-process">
        <div className="cn-process-orb cn-process-orb--1" />
        <div className="cn-process-orb cn-process-orb--2" />
        <div className="container">
          <div className="cn-process-header">
            <span className="cn-process-badge">OUR PROCESS</span>
            <h2 className="cn-process-title">How We <span>Deliver Results</span></h2>
            <p className="cn-process-sub">A proven, collaborative methodology that ensures measurable outcomes at every stage.</p>
          </div>
          <div className="cn-process-steps">
            <div className="cn-process-step">
              <div className="cn-process-num">01</div>
              <h4>Discover</h4>
              <p>Deep dive into your business, market dynamics, and strategic challenges through stakeholder interviews and data analysis.</p>
            </div>
            <div className="cn-process-step">
              <div className="cn-process-num">02</div>
              <h4>Analyze</h4>
              <p>Rigorous assessment of opportunities, risks, and performance gaps using advanced analytical frameworks and benchmarks.</p>
            </div>
            <div className="cn-process-step">
              <div className="cn-process-num">03</div>
              <h4>Strategize</h4>
              <p>Develop a tailored, actionable roadmap with clear priorities, resource allocation, and measurable KPIs aligned to your vision.</p>
            </div>
            <div className="cn-process-step">
              <div className="cn-process-num">04</div>
              <h4>Execute</h4>
              <p>Implement solutions with dedicated support, agile governance, and continuous monitoring to ensure lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="cn-why">
        <div className="container">
          <div className="cn-why-header">
            <span className="cn-why-badge">WHY CHOOSE US</span>
            <h2 className="cn-why-title">Why Venturis<br />Consultancy</h2>
            <p className="cn-why-sub">What sets our consulting practice apart in a competitive market.</p>
          </div>
          <div className="cn-why-grid">
            <div className="cn-why-card">
              <div className="cn-why-icon" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(37,99,235,0.1))', borderColor: 'rgba(59,130,246,0.3)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <h3>Proven Expertise</h3>
              <p>Years of cross-industry consulting experience with a track record of delivering measurable, sustainable results for global clients.</p>
            </div>
            <div className="cn-why-card">
              <div className="cn-why-icon" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(217,119,6,0.1))', borderColor: 'rgba(245,158,11,0.3)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Global Perspective</h3>
              <p>Deep understanding of international markets, cultural dynamics, and cross-border business practices that inform every engagement.</p>
            </div>
            <div className="cn-why-card">
              <div className="cn-why-icon" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(124,58,237,0.1))', borderColor: 'rgba(139,92,246,0.3)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Data-Driven Approach</h3>
              <p>Every recommendation is grounded in rigorous analysis, market intelligence, and quantitative validation to ensure confidence and clarity.</p>
            </div>
            <div className="cn-why-card">
              <div className="cn-why-icon" style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(220,38,38,0.1))', borderColor: 'rgba(239,68,68,0.3)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3>End-to-End Delivery</h3>
              <p>From discovery to execution, we partner with you throughout the journey — ensuring strategies are implemented and results are achieved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Consultancy section moved to ClientConsultancy.jsx ── */}

      {/* ── Comprehensive Consultancy section moved to ComprehensiveConsultancy.jsx ── */}

      {/* ── CTA ── */}
      <section className="vt-cta-section">
        <div className="container">
          <div className="vt-cta-card">
            <div className="vt-cta-glow"></div>
            <div className="vt-cta-body">
              <div className="vt-cta-text">
                <span className="vt-cta-badge">GET IN TOUCH</span>
                <h2 className="vt-cta-title">Ready to Transform Your Business?</h2>
                <p className="vt-cta-desc">
                  Contact our consulting team today for a free initial consultation. Let&apos;s discuss how we can help you achieve your strategic goals.
                </p>
              </div>
              <div className="vt-cta-actions">
                <Link to="/contact" className="vt-btn-primary">
                  Schedule a Consultation
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
