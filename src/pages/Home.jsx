import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import PaymentMethodsCarousel from '../components/PaymentMethodsCarousel'
import AnimatedCounter from '../components/AnimatedCounter'
import SEO from '../components/SEO'
import './Home.css'

const services = [
  {
    title: 'Information Technology',
    desc: 'Cutting-edge IT solutions and infrastructure management to modernize operations, enhance security, and drive digital innovation across your enterprise.',
    image: '/information-technology.jpg',
  },
  {
    title: 'Digital Marketing',
    desc: 'Data-driven digital marketing strategies that amplify your brand, engage your audience, and deliver measurable growth across all online channels.',
    image: '/digital-marketing.jpg',
  },
  {
    title: 'Documentation Consultancy',
    desc: 'Professional documentation services including technical writing, proposal development, compliance documentation, and business process documentation tailored to your industry needs.',
    image: 'https://img.magnific.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    title: 'Client Consultancy',
    desc: 'Strategic advisory services that align business goals with actionable plans, providing expert guidance to navigate challenges and seize opportunities.',
    image: '/client-consultancy.jpg',
  },
  {
    title: 'Financial Consultancy',
    desc: 'Expert financial planning, investment analysis, and risk management solutions to optimize capital allocation and drive sustainable business growth.',
    image: '/financial-consultancy.jpg',
  },
  {
    title: 'General Trading',
    desc: 'Premium quality spices and trading solutions sourced from around the world, delivering authentic flavors and freshness to meet diverse culinary and commercial needs.',
    image: '/general-trading.jpg',
  },
]

const stats = [
  { number: '200+', label: 'Clients Served', icon: 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M12 14a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8' },
  { number: '98%', label: 'Client Satisfaction', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
  { number: '15+', label: 'Years Experience', icon: 'M12 8v4l3 3 M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z' },
  { number: '50M+', label: 'Revenue Generated', icon: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M13 2v7h7 M9 15l2-2 2 2 4-4' },
]

const partnerLogos = [
  '549544db-680f-48e5-9b29-0d1ec597ad05.png',
  '657e7a7e-7691-42f3-bc9f-4b3f8c2ae0fb.png',
  '6d14c8ac-1c65-46ae-8b00-dafaf2f1f5ab.png',
  '72232f62-0c9c-4f47-838d-9ae09b6b63ab.png',
  'a6f5d71a-3e0f-407a-b48e-d3443918b5f0.png',
  'a8003c87-93b9-4a36-857f-7d4d3522462b.png',
  'b4382346-8be6-456a-8829-979b1106f60e.png',
  'ce04a61a-f46b-429b-b8f6-1e0761e930df.png',
  'eeae368f-9322-4995-9c91-c19596d91301.png',
  'Untitled design (1).png',
  '76.png',
]

const base = '/Channel Partners logo/'

function PartnerCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsPerSlide, setItemsPerSlide] = useState(5)
  const touchStartX = useRef(0)
  const total = partnerLogos.length

  useEffect(() => {
    const update = () => setItemsPerSlide(window.innerWidth <= 768 ? 2 : 5)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback((e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
  }, [next, prev])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  const visible = []
  for (let i = 0; i < itemsPerSlide; i++) {
    const idx = (current + i) % total
    visible.push({ name: partnerLogos[idx], index: idx })
  }

  return (
    <div className="container">
      <div className="partner-header">
        <div className="partner-header-lines">
          <span className="partner-line" />
          <span className="partner-badge">Our Network</span>
          <span className="partner-line" />
        </div>
        <h2 className="partner-title">Authorized Channel Partners</h2>
        <p className="partner-desc">
          Formally aligned with leading UAE government departments and legal entities to deliver unmatched excellence, strict regulatory compliance, and secure corporate solutions.
        </p>
      </div>

      <div
        className="partner-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button onClick={prev} className="partner-arrow partner-arrow--left" aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button onClick={next} className="partner-arrow partner-arrow--right" aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="partner-grid">
          {visible.slice(0, itemsPerSlide).map((logo, i) => (
            <LogoCard key={`${logo.name}-${logo.index}`} name={logo.name} isActive={i === 0} />
          ))}
        </div>

        <div className="partner-dots">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`partner-dot ${i === current ? 'partner-dot--active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function LogoCard({ name, isActive }) {
  return (
    <div className={`partner-logo-card ${isActive ? 'partner-logo-card--active' : ''}`}>
      <div className="partner-logo-inner">
        <img src={`${base}${name}`} alt="Channel Partner" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <SEO title="Home" description="Venturis Partners — leading business consultancy in Dubai, UAE. Strategic management, IT solutions, e-commerce, and business growth services." keywords={['business consultancy Dubai', 'management consulting UAE', 'IT companies in Dubai']} />
      <section className="hero">
        <div className="hero-overlay"></div>
        <video
          className="hero-video"
          src="/Hero%20Section%20of%20homepage.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="container hero-content">
          <div className="hero-card">
            <div className="hero-accent-line"></div>
            <span className="hero-tag">Trusted Business Partner</span>
            <h1 className="hero-title">
              Transform Your Business<br />
              <span className="hero-highlight">With Strategic Excellence</span>
            </h1>
            <p className="hero-desc">
              We help businesses navigate complexity, drive growth, and achieve
              sustainable success through innovative strategies and actionable insights.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Explore Services
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-primary-navy">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={stat.icon} />
                  </svg>
                </div>
                <span className="stat-number"><AnimatedCounter end={stat.number} /></span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <div className="about-wrap">
            <div className="about-visual">
              <div className="about-image-frame">
                <img src="/43%20(1).jpg" alt="About Venturis Partners" className="about-img" />
              </div>
              <div className="about-experience">
                <span className="about-exp-number">15+</span>
                <span className="about-exp-label">Years of Excellence</span>
              </div>
            </div>
            <div className="about-info">
              <span className="about-info-tag">About Venturis Partners</span>
              <h2 className="about-info-title">Building Strategic Partnerships for Sustainable Growth</h2>
              <p className="about-info-desc">
                We connect businesses, investors, and industry leaders to unlock opportunities that foster growth, innovation, and long-term value. Through strategic partnerships and market expertise, we help organizations overcome challenges and achieve sustainable success.
              </p>
              <div className="about-info-features">
                <div className="about-feature">
                  <span className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Strategic Advisory</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Market Intelligence</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Growth Capital</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Strategic Partnerships</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Business Transformation</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <span>Investment Solutions</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Discover More
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-home-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions tailored to your unique business challenges
              and opportunities.
            </p>
          </div>
          <div className="home-services-grid">
            {services.map((s, i) => (
              <div key={i} className="home-service-card">
                <div className="home-service-image">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <div className="home-service-body">
                  <div className="home-service-accent"></div>
                  <h3 className="home-service-title">{s.title}</h3>
                  <p className="home-service-desc">{s.desc}</p>
                  <Link to="/services" className="home-service-link">
                    <span>Explore Service</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="services-btn-wrap">
            <Link to="/services" className="btn btn-services-gradient">
              Explore Our Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="partner-section">
        <PartnerCarousel />
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-desc">
              Let&apos;s discuss how we can help you achieve your goals and unlock
              your full potential.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <PaymentMethodsCarousel />
    </>
  )
}
