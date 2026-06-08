import { Link } from 'react-router-dom'
import './VenturisTech.css'

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function ComprehensiveConsultancy() {
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
        .cn-services {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
        }

        .cn-services-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .cn-services-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: var(--primary);
          line-height: 1.2;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          max-width: 650px;
          margin: 0 auto 14px;
        }

        .cn-services-sub {
          font-size: 16px;
          color: var(--text-light);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cn-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .cn-service-card {
          background: linear-gradient(135deg, #19283a, #ae683f);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 36px 28px 32px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .cn-service-card::before {
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

        .cn-service-card::after {
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

        .cn-service-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow:
            0 30px 60px rgba(25,40,58,0.35),
            0 0 50px rgba(175,105,63,0.15);
        }

        .cn-service-card:hover::before {
          background: #ffffff;
          width: 4px;
          box-shadow: 0 0 14px rgba(255,255,255,0.5);
        }

        .cn-service-card:hover::after {
          left: 100%;
        }

        .cn-service-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border: none;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 2;
        }

        .cn-service-card:hover .cn-service-icon {
          transform: scale(1.1) rotate(-3deg);
          box-shadow: 0 8px 28px rgba(175,105,63,0.35);
        }

        .cn-service-icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
        }

        .cn-service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }

        .cn-service-card:hover h3 {
          color: #ffffff;
        }

        .cn-service-card p {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin-bottom: 18px;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }

        .cn-service-card:hover p {
          color: rgba(255,255,255,0.75);
        }

        .cn-service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          position: relative;
          z-index: 2;
        }

        .cn-service-tag {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.08);
          padding: 4px 12px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .cn-service-card:hover .cn-service-tag {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.12);
        }

        @media (max-width: 1024px) {
          .cn-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cpc-service-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .cn-services {
            padding: 70px 0;
          }
          .cn-services-grid {
            grid-template-columns: 1fr;
          }
          .cn-service-card {
            padding: 28px 22px 26px;
          }
          .cpc-service-grid { grid-template-columns: 1fr; }
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
        @media (max-width: 480px) {
          .vt-hero-content { padding: 0 16px; }
        }
      `}</style>

      <section className="vt-hero">
        <img className="vt-hero-video" src="/comprehensive-hero.png" alt="Comprehensive Consultancy" />
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content">
          <span className="vt-hero-badge">COMPREHENSIVE CONSULTANCY</span>
          <h1 className="vt-hero-title">
            Comprehensive <span className="vt-hero-gradient-text">Consultancy</span><br />Solutions
          </h1>
          <p className="vt-hero-desc">
            Delivering integrated consultancy services across multiple disciplines, providing tailored strategies and end-to-end support to help clients achieve their objectives efficiently.
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
                Holistic Business <span className="vt-gradient-text">Solutions</span>
              </h2>
              <p className="vt-about-desc">
                Our comprehensive consultancy practice delivers integrated solutions that address every aspect of your business. We combine deep industry expertise with strategic thinking to help you achieve sustainable growth, operational efficiency, and competitive advantage in today's dynamic market.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Business Strategy Formulation
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Operational Process Optimization
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Market Research & Analysis
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Strategic Growth Planning
                </div>
              </div>
            </div>
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="/10.png" alt="Comprehensive Consultancy" className="vt-about-img" />
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
                  <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3>Strategy Consulting</h3>
              <p>Develop winning strategies that drive sustainable growth and competitive advantage through rigorous analysis and creative thinking.</p>
            </div>
            <div className="cpc-service-card">
              <span className="cpc-service-num">02</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>
              <h3>Operations Excellence</h3>
              <p>Streamline processes, reduce costs, and improve quality through operational best practices and continuous improvement methodologies.</p>
            </div>
            <div className="cpc-service-card">
              <span className="cpc-service-num">03</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h3>Market Intelligence</h3>
              <p>Gain actionable insights through comprehensive market research, competitor analysis, and industry trend forecasting.</p>
            </div>
            <div className="cpc-service-card">
              <span className="cpc-service-num">04</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3>Growth Strategy</h3>
              <p>Identify and pursue new growth opportunities through market expansion, product development, and strategic partnerships.</p>
            </div>
            <div className="cpc-service-card">
              <span className="cpc-service-num">05</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>Digital Transformation</h3>
              <p>Leverage technology to transform your business operations, enhance customer experiences, and drive innovation.</p>
            </div>
            <div className="cpc-service-card">
              <span className="cpc-service-num">06</span>
              <div className="cpc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <h3>Organizational Design</h3>
              <p>Build high-performing teams and structures that align with your strategic objectives and company culture.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cn-services">
        <div className="container">
          <div className="cn-services-header">
            <h2 className="cn-services-title">Comprehensive<br />Consultancy</h2>
            <p className="cn-services-sub">Tailored advisory services designed to address your unique business challenges and unlock new opportunities.</p>
          </div>
          <div className="cn-services-grid">
            <div className="cn-service-card">
              <div className="cn-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Strategy & Transformation</h3>
              <p>Develop and execute growth strategies, drive organizational transformation, and build competitive advantage through market-led planning and operational redesign.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Growth Strategy</span>
                <span className="cn-service-tag">M&A Advisory</span>
                <span className="cn-service-tag">Operating Model</span>
              </div>
            </div>
            <div className="cn-service-card">
              <div className="cn-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                </svg>
              </div>
              <h3>Business Analytics</h3>
              <p>Transform data into actionable insights with advanced analytics, predictive modeling, and custom dashboards that enable informed, confident decision-making.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Predictive Analytics</span>
                <span className="cn-service-tag">Data Visualization</span>
                <span className="cn-service-tag">Performance Metrics</span>
              </div>
            </div>
            <div className="cn-service-card">
              <div className="cn-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3>Digital & Technology Advisory</h3>
              <p>Navigate digital disruption with confidence. We guide technology strategy, platform selection, and digital transformation initiatives from vision to execution.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Digital Strategy</span>
                <span className="cn-service-tag">Cloud Advisory</span>
                <span className="cn-service-tag">AI & Automation</span>
              </div>
            </div>
            <div className="cn-service-card">
              <div className="cn-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Risk & Compliance</h3>
              <p>Identify, assess, and manage enterprise risks. We design robust compliance frameworks that protect your business while enabling strategic agility.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Risk Assessment</span>
                <span className="cn-service-tag">Regulatory Compliance</span>
                <span className="cn-service-tag">Cybersecurity</span>
              </div>
            </div>
            <div className="cn-service-card">
              <div className="cn-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Operational Excellence</h3>
              <p>Optimize processes, reduce costs, and improve efficiency across your value chain with lean methodologies, supply chain optimization, and performance improvement programs.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Process Optimization</span>
                <span className="cn-service-tag">Supply Chain</span>
                <span className="cn-service-tag">Cost Reduction</span>
              </div>
            </div>
            <div className="cn-service-card">
              <div className="cn-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                </svg>
              </div>
              <h3>Change Management</h3>
              <p>Navigate organizational change smoothly with structured change strategies, stakeholder engagement, and training programs that ensure lasting adoption.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Change Strategy</span>
                <span className="cn-service-tag">Stakeholder Engagement</span>
                <span className="cn-service-tag">Culture Transformation</span>
              </div>
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
                <h2 className="vt-cta-title">Ready to Transform Your Business?</h2>
                <p className="vt-cta-desc">Let our comprehensive consultancy team help you achieve your full potential.</p>
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
