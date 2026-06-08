import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'
import './VenturisTech.css'

const managementServices = [
  {
    image: '/financial-consultancy.jpg',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: 'Project Management',
    desc: 'Comprehensive project planning, execution, and monitoring services ensuring timely delivery within budget and scope.',
    features: ['Project Planning & Scheduling', 'Resource Management', 'Risk Mitigation', 'Stakeholder Reporting', 'Agile & Waterfall Delivery'],
  },
  {
    image: '/10.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'HR & Talent Management',
    desc: 'Strategic human resources solutions including talent acquisition, performance management, training, and organizational development.',
    features: ['Talent Acquisition & Recruitment', 'Performance Management', 'Training & Development', 'Organizational Design', 'Compensation & Benefits'],
  },
  {
    image: '/20.jpg',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    title: 'Operations Management',
    desc: 'Process optimization, workflow automation, and operational excellence consulting to enhance efficiency and reduce costs.',
    features: ['Process Optimization', 'Workflow Automation', 'Quality Management', 'Lean Six Sigma', 'Performance Metrics'],
  },
  {
    image: '/30.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
    title: 'Supply Chain Management',
    desc: 'End-to-end supply chain solutions including logistics, procurement, inventory management, and vendor relationship management.',
    features: ['Logistics & Distribution', 'Strategic Procurement', 'Inventory Optimization', 'Vendor Management', 'Supply Chain Analytics'],
  },
  {
    image: '/client-consultancy.jpg',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Facility Management',
    desc: 'Integrated facility management services covering maintenance, security, space planning, and workplace experience.',
    features: ['Preventive Maintenance', 'Security Management', 'Space Planning', 'Workplace Solutions', 'Sustainability Programs'],
  },
  {
    image: '/vt-service-01.jpg',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: 'Property Management',
    desc: 'Professional property management solutions including leasing, tenant relations, asset maintenance, and portfolio optimization.',
    features: ['Leasing & Tenant Relations', 'Asset Maintenance', 'Portfolio Optimization', 'Property Marketing', 'Financial Reporting'],
  },
]

const industries = [
  { name: 'Corporate & Enterprise', desc: 'Strategic management solutions for large organizations seeking operational excellence and sustainable growth.' },
  { name: 'Small & Medium Business', desc: 'Tailored management consulting to help SMEs scale efficiently and compete effectively in their markets.' },
  { name: 'Healthcare', desc: 'Specialized management services for hospitals, clinics, and healthcare organizations navigating complex regulations.' },
  { name: 'Financial Services', desc: 'Risk management, compliance, and operational frameworks for banks, insurers, and investment firms.' },
  { name: 'Manufacturing', desc: 'Production optimization, supply chain management, and quality systems for industrial operations.' },
  { name: 'Technology', desc: 'Agile transformation, project governance, and talent management for tech companies and digital startups.' },
  { name: 'Real Estate & Construction', desc: 'Property and facility management solutions for developers, investors, and property operators.' },
  { name: 'Retail & E-Commerce', desc: 'Inventory management, supply chain optimization, and operational efficiency for retail businesses.' },
]

const whyItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Proven Expertise',
    desc: 'Years of cross-industry management experience with a track record of delivering operational excellence and measurable results.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Global Perspective',
    desc: 'Deep understanding of international business practices, cultural dynamics, and cross-border management challenges.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Data-Driven Approach',
    desc: 'Every recommendation is grounded in rigorous analysis, performance metrics, and quantitative validation.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: 'End-to-End Delivery',
    desc: 'From assessment to optimization, we partner with you throughout the journey ensuring solutions are fully implemented.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Dedicated Teams',
    desc: 'You get a committed team of management professionals who understand your business and deliver personalized attention.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Sustainable Results',
    desc: 'We focus on long-term value creation, building capabilities that endure and deliver lasting competitive advantage.',
  },
]

const processSteps = [
  { step: '01', title: 'Discovery & Assessment', desc: 'Comprehensive evaluation of your current operations, processes, and organizational structure.' },
  { step: '02', title: 'Strategy & Planning', desc: 'Develop a strategic roadmap with clear milestones, KPIs, and resource allocation aligned to your goals.' },
  { step: '03', title: 'Implementation', desc: 'Execute management solutions with dedicated oversight, agile governance, and continuous communication.' },
  { step: '04', title: 'Monitor & Optimize', desc: 'Track performance, gather feedback, and refine processes to ensure sustained improvement and success.' },
]

