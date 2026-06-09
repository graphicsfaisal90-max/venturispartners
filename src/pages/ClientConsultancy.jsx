import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './VenturisTech.css'

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function ClientConsultancy() {
  return (
    <>
      <SEO title="Client Consultancy" description="Client relationship consultancy in Dubai — customer experience optimization, client acquisition strategies, and retention solutions by Venturis Partners." keywords={['client consultancy Dubai', 'customer experience UAE', 'client acquisition strategies', 'CRM consulting Dubai']} />
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
        .cc-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 50px;
        }
        .cc-service-card {
          background: linear-gradient(135deg, #1e2d3d, #b8753e);
          border-radius: 18px;
          padding: 34px 28px 40px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        .cc-service-card::before {
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
        .cc-service-card::after {
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
        .cc-service-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow:
            0 30px 60px rgba(25,40,58,0.35),
            0 0 50px rgba(175,105,63,0.15);
        }
        .cc-service-card:hover::before {
          background: #ffffff;
          width: 4px;
          box-shadow: 0 0 14px rgba(255,255,255,0.5);
        }
        .cc-service-card:hover::after {
          left: 100%;
        }
        .cc-service-num {
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
        .cc-service-card:hover .cc-service-num {
          color: rgba(255,255,255,0.08);
        }
        .cc-service-icon {
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
        .cc-service-card:hover .cc-service-icon {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border-color: transparent;
          box-shadow: 0 8px 28px rgba(175,105,63,0.35);
          transform: scale(1.1) rotate(-3deg);
        }
        .cc-service-icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
          transition: transform 0.6s ease;
        }
        .cc-service-card:hover .cc-service-icon svg {
          transform: scale(1.08);
        }
        .cc-service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cc-service-card:hover h3 {
          color: #ffffff;
        }
        .cc-service-card p {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin: 0;
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }
        .cc-service-card:hover p {
          color: rgba(255,255,255,0.75);
        }

        .cn-client {
          padding: 100px 0;
          background: #ffffff;
          position: relative;
        }
        .cn-client-header {
          text-align: center;
          margin-bottom: 12px;
        }
        .cn-client-badge {
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
        .cn-client-title {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          color: var(--primary);
          font-family: 'Playfair Display', serif;
          line-height: 1.15;
          margin-bottom: 14px;
        }
        .cn-client-title span {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cn-client-intro {
          max-width: 720px;
          margin: 0 auto 50px;
          text-align: center;
        }
        .cn-client-intro p {
          font-size: 16px;
          color: var(--text-light);
          line-height: 1.85;
        }
        .cn-client-intro-accent {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
          margin: 22px auto 0;
          border-radius: 2px;
        }
        .cn-client-image-wrap {
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 56px;
          position: relative;
        }
        .cn-client-image-wrap img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }
        .cn-client-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(25,40,58,0.06), transparent 60%);
          pointer-events: none;
        }
        .cn-client-image-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        .cn-client-image-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
        }
        .cn-client-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 64px;
        }
        .cn-client-card {
          background: linear-gradient(135deg, #19283a, #ae683f);
          border-radius: 16px;
          padding: 0;
          position: relative;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .cn-client-card::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 15px;
          background: linear-gradient(135deg, #19283a, #ae683f);
          z-index: 0;
          pointer-events: none;
        }
        .cn-client-card::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 17px;
          background: linear-gradient(135deg, rgba(175,105,63,0.3), rgba(201,122,74,0.1));
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .cn-client-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow:
            0 30px 60px rgba(25, 40, 58, 0.35),
            0 0 50px rgba(175, 105, 63, 0.12);
        }
        .cn-client-card:hover::after {
          opacity: 1;
        }
        .cn-client-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          background: rgba(175, 105, 63, 0.2);
          border: 1px solid rgba(175, 105, 63, 0.3);
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .cn-client-card:hover .cn-client-card-icon {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border-color: transparent;
          box-shadow: 0 0 30px rgba(175, 105, 63, 0.4);
          transform: scale(1.1) rotate(-3deg);
        }
        .cn-client-card-icon svg {
          width: 22px;
          height: 22px;
          color: #fff;
          transition: transform 0.5s ease;
        }
        .cn-client-card:hover .cn-client-card-icon svg {
          transform: scale(1.05);
        }
        .cn-client-card h4 {
          font-size: 17px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Playfair Display', serif;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
          transition: color 0.4s ease;
        }
        .cn-client-card:hover h4 {
          color: #fff;
        }
        .cn-client-card ul {
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          z-index: 1;
        }
        .cn-client-card li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.45;
          transition: color 0.4s ease, transform 0.4s ease;
        }
        .cn-client-card:hover li {
          color: rgba(255, 255, 255, 0.75);
        }
        .cn-client-card li::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          opacity: 0.5;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .cn-client-card:hover li::before {
          opacity: 1;
          transform: scale(1.3);
        }
        .cn-client-card-inner {
          position: relative;
          z-index: 1;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .cn-client-benefits {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 56px;
        }
        .cn-client-benefit {
          background: linear-gradient(135deg, #19283a, #ae683f);
          border-radius: 14px;
          padding: 0;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .cn-client-benefit::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 13px;
          background: linear-gradient(135deg, #19283a, #ae683f);
          z-index: 0;
          pointer-events: none;
        }
        .cn-client-benefit::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 15px;
          background: linear-gradient(135deg, rgba(175,105,63,0.3), rgba(201,122,74,0.1));
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .cn-client-benefit:hover {
          transform: translateY(-8px) scale(1.04);
          box-shadow:
            0 30px 60px rgba(25, 40, 58, 0.35),
            0 0 50px rgba(175, 105, 63, 0.12);
        }
        .cn-client-benefit:hover::after {
          opacity: 1;
        }
        .cn-client-benefit-inner {
          position: relative;
          z-index: 1;
          padding: 28px 16px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }
        .cn-client-benefit-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          background: rgba(175, 105, 63, 0.2);
          border: 1px solid rgba(175, 105, 63, 0.3);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .cn-client-benefit:hover .cn-client-benefit-icon {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border-color: transparent;
          box-shadow: 0 0 30px rgba(175, 105, 63, 0.4);
          transform: scale(1.12) rotate(-3deg);
        }
        .cn-client-benefit-icon svg {
          width: 18px;
          height: 18px;
          color: #fff;
          transition: transform 0.5s ease;
        }
        .cn-client-benefit:hover .cn-client-benefit-icon svg {
          transform: scale(1.1);
        }
        .cn-client-benefit h5 {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.92);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 6px;
          position: relative;
          z-index: 1;
          transition: color 0.4s ease;
        }
        .cn-client-benefit:hover h5 {
          color: #fff;
        }
        .cn-client-benefit p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.6;
          margin: 0;
          max-width: 150px;
          text-align: center;
          position: relative;
          z-index: 1;
          transition: color 0.4s ease;
        }
        .cn-client-benefit:hover p {
          color: rgba(255, 255, 255, 0.75);
        }
        .cn-client-closing {
          max-width: 800px;
          margin: 0 auto;
          padding: 0;
          background: linear-gradient(135deg, #19283a, #ae683f);
          border: none;
          border-radius: 16px;
          position: relative;
          text-align: center;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .cn-client-closing::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 15px;
          background: linear-gradient(135deg, #19283a, #ae683f);
          z-index: 0;
          pointer-events: none;
        }
        .cn-client-closing::after {
          content: '\u201C';
          position: absolute;
          top: 16px;
          left: 28px;
          font-size: 64px;
          font-family: 'Playfair Display', serif;
          line-height: 1;
          color: rgba(255, 255, 255, 0.06);
          pointer-events: none;
          z-index: 1;
        }
        .cn-client-closing:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow:
            0 30px 60px rgba(25, 40, 58, 0.35),
            0 0 50px rgba(175, 105, 63, 0.12);
        }
        .cn-client-closing-inner {
          position: relative;
          z-index: 1;
          padding: 40px 48px;
        }
        .cn-client-closing p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.9;
          margin: 0;
          position: relative;
          z-index: 1;
          transition: color 0.4s ease;
        }
        .cn-client-closing:hover p {
          color: rgba(255, 255, 255, 0.9);
        }
        @media (max-width: 1024px) {
          .cn-client-image-wrap img { height: 320px; }
          .cn-client-cards {
            grid-template-columns: repeat(2, 1fr);
          }
          .cn-client-benefits {
            grid-template-columns: repeat(3, 1fr);
          }
          .cc-service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .cn-client { padding: 70px 0; }
          .cn-client-cards { grid-template-columns: 1fr; }
          .cn-client-benefits { grid-template-columns: repeat(2, 1fr); }
          .cn-client-closing { padding: 28px 24px; }
          .cc-service-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .cn-client-benefits { grid-template-columns: 1fr; }
          .cn-client-image-wrap img { height: 240px; }
          .cn-client-card-inner { padding: 24px 20px; }
          .cn-client-closing-inner { padding: 28px 20px; }
          .cn-client-closing p { font-size: 13px; }
        }
      `}</style>

      <section className="vt-hero">
        <img className="vt-hero-video" src="/client-hero.jpg" alt="Client Consultancy" />
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content">
          <span className="vt-hero-badge">CLIENT CONSULTANCY</span>
          <h1 className="vt-hero-title">
            Client <span className="vt-hero-gradient-text">Consultancy</span><br />Solutions
          </h1>
          <p className="vt-hero-desc">
            Providing personalized advisory services and strategic guidance to help clients make informed decisions, overcome challenges, and achieve long-term success with confidence.
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
                Strategic <span className="vt-gradient-text">Client Partnerships</span>
              </h2>
              <p className="vt-about-desc">
                Our client consultancy practice is built on a foundation of trust, expertise, and results. We work closely with businesses of all sizes to develop strategies that drive growth, overcome challenges, and create lasting value. Every engagement is tailored to your unique circumstances and goals.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Business Strategy Development
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Market Entry & Expansion Planning
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Operational Excellence
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  Growth Acceleration
                </div>
              </div>
            </div>
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="/client-consultancy.jpg" alt="Client Consultancy" className="vt-about-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cn-client">
        <div className="container">
          <div className="cn-client-header">
            <span className="cn-client-badge">CONSULTANCY</span>
            <h2 className="cn-client-title">Client <span>Consultancy</span></h2>
          </div>
          <div className="cn-client-intro">
            <p>We provide strategic consultancy services designed to help individuals, investors, and businesses make confident decisions and achieve sustainable success. Through personalized guidance, professional expertise, and comprehensive support, we ensure every client receives tailored solutions that align with their goals, requirements, and long-term objectives.</p>
            <div className="cn-client-intro-accent" />
          </div>

          <div className="cn-client-image-wrap">
            <img src="https://media.licdn.com/dms/image/v2/C4E12AQGObe_j7ZzdCw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1562336441138?e=2147483647&v=beta&t=gzSMvC5sFc4B8l7owu87F9iRifHmjfRJzxK145OXJrE" alt="Client Consultancy" />
            <div className="cn-client-image-overlay" />
            <div className="cn-client-image-badge">
              <span className="cn-client-image-badge-dot" />
              Deep Industry Expertise
            </div>
          </div>

          <div className="cn-client-cards">
            <div className="cn-client-card">
              <div className="cn-client-card-inner">
                <div className="cn-client-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4>Personalized Guidance</h4>
                <ul>
                  <li>Tailored Consultation &amp; Recommendations</li>
                  <li>Requirement &amp; Needs Assessment</li>
                  <li>Goal-Oriented Strategic Planning</li>
                  <li>Risk &amp; Opportunity Analysis</li>
                  <li>Budget &amp; Investment Advisory</li>
                </ul>
              </div>
            </div>
            <div className="cn-client-card">
              <div className="cn-client-card-inner">
                <div className="cn-client-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9l-7 7m4-7l3 3m-7 4l3 3m8-10l2 2m-5 5l3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4>Client Consultancy</h4>
                <ul>
                  <li>Comprehensive Business Advisory</li>
                  <li>Strategic Roadmap Development</li>
                  <li>Stakeholder Engagement &amp; Management</li>
                  <li>Performance Monitoring &amp; Reporting</li>
                  <li>Growth &amp; Scalability Planning</li>
                </ul>
              </div>
            </div>
            <div className="cn-client-card">
              <div className="cn-client-card-inner">
                <div className="cn-client-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4>End-to-End Management</h4>
                <ul>
                  <li>Documentation &amp; Compliance Support</li>
                  <li>Approval Process Management</li>
                  <li>Coordination &amp; Follow-Up Services</li>
                  <li>Project Monitoring &amp; Execution</li>
                  <li>Final Delivery &amp; Ongoing Assistance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cn-client-benefits">
            <div className="cn-client-benefit">
              <div className="cn-client-benefit-inner">
                <div className="cn-client-benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                </div>
                <h5>Client-Centric Approach</h5>
                <p>Every solution is tailored to client requirements and objectives.</p>
              </div>
            </div>
            <div className="cn-client-benefit">
              <div className="cn-client-benefit-inner">
                <div className="cn-client-benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h5>Trusted &amp; Confidential</h5>
                <p>Maintaining complete privacy, professionalism, and integrity.</p>
              </div>
            </div>
            <div className="cn-client-benefit">
              <div className="cn-client-benefit-inner">
                <div className="cn-client-benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h5>Strategic Insights</h5>
                <p>Providing expert analysis for informed decision-making.</p>
              </div>
            </div>
            <div className="cn-client-benefit">
              <div className="cn-client-benefit-inner">
                <div className="cn-client-benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h5>Timely &amp; Transparent</h5>
                <p>Ensuring smooth communication and efficient service delivery.</p>
              </div>
            </div>
            <div className="cn-client-benefit">
              <div className="cn-client-benefit-inner">
                <div className="cn-client-benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h5>Long-Term Partnership</h5>
                <p>Building lasting relationships focused on sustainable success.</p>
              </div>
            </div>
          </div>

          <div className="cn-client-closing">
            <div className="cn-client-closing-inner">
              <p>From initial consultation and strategic planning to negotiations, documentation, approvals, and successful project completion, our consultancy team manages every stage with professionalism, transparency, and efficiency. We are committed to delivering reliable solutions that create long-term value, confidence, and growth for our clients.</p>
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
          <div className="cc-service-grid">
            <div className="cc-service-card">
              <span className="cc-service-num">01</span>
              <div className="cc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <h3>Business Advisory</h3>
              <p>Comprehensive advisory services covering strategy, operations, and growth planning for businesses at every stage.</p>
            </div>
            <div className="cc-service-card">
              <span className="cc-service-num">02</span>
              <div className="cc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3>Strategic Planning</h3>
              <p>Develop actionable roadmaps that align your vision with market realities and drive measurable outcomes.</p>
            </div>
            <div className="cc-service-card">
              <span className="cc-service-num">03</span>
              <div className="cc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h3>Market Entry</h3>
              <p>Navigate new markets with confidence through detailed research, partner identification, and entry strategy.</p>
            </div>
            <div className="cc-service-card">
              <span className="cc-service-num">04</span>
              <div className="cc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3>Growth Consulting</h3>
              <p>Identify and capitalize on growth opportunities through data-driven analysis and strategic execution.</p>
            </div>
            <div className="cc-service-card">
              <span className="cc-service-num">05</span>
              <div className="cc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3>Performance Improvement</h3>
              <p>Optimize processes, reduce costs, and enhance operational efficiency across your organization.</p>
            </div>
            <div className="cc-service-card">
              <span className="cc-service-num">06</span>
              <div className="cc-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" />
                </svg>
              </div>
              <h3>Change Management</h3>
              <p>Guide your organization through transformation with structured change management frameworks.</p>
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
                <h2 className="vt-cta-title">Ready to Accelerate Your Growth?</h2>
                <p className="vt-cta-desc">Let our client consultancy team help you achieve your business goals.</p>
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
