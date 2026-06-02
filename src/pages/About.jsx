import { Link } from 'react-router-dom'
import './About.css'

const team = [
  {
    name: 'John Anderson',
    role: 'CEO & Founder',
    desc: '20+ years of experience in strategic consulting and business transformation.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Chief Strategy Officer',
    desc: 'Former McKinsey consultant with deep expertise in growth strategy.',
  },
  {
    name: 'David Chen',
    role: 'Head of Analytics',
    desc: 'Data science expert driving insights for Fortune 500 companies.',
  },
  {
    name: 'Emily Roberts',
    role: 'Director of Operations',
    desc: 'Specializes in operational excellence and digital transformation.',
  },
]

const services = [
  {
    title: 'Strategic Consulting',
    desc: 'Data-driven strategies aligned with your vision to drive sustainable growth and market leadership.',
    gradient: 'linear-gradient(135deg, #19283a 0%, #af693f 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    title: 'Digital Transformation',
    desc: 'End-to-end digital overhaul to modernize operations, enhance customer experiences, and unlock new revenue streams.',
    gradient: 'linear-gradient(135deg, #323a4e 0%, #ae683f 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: 'Data & Analytics',
    desc: 'Advanced analytics and AI-powered insights that turn complex data into actionable business intelligence.',
    gradient: 'linear-gradient(135deg, #af693f 0%, #19283a 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
  },
  {
    title: 'Operational Excellence',
    desc: 'Lean process optimization and workflow automation to maximize efficiency, reduce costs, and scale seamlessly.',
    gradient: 'linear-gradient(135deg, #ae683f 0%, #323a4e 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.5V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.5-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.5V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.5 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.5 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
  {
    title: 'Growth Strategy',
    desc: 'Market expansion roadmaps and go-to-market strategies that accelerate revenue and competitive advantage.',
    gradient: 'linear-gradient(135deg, #19283a 0%, #323a4e 50%, #af693f 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    title: 'Risk Management',
    desc: 'Comprehensive risk assessment frameworks and compliance solutions to safeguard your business and reputation.',
    gradient: 'linear-gradient(135deg, #af693f 0%, #666077 50%, #19283a 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

const timeline = [
  { year: '2010', event: 'Venturis Partners founded' },
  { year: '2013', event: 'Expanded to international markets' },
  { year: '2016', event: 'Launched digital transformation practice' },
  { year: '2020', event: 'Surpassed 200 clients milestone' },
  { year: '2024', event: 'Opened offices in 3 new regions' },
]

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <span className="about-hero-tag">WHO WE ARE</span>
          <h1 className="about-hero-title">
            Building Strategic Partnerships,<br />
            Creating Lasting Value
          </h1>
          <p className="about-hero-desc">
            Venturis Partners is dedicated to fostering meaningful business
            relationships that drive growth, innovation, and long-term success.
            Through strategic collaborations with investors, enterprises, and
            industry leaders, we create opportunities that strengthen businesses,
            expand market reach, and deliver sustainable value for all
            stakeholders.
          </p>
          <div className="about-hero-buttons">
            <Link to="/contact" className="btn btn-gradient about-hero-btn">
              Become a Partner
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/services" className="btn btn-outline about-hero-btn about-hero-btn-outline">
              Explore Partnerships
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section about-detailed-section">
        <div className="container">
          <div className="about-detailed-wrap">
            <div className="about-detailed-visual">
              <div className="about-detailed-image-frame">
                <img src="/43.png" alt="About Venturis Partners" className="about-detailed-img" />
              </div>
              <div className="about-detailed-badge">
                <span className="about-detailed-badge-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </span>
                <span className="about-detailed-badge-text">Trusted Partner</span>
              </div>
              <div className="about-detailed-shape"></div>
            </div>
            <div className="about-detailed-info">
              <span className="about-detailed-tag">About Us</span>
              <h2 className="about-detailed-title">Building <span className="text-gradient">Partnerships</span> That Drive Lasting <span className="text-gradient">Success</span></h2>
              <p className="about-detailed-desc">
                We bring together businesses, investors, and industry experts to create opportunities that drive growth, innovation, and long-term value. Through strategic collaboration and deep market understanding, we help organizations navigate challenges and achieve their goals with confidence.
              </p>
              <p className="about-detailed-desc">
                We go beyond traditional relationships — building trusted partnerships that foster mutual success and lasting impact. With expertise, integrity, and a results-driven approach, we empower organizations to grow, adapt, and thrive.
              </p>
              <div className="about-detailed-features">
                <div className="about-detailed-feature">
                  <span className="about-detailed-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Strategic Advisory</span>
                </div>
                <div className="about-detailed-feature">
                  <span className="about-detailed-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Market Intelligence</span>
                </div>
                <div className="about-detailed-feature">
                  <span className="about-detailed-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Growth Capital</span>
                </div>
                <div className="about-detailed-feature">
                  <span className="about-detailed-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Strategic Partnerships</span>
                </div>
                <div className="about-detailed-feature">
                  <span className="about-detailed-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Business Transformation</span>
                </div>
                <div className="about-detailed-feature">
                  <span className="about-detailed-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Investment Solutions</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-gradient about-detailed-btn">
                Get in Touch
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-mission-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Purpose</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
            <p className="section-subtitle">
              Driven by purpose, guided by values — shaping the future of strategic partnerships.
            </p>
          </div>
          <div className="vision-mission-wrap">
            <div className="vision-card">
              <div className="vision-card-content">
                <div className="vision-icon-wrap">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="vision-title">Our Vision</h3>
                <p className="vision-text">
                  To become a globally recognized and innovation-driven conglomerate that seamlessly bridges investors, businesses, and emerging technologies. We strive to create sustainable value, foster strategic partnerships, drive operational excellence, and contribute to long-term economic growth and prosperity across diverse industries and global markets.
                </p>
              </div>
            </div>
            <div className="vision-card">
              <div className="vision-card-content">
                <div className="vision-icon-wrap">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <h3 className="vision-title">Our Mission</h3>
                <p className="vision-text">
                  To deliver trusted, expert-driven, and result-oriented solutions across finance, real estate, business consultancy, and emerging technologies. Our mission is to empower clients with confidence, clarity, and strategic insight by providing innovative opportunities, reliable guidance, and customized solutions that support sustainable growth and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Principles</span>
            <h2 className="section-title">Core Values</h2>
            <p className="section-subtitle">
              The principles that guide every decision, partnership, and solution we deliver.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-number">01</span>
              <div className="value-accent-line"></div>
              <div className="value-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <h3 className="value-title">Integrity &amp; Transparency</h3>
              <div className="value-title-underline"></div>
              <p className="value-text">
                We uphold the highest standards of ethics, honesty, and professionalism in every interaction. Through transparency and accountability, we build lasting relationships based on trust, credibility, and mutual respect.
              </p>
            </div>
            <div className="value-item">
              <span className="value-number">02</span>
              <div className="value-accent-line"></div>
              <div className="value-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6"/>
                  <path d="M10 22h4"/>
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
                </svg>
              </div>
              <h3 className="value-title">Innovation</h3>
              <div className="value-title-underline"></div>
              <p className="value-text">
                We embrace innovation by integrating advanced technologies, artificial intelligence, and forward-thinking strategies into our operations. Continuous improvement and adaptability enable us to stay ahead in a rapidly evolving business landscape.
              </p>
            </div>
            <div className="value-item">
              <span className="value-number">03</span>
              <div className="value-accent-line"></div>
              <div className="value-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </div>
              <h3 className="value-title">Sustainability</h3>
              <div className="value-title-underline"></div>
              <p className="value-text">
                We are committed to promoting responsible business practices that create long-term value for our stakeholders. Our focus is on sustainable growth, environmental awareness, and making a positive impact on communities and future generations.
              </p>
            </div>
            <div className="value-item">
              <span className="value-number">04</span>
              <div className="value-accent-line"></div>
              <div className="value-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="value-title">Global Collaboration</h3>
              <div className="value-title-underline"></div>
              <p className="value-text">
                We believe in the power of partnerships and international cooperation. By building strong cross-border relationships with investors, businesses, and industry leaders, we create opportunities that drive shared success and global growth.
              </p>
            </div>
            <div className="value-item">
              <span className="value-number">05</span>
              <div className="value-accent-line"></div>
              <div className="value-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="value-title">Client-Centricity</h3>
              <div className="value-title-underline"></div>
              <p className="value-text">
                Our clients are at the center of everything we do. We take the time to understand their unique goals and challenges, delivering tailored solutions that exceed expectations and contribute to their long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions tailored to propel your business forward.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-premium-card">
                <div className="service-premium-image" style={{ background: service.gradient }}>
                  <div className="service-premium-overlay">
                    <div className="service-premium-icon">{service.icon}</div>
                  </div>
                </div>
                <div className="service-premium-body">
                  <h3 className="service-premium-title">{service.title}</h3>
                  <p className="service-premium-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Timeline</span>
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-dot"></div>
                <p className="timeline-event">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Team</span>
            <h2 className="section-title">Meet Our Leadership</h2>
            <p className="section-subtitle">
              Experienced professionals dedicated to your success.
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Want to Be Part of Our Story?</h2>
            <p className="cta-desc">Let&apos;s work together to achieve remarkable results.</p>
            <Link to="/contact" className="btn btn-gradient">
              Contact Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