const stats = [
  { number: '200+', label: 'Projects Managed' },
  { number: '50+', label: 'Management Experts' },
  { number: '12+', label: 'Industries Served' },
  { number: '98%', label: 'Client Retention' },
]

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export default function Management() {
  return (
    <>
      <section className="vt-hero">
        <video className="vt-hero-video" autoPlay muted loop playsInline poster="/financial-consultancy.jpg">
          <source src="/6565.mp4" type="video/mp4" />
        </video>
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content">
          <span className="vt-hero-badge">VENTURIS MANAGEMENT</span>
          <h1 className="vt-hero-title">
            Driving Operational <br />
            <span className="vt-hero-gradient-text">Excellence</span>
          </h1>
          <p className="vt-hero-desc">
            The management division of Venturis Partners — delivering strategic
            management solutions that optimize operations, build high-performing
            teams, and drive sustainable business growth.
          </p>
          <div className="vt-hero-actions">
            <Link to="/contact" className="vt-btn-primary">
              Get Started
              <ArrowIcon />
            </Link>
            <a href="#mgmt-services" className="vt-btn-outline">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <section className="vt-stats-bar">
        <div className="container">
          <div className="vt-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="vt-stat-item">
                <span className="vt-stat-num"><AnimatedCounter end={s.number} /></span>
                <span className="vt-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vt-about">
        <div className="container">
          <div className="vt-about-grid">
            <div className="vt-about-content">
              <span className="vt-badge">Who We Are</span>
              <h2 className="vt-about-title">
                Your <span className="vt-gradient-text">Management Partner</span> for Sustainable Growth
              </h2>
              <p className="vt-about-desc">
                Venturis Management is the dedicated management consulting arm of Venturis Partners,
                focused on helping organizations achieve operational excellence. We combine deep
                industry expertise with proven methodologies to deliver measurable improvements
                across every facet of your business.
              </p>
              <p className="vt-about-desc">
                From project governance and talent strategy to supply chain optimization and facility
                management, our team works alongside yours to implement solutions that drive
                efficiency, reduce costs, and create lasting value.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  End-to-end management solutions
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Data-driven decision making
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Cross-industry expertise
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Measurable, sustainable results
                </div>
              </div>
            </div>
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="/financial-consultancy.jpg" alt="Venturis Management" className="vt-about-img" />
              </div>
              <div className="vt-about-float-card">
                <div className="vt-about-float-icon">VM</div>
                <div className="vt-about-float-text">
                  <strong>Venturis Management</strong>
                  <span>Excellence in action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mgmt-services" className="vt-services-section">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge">Our Expertise</span>
            <h2 className="vt-section-title">Complete Management Services</h2>
            <p className="vt-section-sub">
              Comprehensive management solutions across six core disciplines to transform your operations.
            </p>
          </div>
          <div className="vt-services-grid">
            {managementServices.map((s, i) => (
              <div key={i} className="vt-service-card">
                <div className="vt-service-img-wrap">
                  <div className="vt-service-img-bg">
                    <img src={s.image} alt={s.title} className="vt-service-img" />
                  </div>
                  <div className="vt-service-img-overlay">
                    <div className="vt-service-img-icon">{s.icon}</div>
                  </div>
                </div>
                <div className="vt-service-body">
                  <div className="vt-service-accent"></div>
                  <h3 className="vt-service-title">{s.title}</h3>
                  <p className="vt-service-desc">{s.desc}</p>
                  <ul className="vt-service-list">
                    {s.features.map((f, j) => (
                      <li key={j}>
                        <span className="vt-service-check"><CheckIcon /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="vt-service-cta">
                    <span>Discuss Project</span>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vt-industries-section">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge vt-badge-light">Industries</span>
            <h2 className="vt-section-title vt-section-title-light">Industries We Serve</h2>
            <p className="vt-section-sub vt-section-sub-light">
              Deep management expertise across key sectors, delivered by experienced professionals.
            </p>
          </div>
          <div className="vt-industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className="vt-industry-card">
                <div className="vt-industry-card-inner">
                  <div className="vt-industry-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="vt-industry-name">{ind.name}</h3>
                  <p className="vt-industry-desc">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vt-process-section">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge">How We Work</span>
            <h2 className="vt-section-title">Our Management Process</h2>
            <p className="vt-section-sub">
              A proven, collaborative methodology that ensures measurable outcomes at every stage.
            </p>
          </div>
          <div className="vt-process-steps">
            {processSteps.map((p, i) => (
              <div key={i} className="vt-process-item">
                <div className="vt-process-card">
                  <div className="vt-process-card-num">{p.step}</div>
                  <h3 className="vt-process-card-title">{p.title}</h3>
                  <p className="vt-process-card-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vt-why-section">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge vt-badge-light">Why Venturis Management</span>
            <h2 className="vt-section-title vt-section-title-light">Built for Excellence. Driven by Results.</h2>
            <p className="vt-section-sub vt-section-sub-light">
              Six reasons our clients trust us as their management partner.
            </p>
          </div>
          <div className="vt-why-grid">
            {whyItems.map((item, i) => (
              <div key={i} className="vt-why-card">
                <div className="vt-why-card-inner">
                  <div className="vt-why-icon">{item.icon}</div>
                  <h3 className="vt-why-title">{item.title}</h3>
                  <p className="vt-why-desc">{item.desc}</p>
                </div>
              </div>
            ))}
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
                <h2 className="vt-cta-title">Ready to Transform Your Operations?</h2>
                <p className="vt-cta-desc">
                  Contact our management team today for a free consultation. Let us discuss how we can help you achieve operational excellence.
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
