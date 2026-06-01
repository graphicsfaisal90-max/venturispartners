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
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="section-tag">About Us</span>
          <h1 className="page-hero-title">Who We Are</h1>
          <p className="page-hero-desc">
            We are a team of passionate strategists, analysts, and innovators
            dedicated to helping businesses reach their full potential.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">A Legacy of Excellence</h2>
              <p className="about-paragraph">
                Founded in 2010, Venturis Partners has grown from a small
                consultancy to a global strategic partner for businesses across
                industries. Our journey has been defined by a relentless
                commitment to delivering measurable results.
              </p>
              <p className="about-paragraph">
                We believe in the power of data-driven insights combined with
                human creativity. Our team brings together diverse perspectives
                and deep expertise to solve complex business challenges.
              </p>
            </div>
            <div className="about-values">
              <div className="value-card">
                <h3>Mission</h3>
                <p>Empower businesses to achieve sustainable growth through strategic excellence.</p>
              </div>
              <div className="value-card">
                <h3>Vision</h3>
                <p>Be the most trusted partner for business transformation worldwide.</p>
              </div>
              <div className="value-card">
                <h3>Values</h3>
                <p>Integrity, innovation, collaboration, and results-driven excellence.</p>
              </div>
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

      <section className="section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Want to Be Part of Our Story?</h2>
            <p className="cta-desc">Let&apos;s work together to achieve remarkable results.</p>
            <Link to="/contact" className="btn btn-primary">
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
