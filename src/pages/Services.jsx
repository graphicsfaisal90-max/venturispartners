import { Link } from 'react-router-dom'
import './Services.css'

const servicesList = [
  {
    icon: '📊',
    title: 'Strategy Consulting',
    desc: 'Develop winning strategies that drive sustainable growth and competitive advantage. Our consultants work closely with leadership teams to define vision, set priorities, and execute with precision.',
    features: ['Market analysis & positioning', 'Growth strategy development', 'Organizational design', 'M&A advisory'],
  },
  {
    icon: '🔍',
    title: 'Business Analytics',
    desc: 'Transform raw data into actionable insights. Our analytics team leverages cutting-edge tools and methodologies to uncover patterns, predict trends, and optimize decision-making.',
    features: ['Predictive analytics', 'Customer insights', 'Performance dashboards', 'Data visualization'],
  },
  {
    icon: '⚡',
    title: 'Digital Transformation',
    desc: 'Future-proof your business with end-to-end digital solutions. From cloud migration to AI implementation, we guide your digital journey from strategy to execution.',
    features: ['Cloud solutions', 'Process automation', 'AI & ML integration', 'Digital strategy'],
  },
  {
    icon: '🛡️',
    title: 'Risk Management',
    desc: 'Identify, assess, and mitigate risks with our comprehensive risk management frameworks. Protect your business while enabling confident strategic decisions.',
    features: ['Risk assessment', 'Compliance frameworks', 'Business continuity', 'Cybersecurity advisory'],
  },
  {
    icon: '💡',
    title: 'Innovation Lab',
    desc: 'Stay ahead of the curve with our innovation consulting services. We help you build a culture of innovation and develop breakthrough products and services.',
    features: ['Innovation workshops', 'Product development', 'Design thinking', 'R&D strategy'],
  },
  {
    icon: '🤝',
    title: 'Change Management',
    desc: 'Navigate organizational change smoothly. Our change management experts ensure your transformation initiatives achieve lasting results with minimal disruption.',
    features: ['Change strategy', 'Stakeholder engagement', 'Training programs', 'Culture transformation'],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="section-tag">Our Services</span>
          <h1 className="page-hero-title">What We Offer</h1>
          <p className="page-hero-desc">
            Comprehensive business solutions designed to drive measurable results
            and create lasting value for your organization.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-detailed">
            <Link to="/services/venturis-tech" className="service-detailed-card service-featured-card">
              <span className="service-detailed-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </span>
              <div className="service-detailed-content">
                <span className="service-featured-tag">OUR TECHNOLOGY DIVISION</span>
                <h3 className="service-detailed-title">Venturis Tech — Engineering Digital Excellence</h3>
                <p className="service-detailed-desc">
                  The dedicated technology arm of Venturis Partners. From web and mobile
                  development to AI, cloud, and cybersecurity — we design, build, and scale
                  software that powers the next generation of business.
                </p>
                <ul className="service-features">
                  <li>Web & Mobile App Development</li>
                  <li>Cloud, DevOps & AI / ML</li>
                  <li>Cybersecurity & Data Analytics</li>
                  <li>Custom Software & IT Consulting</li>
                </ul>
                <span className="service-featured-link">
                  Explore Venturis Tech
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>

            {servicesList.map((service, i) => (
              <div key={i} className="service-detailed-card">
                <span className="service-detailed-icon">{service.icon}</span>
                <div className="service-detailed-content">
                  <h3 className="service-detailed-title">{service.title}</h3>
                  <p className="service-detailed-desc">{service.desc}</p>
                  <ul className="service-features">
                    {service.features.map((f, j) => (
                      <li key={j}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Process</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              A proven methodology that ensures consistent, high-quality results.
            </p>
          </div>
          <div className="process-grid">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your business, challenges, and goals.' },
              { step: '02', title: 'Analysis', desc: 'Data-driven assessment to identify opportunities.' },
              { step: '03', title: 'Strategy', desc: 'Develop a tailored roadmap for success.' },
              { step: '04', title: 'Execution', desc: 'Implement solutions with measurable milestones.' },
            ].map((p, i) => (
              <div key={i} className="process-card">
                <span className="process-step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Not Sure Which Service You Need?</h2>
            <p className="cta-desc">Schedule a free consultation and we&apos;ll help you figure it out.</p>
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation
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
