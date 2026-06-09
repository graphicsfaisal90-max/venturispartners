import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'
import SEO from '../components/SEO'
import './VenturisTech.css'

const techServices = [
  {
    image: '/vt-service-01.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'High-performance, scalable websites and web applications built with modern frameworks and clean architecture.',
    features: ['React & Next.js', 'E-commerce Platforms', 'CMS Development', 'Progressive Web Apps'],
  },
  {
    image: '/vt-service-02.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.',
    features: ['iOS & Android Apps', 'React Native & Flutter', 'App Store Deployment', 'Mobile UI/UX Design'],
  },
  {
    image: '/vt-service-03.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    title: 'Cloud & DevOps',
    desc: 'End-to-end cloud migration, infrastructure automation, and DevOps practices that accelerate delivery.',
    features: ['AWS, Azure & GCP', 'CI/CD Pipelines', 'Kubernetes & Docker', 'Infrastructure as Code'],
  },
  {
    image: '/vt-service-04.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc: 'Intelligent automation, predictive analytics, and custom AI models that turn data into a competitive advantage.',
    features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Chatbots & Virtual Assistants'],
  },
  {
    image: '/vt-service-05.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Cybersecurity',
    desc: 'Comprehensive security solutions that protect your infrastructure, data, and reputation from evolving threats.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance & Governance', 'Incident Response'],
  },
  {
    image: '/vt-service-06.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Data Analytics & BI',
    desc: 'Transform raw data into actionable insights with modern data pipelines, dashboards, and visualization tools.',
    features: ['Data Warehousing', 'Real-time Dashboards', 'ETL Pipelines', 'Big Data Solutions'],
  },
  {
    image: '/vt-service-07.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'User-centered design that balances aesthetics with functionality, creating intuitive digital experiences.',
    features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
  },
  {
    image: '/vt-service-08.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/>
      </svg>
    ),
    title: 'Custom Software',
    desc: 'Bespoke software solutions engineered around your unique business workflows, integrations, and growth plans.',
    features: ['SaaS Platforms', 'Enterprise Software', 'API Development', 'System Integration'],
  },
  {
    image: '/vt-service-09.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'IT Consulting & Strategy',
    desc: 'Technology roadmaps and digital strategies that align IT investments with your business objectives.',
    features: ['Digital Strategy', 'Technology Audit', 'IT Infrastructure Planning', 'Vendor Selection'],
  },
  {
    image: '/vt-service-10.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
    title: 'Graphic Design & Branding',
    desc: 'Creative visual identity and brand strategy services that make your business stand out with compelling design across all media.',
    features: ['Logo & Identity Design', 'Brand Strategy', 'Print & Digital Media', 'Social Media Graphics'],
  },
  {
    image: '/vt-service-11.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: 'CRM Solutions',
    desc: 'Powerful customer relationship management platforms that help you manage leads, nurture clients, and drive sales growth.',
    features: ['Lead Management', 'Sales Pipeline Automation', 'Customer Analytics', 'Integration & Customization'],
  },
  {
    image: '/vt-service-12.jpg',
    bg: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    title: 'Web Hosting',
    desc: 'Fast, secure, and reliable web hosting solutions with 99.9% uptime, SSD storage, and 24/7 expert support for your online presence.',
    features: ['Shared & VPS Hosting', 'Dedicated Servers', 'SSL & Security', '24/7 Technical Support'],
  },
]

const techStack = {
  Frontend: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'Python', 'Java', 'PHP', '.NET', 'Go'],
  Mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
  Cloud: ['AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Vercel'],
  Database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'DynamoDB'],
  DevOps: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
  AI_ML: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn'],
  Design: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
}

const industries = [
  { name: 'Finance & Banking', desc: 'Secure, compliant platforms for digital banking, payments, and fintech innovation.' },
  { name: 'Healthcare', desc: 'HIPAA-ready systems for patient management, telemedicine, and medical data analytics.' },
  { name: 'E-Commerce & Retail', desc: 'Conversion-focused storefronts, marketplaces, and omnichannel retail solutions.' },
  { name: 'Real Estate', desc: 'Property platforms, listing portals, and CRM systems built for agents and developers.' },
  { name: 'Education', desc: 'Learning management systems, virtual classrooms, and edtech platforms for modern learners.' },
  { name: 'Logistics & Supply Chain', desc: 'Tracking systems, route optimization, and end-to-end supply chain visibility.' },
  { name: 'Travel & Hospitality', desc: 'Booking engines, guest experience apps, and operations platforms for the travel industry.' },
  { name: 'Manufacturing', desc: 'Smart factory systems, IoT monitoring, and ERP integrations for industrial operations.' },
]

const whyItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Senior-Only Engineers',
    desc: 'Every line of code is written by experienced engineers with a track record of shipping production-grade software.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Transparent Communication',
    desc: 'Real-time dashboards, weekly demos, and direct access to the team building your product.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Security-First Mindset',
    desc: 'Security is built into every layer of our development process — from architecture to deployment.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Scalable Architectures',
    desc: 'Systems designed to handle growth from day one, with patterns proven at enterprise scale.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Time-Zone Friendly',
    desc: 'Distributed teams across regions, structured to give you overlapping hours for continuous progress.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Long-Term Partnership',
    desc: 'We do not just deliver and disappear — we evolve with you, supporting every stage of your growth.',
  },
]

