import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'
import SEO from '../components/SEO'
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

const marketingServices = [
  {
    image: '/advertising-campaigns.jpg',
    title: 'Advertising Campaigns',
    desc: 'High-impact, targeted ad campaigns designed to maximize your brand\'s reach, secure premium media spaces, and deliver a powerful return on investment.',
    features: ['Targeted Ad Strategy', 'Media Space Buying', 'Campaign Optimization', 'ROI & Performance Tracking'],
  },
  {
    image: '/social-media-posts.jpg',
    title: 'Social Media Posts',
    desc: 'Engaging, trend-driven social media content and custom graphics designed to captivate your followers, boost engagement, and elevate your brand presence.',
    features: ['Custom Graphic Design', 'Content Calendar Planning', 'Engaging Copywriting', 'Audience Interaction'],
  },
  {
    image: '/infographics-design.jpg',
    title: 'Infographics Design',
    desc: 'Visually stunning, data-driven infographics that transform complex information and statistics into engaging, easy-to-understand visual stories.',
    features: ['Data Visualization', 'Custom Vector Graphics', 'Brand-Aligned Layouts', 'High-Impact Typography'],
  },
  {
    image: '/email-marketing.jpg',
    title: 'Email Marketing Campaigns',
    desc: 'High-converting, automated email campaigns and newsletters crafted to engage your audience, build loyalty, and drive consistent sales.',
    features: ['Campaign Automation', 'Audience Segmentation', 'Conversion Copywriting', 'Performance Analytics'],
  },
  {
    image: '/whitepapers-reports.jpg',
    title: 'Whitepapers & Reports',
    desc: 'In-depth, authoritative research papers and industry reports designed to highlight your expertise, solve complex issues, and generate high-quality B2B leads.',
    features: ['In-Depth Industry Research', 'Technical Copywriting', 'Professional Layout Design', 'B2B Lead Generation'],
  },
  {
    image: '/blog-writing.jpg',
    title: 'Blog & Article Writing',
    desc: 'SEO-optimized, value-driven blog posts and articles designed to drive organic website traffic, engage your readers, and establish your brand authority.',
    features: ['SEO Keyword Optimization', 'Engaging Content Writing', 'Topic & Trend Research', 'Internal Linking Strategy'],
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
      <SEO title="Management Services" description="Professional management consulting services in Dubai — marketing management, business registration, business center services, and strategic frameworks." keywords={['management consulting Dubai', 'business registration UAE', 'marketing management services', 'business center Dubai']} />
      <style>{`
        .vt-hero-actions .vt-btn-primary {
          background: linear-gradient(135deg, #19283a, #ae683f);
          color: #fff;
        }
        .vt-hero-actions .vt-btn-primary:hover {
          background: linear-gradient(135deg, #ae683f, #19283a);
          box-shadow: 0 12px 32px rgba(174, 104, 63, 0.35);
        }
      `}</style>
      <section className="vt-hero">
        <video className="vt-hero-video" autoPlay muted loop playsInline poster="/financial-consultancy.jpg">
          <source src="/6565.mp4" type="video/mp4" />
        </video>
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content">
          <span className="vt-hero-badge">MANAGEMENT SOLUTIONS</span>
          <h1 className="vt-hero-title">
            <span style={{color: '#fff'}}>Driving Business Growth</span> <br />
            <span className="vt-hero-gradient-text">Through Strategic Management</span>
          </h1>
          <p className="vt-hero-desc">
            We provide professional management solutions designed to strengthen business performance, enhance operational efficiency, and accelerate sustainable growth. Through expert business and marketing management strategies, we help organizations achieve their goals with confidence and clarity.
          </p>
          <div className="vt-hero-actions">
            <Link to="/contact" className="vt-btn-primary">
              Explore Management Services
              <ArrowIcon />
            </Link>
            <a href="#mgmt-services" className="vt-btn-outline">
              Schedule a Consultation
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
                Empowering <span className="vt-gradient-text">Business Setup &amp; Brand Growth</span>
              </h2>
              <p className="vt-about-desc">
                Venturis Management is the consulting arm of Venturis Partners, helping organizations achieve seamless business registration, structural excellence, and powerful brand growth. We combine deep corporate expertise with modern marketing strategies to streamline your complete setup and drive sustainable market value.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  End-to-end corporate registration
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Targeted digital marketing strategies
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Full regulatory compliance assurance
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Custom business center setup &amp; support
                </div>
              </div>
            </div>
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="/bus-admin.jpg" alt="Venturis Management" className="vt-about-img" />
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

      <section className="mgmt-services">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge">Marketing Services</span>
            <h2 className="vt-section-title">Marketing Management Services</h2>
            <p className="vt-section-sub">
              Data-driven marketing solutions designed to amplify your brand, engage your audience, and accelerate revenue growth.
            </p>
          </div>
          <div className="mgmt-services-grid">
            {marketingServices.map((s, i) => (
              <div key={i} className="mgmt-service-card">
                <div className="mgmt-service-img-wrap">
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="mgmt-service-body">
                  <div className="mgmt-service-accent"></div>
                  <h3 className="mgmt-service-title">{s.title}</h3>
                  <p className="mgmt-service-desc">{s.desc}</p>
                  <div className="mgmt-service-features">
                    {s.features.map((f, j) => (
                      <div key={j} className="mgmt-service-feature">
                        <span className="mgmt-about-check"><CheckIcon /></span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="mgmt-service-cta">
                    DISCUSS PROJECT
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="br-section">
        <div className="container">
          <div className="br-intro">
            <div className="br-intro-accent"></div>
            <h2 className="br-main-heading">Business Management</h2>
            <div className="br-intro-divider">
              <span></span>
            </div>
            <h3 className="br-sub-heading">Business Registration</h3>
            <p className="br-desc">
              Complete business registration services including license acquisition and all necessary approvals. We handle the entire process from initial consultation to final registration, ensuring compliance with local regulations and requirements.
            </p>
          </div>
          <div className="br-body">
            <div className="br-process-card">
              <div className="br-process-card-accent"></div>
              <div className="br-process">
                <div className="br-step">
                  <div className="br-step-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <div className="br-step-num">01</div>
                  <div className="br-step-content">
                    <h4 className="br-step-title">Initial Consultation</h4>
                    <p className="br-step-desc">Business needs assessment and jurisdiction selection</p>
                  </div>
                </div>
                <div className="br-step">
                  <div className="br-step-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <div className="br-step-num">02</div>
                  <div className="br-step-content">
                    <h4 className="br-step-title">Documentation Preparation</h4>
                    <p className="br-step-desc">Complete application forms and required documents</p>
                  </div>
                </div>
                <div className="br-step">
                  <div className="br-step-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  </div>
                  <div className="br-step-num">03</div>
                  <div className="br-step-content">
                    <h4 className="br-step-title">License Acquisition</h4>
                    <p className="br-step-desc">Submission and follow-up with regulatory authorities</p>
                  </div>
                </div>
                <div className="br-step">
                  <div className="br-step-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="br-step-num">04</div>
                  <div className="br-step-content">
                    <h4 className="br-step-title">Final Registration</h4>
                    <p className="br-step-desc">Company incorporation and post-registration support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="br-benefits">
              <div className="br-benefits-accent"></div>
              <div className="br-benefits-inner">
                <h3 className="br-benefits-heading">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Key Benefits
                </h3>
                <div className="br-benefits-list">
                  <div className="br-benefit-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    <span>Streamlined registration process</span>
                  </div>
                  <div className="br-benefit-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                    <span>Regulatory compliance assurance</span>
                  </div>
                  <div className="br-benefit-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                    </svg>
                    <span>Time and resource optimization</span>
                  </div>
                  <div className="br-benefit-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                    <span>Cross-border expertise</span>
                  </div>
                  <div className="br-benefit-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    <span>End-to-end support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bc-section">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge">Business Centers</span>
            <h2 className="vt-section-title">Business Center Services</h2>
            <p className="vt-section-sub">
              Complete business center solutions from registration to construction, tailored for your success.
            </p>
          </div>
          <div className="bc-grid">
            <div className="bc-card">
              <div className="bc-card-accent"></div>
              <div className="bc-card-body">
                <div className="bc-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
                  </svg>
                </div>
                <h3 className="bc-card-title">Business Center Registration</h3>
                <p className="bc-card-desc">Complete registration services for business centers with full support from initial approval to final licensing.</p>
                <div className="bc-list">
                  <div className="bc-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                    <span>Initial Name Approval - Fast-track name reservation</span>
                  </div>
                  <div className="bc-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>License Acquisition - All necessary permits</span>
                  </div>
                  <div className="bc-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>Ejari Registration - Property registration</span>
                  </div>
                  <div className="bc-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Regulatory Compliance - Full documentation</span>
                  </div>
                </div>
                <div className="bc-card-footer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>End-to-end service till completion</span>
                </div>
              </div>
            </div>
            <div className="bc-card">
              <div className="bc-card-accent"></div>
              <div className="bc-card-body">
                <div className="bc-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20h20" /><path d="M5 20V8l7-4 7 4v12" /><path d="M9 20v-4h6v4" /><circle cx="12" cy="12" r="2" /><path d="M14 10l-2 2" />
                  </svg>
                </div>
                <h3 className="bc-card-title">Business Center Construction</h3>
                <p className="bc-card-desc">Custom-built business centers designed according to market demands and your specific requirements.</p>
                <div className="bc-list">
                  <div className="bc-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                    <span>Market Analysis - Demand-driven design</span>
                  </div>
                  <div className="bc-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                    </svg>
                    <span>Construction - Full build-out services</span>
                  </div>
                  <div className="bc-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    </svg>
                    <span>Facility Setup - Furnishing &amp; equipment</span>
                  </div>
                  <div className="bc-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                    <span>Operational Support - Staffing &amp; management</span>
                  </div>
                </div>
                <div className="bc-card-footer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>All related services included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="se-section">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge">Ecosystem</span>
            <h2 className="vt-section-title">360° Structuring Ecosystem</h2>
            <p className="vt-section-sub">
              We provide comprehensive structuring solutions covering every layer of business, ensuring your organization is built on solid foundations for sustainable growth.
            </p>
          </div>
          <div className="se-grid">
            <div className="se-card">
              <div className="se-card-accent"></div>
              <div className="se-card-body">
                <div className="se-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><rect x="7" y="7" width="3" height="3" /><rect x="14" y="7" width="3" height="3" /><rect x="7" y="14" width="3" height="3" /><rect x="14" y="14" width="3" height="3" />
                  </svg>
                </div>
                <h3 className="se-card-title">Business Structuring</h3>
                <p className="se-card-desc">Designing optimal frameworks for new business setups with focus on long-term viability and scalability.</p>
                <div className="se-list">
                  <div className="se-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                    <span>Jurisdiction Optimization - Strategic location selection</span>
                  </div>
                  <div className="se-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                    <span>Tax Efficiency - Minimizing tax burden</span>
                  </div>
                  <div className="se-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Regulatory Compliance - Meeting all requirements</span>
                  </div>
                  <div className="se-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
                    </svg>
                    <span>Scalable Foundations - Future-ready structures</span>
                  </div>
                </div>
                <div className="se-card-footer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Optimal setup assured</span>
                </div>
              </div>
            </div>
            <div className="se-card">
              <div className="se-card-accent"></div>
              <div className="se-card-body">
                <div className="se-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                  </svg>
                </div>
                <h3 className="se-card-title">Business Restructuring</h3>
                <p className="se-card-desc">Re-engineering existing structures to enhance efficiency, reduce costs, and unlock new growth opportunities.</p>
                <div className="se-list">
                  <div className="se-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
                    </svg>
                    <span>Operational Efficiency - Streamlined processes</span>
                  </div>
                  <div className="se-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    <span>Cost Optimization - Resource reallocation</span>
                  </div>
                  <div className="se-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Risk Mitigation - Proactive management</span>
                  </div>
                  <div className="se-list-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span>Growth Acceleration - Unlocking potential</span>
                  </div>
                </div>
                <div className="se-card-footer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Enhanced performance guaranteed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="se-bottom">
            <div className="se-badge">
              <div className="se-badge-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                </svg>
              </div>
              <span className="se-badge-label">360° Approach</span>
            </div>
            <div className="se-badge">
              <div className="se-badge-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <span className="se-badge-label">Global Solutions</span>
            </div>
            <div className="se-badge">
              <div className="se-badge-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <span className="se-badge-label">Investor Ready</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sbf-section">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge">Framework</span>
            <h2 className="vt-section-title">Strategic Business Framework: From Setup to Scale</h2>
            <p className="vt-section-sub">
              A structured approach to building and growing your business — from market intelligence to operational handover.
            </p>
          </div>
          <div className="sbf-grid">
            <div className="sbf-card">
              <div className="sbf-card-accent"></div>
              <div className="sbf-card-body">
                <div className="sbf-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <div className="sbf-card-content">
                  <h3 className="sbf-card-title">Market Intelligence &amp; Planning</h3>
                  <p className="sbf-card-desc">Deep-dive industry research and strategic jurisdiction selection tailored to your business goals.</p>
                </div>
              </div>
            </div>
            <div className="sbf-card">
              <div className="sbf-card-accent"></div>
              <div className="sbf-card-body">
                <div className="sbf-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="sbf-card-content">
                  <h3 className="sbf-card-title">Corporate Structuring</h3>
                  <p className="sbf-card-desc">Fast-track legal onboarding, name reservations, and flawless documentation assembly.</p>
                </div>
              </div>
            </div>
            <div className="sbf-card">
              <div className="sbf-card-accent"></div>
              <div className="sbf-card-body">
                <div className="sbf-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <div className="sbf-card-content">
                  <h3 className="sbf-card-title">Licensing &amp; Compliance</h3>
                  <p className="sbf-card-desc">Complete liaison with local regulatory authorities to secure active operational permits and commercial codes.</p>
                </div>
              </div>
            </div>
            <div className="sbf-card">
              <div className="sbf-card-accent"></div>
              <div className="sbf-card-body">
                <div className="sbf-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="sbf-card-content">
                  <h3 className="sbf-card-title">Operational Handover</h3>
                  <p className="sbf-card-desc">Seamless transition to your fully compliant corporate structure, investor-ready setup, or business facility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="smp-section">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge">Marketing Process</span>
            <h2 className="vt-section-title">Strategic Marketing Process: From Strategy to Growth</h2>
            <p className="vt-section-sub">
              A data-driven marketing framework that takes your brand from research and planning to measurable growth.
            </p>
          </div>
          <div className="smp-grid">
            <div className="smp-card">
              <div className="smp-card-accent"></div>
              <div className="smp-card-body">
                <div className="smp-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 118 2.83" /><path d="M22 12A10 10 0 0012 2v10z" />
                  </svg>
                </div>
                <div className="smp-card-content">
                  <h3 className="smp-card-title">Market Research &amp; Analysis</h3>
                  <p className="smp-card-desc">Identifying high-intent audience demographics, competitor landscapes, and trend-driven market opportunities.</p>
                </div>
              </div>
            </div>
            <div className="smp-card">
              <div className="smp-card-accent"></div>
              <div className="smp-card-body">
                <div className="smp-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3h6a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M9 14l2 2 4-4" />
                  </svg>
                </div>
                <div className="smp-card-content">
                  <h3 className="smp-card-title">Campaign Strategy &amp; Design</h3>
                  <p className="smp-card-desc">Crafting premium digital content, custom ad copies, and automated communication workflows tailored to your brand.</p>
                </div>
              </div>
            </div>
            <div className="smp-card">
              <div className="smp-card-accent"></div>
              <div className="smp-card-body">
                <div className="smp-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="smp-card-content">
                  <h3 className="smp-card-title">Deployment &amp; Media Buying</h3>
                  <p className="smp-card-desc">Launching synchronized campaigns across premium advertising spaces, social platforms, and email channels.</p>
                </div>
              </div>
            </div>
            <div className="smp-card">
              <div className="smp-card-accent"></div>
              <div className="smp-card-body">
                <div className="smp-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div className="smp-card-content">
                  <h3 className="smp-card-title">Optimization &amp; Performance Tracking</h3>
                  <p className="smp-card-desc">Continuous monitoring, A/B testing, and comprehensive analytics tracking to ensure maximum ROI and conversion.</p>
                </div>
              </div>
            </div>
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