const processSteps = [
  { step: '01', title: 'Discovery & Strategy', desc: 'We map your business goals, user needs, and technical requirements to define a clear roadmap.' },
  { step: '02', title: 'Architecture & Design', desc: 'Our architects design scalable systems while designers craft intuitive interfaces.' },
  { step: '03', title: 'Agile Development', desc: 'Iterative sprints with continuous feedback, regular demos, and full transparency at every stage.' },
  { step: '04', title: 'Quality & Testing', desc: 'Automated and manual testing ensures performance, security, and reliability before launch.' },
  { step: '05', title: 'Launch & Scale', desc: 'Seamless deployment with monitoring, optimization, and ongoing support as your product grows.' },
]

const stats = [
  { number: '120+', label: 'Projects Delivered' },
  { number: '40+', label: 'Tech Experts' },
  { number: '15+', label: 'Industries Served' },
  { number: '24/7', label: 'Support' },
]

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

export default function VenturisTech() {
  return (
    <>
      <SEO title="Venturis Tech" description="IT solutions and digital transformation services in Dubai — software development, cloud computing, cybersecurity, and tech consulting by Venturis Partners." keywords={['IT companies in UAE', 'tech consulting Dubai', 'digital transformation UAE', 'software development Dubai']} />
      <section className="vt-hero">
        <video className="vt-hero-video" autoPlay muted loop playsInline poster="/vt-service-01.jpg">
          <source src="/6565.mp4" type="video/mp4" />
        </video>
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content">
          <span className="vt-hero-badge">VENTURIS TECH</span>
          <h1 className="vt-hero-title">
            Engineering the Future<br />
            of <span className="vt-hero-gradient-text">Digital Innovation</span>
          </h1>
          <p className="vt-hero-desc">
            The technology division of Venturis Partners — building intelligent,
            scalable, and secure software solutions that empower businesses to
            lead in a rapidly evolving digital world.
          </p>
          <div className="vt-hero-actions">
            <Link to="/contact" className="vt-btn-primary">
              Start Your Project
              <ArrowIcon />
            </Link>
            <a href="#vt-services" className="vt-btn-outline">
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
                Your <span className="vt-gradient-text">Technology Partner</span> for the Next Decade
              </h2>
              <p className="vt-about-desc">
                Venturis Tech is the dedicated technology arm of Venturis Partners, focused on
                designing, building, and scaling digital products that solve real business problems.
                From startups to enterprises, we deliver end-to-end software services that combine
                deep technical expertise with strategic thinking.
              </p>
              <p className="vt-about-desc">
                Our multidisciplinary teams of engineers, designers, and strategists work
                alongside you to turn ambitious ideas into reliable, high-performance products —
                on time, on budget, and built to scale.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Full-cycle product development
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Agile & transparent delivery
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Scalable & secure architecture
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Long-term partnership & support
                </div>
              </div>
            </div>
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="/7687.png" alt="Venturis Tech" className="vt-about-img" />
              </div>
              <div className="vt-about-float-card">
                <div className="vt-about-float-icon">VT</div>
                <div className="vt-about-float-text">
                  <strong>Venturis Tech</strong>
                  <span>Innovation starts here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vt-services" className="vt-services-section">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge">Our Expertise</span>
            <h2 className="vt-section-title">Complete IT & Technology Services</h2>
            <p className="vt-section-sub">
              From concept to deployment and beyond — a full spectrum of technology services to power your growth.
            </p>
          </div>
          <div className="vt-services-grid">
            {techServices.map((s, i) => (
              <div key={i} className="vt-service-card">
                <div className="vt-service-img-wrap">
                  {s.image ? (
                    <div className="vt-service-img-bg">
                      <img src={s.image} alt={s.title} className="vt-service-img" />
                    </div>
                  ) : (
                    <div className="vt-service-img-bg vt-service-img-gradient" style={{ background: s.bg }}>
                      <div className="vt-service-img-placeholder">
                        {s.icon}
                      </div>
                    </div>
                  )}
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

      <section className="vt-stack-section">
        <div className="container">
          <div className="vt-section-header">
            <span className="vt-badge">Technology</span>
            <h2 className="vt-section-title">Our Tech Stack</h2>
            <p className="vt-section-sub">
              We work with modern, battle-tested tools and frameworks to build solutions that last.
            </p>
          </div>
          <div className="vt-stack-grid">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="vt-stack-card">
                <div className="vt-stack-header">
                  <h3>{category === 'AI_ML' ? 'AI / ML' : category}</h3>
                  <div className="vt-stack-accent"></div>
                </div>
                <div className="vt-stack-items">
                  {items.map((item) => (
                    <span key={item} className="vt-stack-chip">{item}</span>
                  ))}
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
              Domain expertise combined with technical excellence to deliver impactful solutions across sectors.
            </p>
          </div>
          <div className="vt-industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className="vt-industry-card">
                <div className="vt-industry-card-inner">
                  <div className="vt-industry-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
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
            <h2 className="vt-section-title">Our Development Process</h2>
            <p className="vt-section-sub">
              A transparent, agile workflow designed to deliver quality outcomes — predictably.
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
            <span className="vt-badge vt-badge-light">Why Venturis Tech</span>
            <h2 className="vt-section-title vt-section-title-light">Built for Excellence. Driven by Results.</h2>
            <p className="vt-section-sub vt-section-sub-light">
              Six reasons our clients choose us as their long-term technology partner.
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
                <span className="vt-cta-badge">LET&apos;S BUILD</span>
                <h2 className="vt-cta-title">Have a Project in Mind?</h2>
                <p className="vt-cta-desc">
                  Tell us about your idea and our team will get back to you within 24 hours
                  with a tailored plan, timeline, and estimate.
                </p>
              </div>
              <div className="vt-cta-actions">
                <Link to="/contact" className="vt-btn-primary">
                  Schedule a Call
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
