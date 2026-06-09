import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Careers.css'

const divisions = [
  { value: '', label: 'Select Division' },
  { value: 'interiors', label: 'Venturis Interiors' },
  { value: 'facilities', label: 'Venturis Facilities' },
  { value: 'realtors', label: 'Venturis Realtors' },
  { value: 'partners', label: 'Venturis Partners' },
  { value: 'wheels', label: 'Venturis Wheels' },
  { value: 'tourism', label: 'Venturis Tourism' },
  { value: 'corporate', label: 'Corporate / Administration' },
]

const positions = [
  { value: '', label: 'Select Position' },
  { value: 'project-manager', label: 'Project Manager' },
  { value: 'interior-designer', label: 'Interior Designer' },
  { value: 'architect', label: 'Architect' },
  { value: 'real-estate-agent', label: 'Real Estate Agent' },
  { value: 'facility-manager', label: 'Facility Manager' },
  { value: 'business-development', label: 'Business Development Executive' },
  { value: 'marketing', label: 'Marketing Specialist' },
  { value: 'accountant', label: 'Accountant / Finance' },
  { value: 'hr', label: 'HR Executive' },
  { value: 'admin', label: 'Administrative Assistant' },
  { value: 'driver', label: 'Driver' },
  { value: 'other', label: 'Other' },
]

const employmentTypes = [
  { value: 'full-time', label: 'Full-Time' },
  { value: 'part-time', label: 'Part-Time' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
  { value: 'remote', label: 'Remote' },
]

const hearAbout = [
  { value: '', label: 'Select' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'indeed', label: 'Indeed' },
  { value: 'company-website', label: 'Company Website' },
  { value: 'referral', label: 'Employee Referral' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'recruitment-agency', label: 'Recruitment Agency' },
  { value: 'job-portal', label: 'Job Portal' },
  { value: 'other', label: 'Other' },
]

const qualifications = [
  { value: '', label: 'Select Qualification' },
  { value: 'high-school', label: 'High School / Secondary' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'bachelors', label: "Bachelor's Degree" },
  { value: 'masters', label: "Master's Degree" },
  { value: 'phd', label: 'PhD / Doctorate' },
  { value: 'professional', label: 'Professional Certification' },
  { value: 'other', label: 'Other' },
]

const benefits = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Work-Life Balance',
    description: 'Flexible working hours and hybrid work options to help you maintain a healthy work-life balance.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Growth Opportunities',
    description: 'Continuous learning, professional development programs, and clear career progression paths.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Collaborative Culture',
    description: 'Work alongside talented professionals in a supportive and innovative team environment.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Comprehensive Benefits',
    description: 'Competitive salary, health insurance, annual bonuses, and additional perks for eligible employees.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Exposure',
    description: 'Work on international projects and gain exposure to diverse markets across the UAE and beyond.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Innovation & Technology',
    description: 'Access to cutting-edge tools, software, and technologies to excel in your role.',
  },
]

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`careers-animated ${visible ? 'careers-animated--visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

function CountUp({ end, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 2000
          const step = Math.ceil(end / (duration / 16))
          const timer = setInterval(() => {
            start += step
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 16)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="careers-stat-item">
      <div className="careers-stat-number">{count}{suffix}</div>
      <div className="careers-stat-label">{label}</div>
    </div>
  )
}

function FieldIcon({ icon }) {
  return <span className="careers-field-icon">{icon}</span>
}

function SelectArrow() {
  return (
    <span className="careers-field-select-arrow">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  )
}

export default function Careers() {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', address: '', position: '', division: '',
    experience: '', currentCompany: '', currentRole: '', qualification: '',
    fieldOfStudy: '', institution: '', coverLetter: '', linkedinUrl: '',
    portfolioUrl: '', employmentType: 'full-time', startDate: '', hearAbout: '',
  })
  const [status, setStatus] = useState({ type: '', text: '' })
  const [submitting, setSubmitting] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  const formRef = useRef(null)

  function handleChange(e) {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setResumeFile(files[0])
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', text: '' })
    try {
      let resumeData = null
      if (resumeFile) {
        resumeData = await new Promise((resolve) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result)
          reader.readAsDataURL(resumeFile)
        })
      }

      const res = await fetch('/send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          type: 'career',
          resumeData,
          resumeFileName: resumeFile?.name || null,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus({
          type: 'success',
          text: 'Thank you for your application! We have received your details and our HR team will review them shortly.',
        })
        setForm({
          fullName: '', email: '', phone: '', address: '', position: '', division: '',
          experience: '', currentCompany: '', currentRole: '', qualification: '',
          fieldOfStudy: '', institution: '', coverLetter: '', linkedinUrl: '',
          portfolioUrl: '', employmentType: 'full-time', startDate: '', hearAbout: '',
        })
        setResumeFile(null)
        if (formRef.current) {
          const fileInput = formRef.current.querySelector('input[type=file]')
          if (fileInput) fileInput.value = ''
        }
      } else {
        setStatus({ type: 'error', text: data.message || 'Something went wrong. Please try again later.' })
      }
    } catch {
      setStatus({ type: 'error', text: 'Network error. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Careers at Venturis Partners | Join Our Team"
        description="Explore career opportunities at Venturis Partners. Join a dynamic team across our divisions — Interiors, Facilities, Realtors, Partners, Wheels, and Tourism. Apply online today."
        keywords={['careers Venturis Partners', 'jobs Dubai', 'Venturis careers', 'UAE jobs', 'business consultancy careers Dubai', 'management jobs UAE']}
      />

      {/* ============ HERO ============ */}
      <section className="careers-hero">
        <div className="careers-hero-bg" />
        <div className="container careers-hero-content">
          <Link to="/" className="careers-hero-breadcrumb">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="careers-hero-label">
            <span className="careers-hero-label-line" />
            <span className="careers-hero-label-text">Careers</span>
            <span className="careers-hero-label-line" />
          </div>

          <h1 className="careers-hero-title">
            Join Venturis Team
          </h1>

          <p className="careers-hero-desc">
            Discover your potential and build a rewarding career with a diverse portfolio of opportunities across our dynamic divisions.
          </p>

          <div className="careers-hero-actions">
            <a href="#application-form" className="btn btn-primary">
              Apply Now
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#benefits" className="btn-outline">
              Why Join Us
            </a>
          </div>
        </div>

        <div className="careers-scroll-indicator">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="careers-stats">
        <div className="container">
          <AnimatedSection>
            <div className="careers-stats-card">
              <div className="careers-stats-grid">
                <CountUp end={6} suffix="+" label="Divisions" />
                <CountUp end={50} suffix="+" label="Team Members" />
                <CountUp end={15} suffix="+" label="Nationalities" />
                <CountUp end={200} suffix="+" label="Projects Delivered" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ WHY JOIN US ============ */}
      <section id="benefits" className="careers-benefits">
        <div className="container">
          <AnimatedSection>
            <div className="careers-section-header">
              <div className="careers-section-header-accent">
                <span className="line" />
                <span className="careers-section-header-tag">Why Join Us</span>
                <span className="line" />
              </div>
              <h2>
                More Than a Job,{' '}
                <span className="highlight">a Career</span>
              </h2>
              <p>
                At Venturis Partners, we invest in our people. Here&apos;s what you can expect when you join our team.
              </p>
            </div>
          </AnimatedSection>

          <div className="careers-benefits-grid">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={i}>
                <div className="careers-benefit-card">
                  <div className="careers-benefit-card-glow" />
                  <div className="careers-benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OPEN POSITIONS ============ */}
      <section id="open-positions" className="careers-positions">
        <div className="container">
          <AnimatedSection>
            <div className="careers-section-header">
              <div className="careers-section-header-accent">
                <span className="line" />
                <span className="careers-section-header-tag">Open Positions</span>
                <span className="line" />
              </div>
              <h2>Current Openings</h2>
              <p>
                Explore our current vacancies and find the role that matches your skills and aspirations.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="careers-empty-card">
              <div className="careers-empty-card-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>No Open Positions at the Moment</h3>
              <p>
                We don&apos;t have any active vacancies right now, but we&apos;re always on the lookout for talented individuals.
                Feel free to submit your application and we&apos;ll keep your resume on file for future opportunities.
              </p>
              <a href="#application-form" className="btn btn-primary">
                Submit Your Application
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ APPLICATION FORM ============ */}
      <section id="application-form" className="careers-form-section">
        <div className="container">
          <AnimatedSection>
            <div className="careers-section-header">
              <div className="careers-section-header-accent">
                <span className="line" />
                <span className="careers-section-header-tag">Apply Now</span>
                <span className="line" />
              </div>
              <h2>
                Submit Your{' '}
                <span className="highlight">Application</span>
              </h2>
              <p>
                Take the first step towards joining our team. Fill out the form below and our HR team will review your application.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="careers-form-wrapper">
              <div className="careers-form-glow" />
              <div className="careers-form-glow careers-form-glow--br" />
              <div className="careers-form-card">
                <div className="careers-form-card-inner">
                  {/* Progress Steps */}
                  <div className="careers-form-progress">
                    {[
                      { id: 1, label: 'Personal Info' },
                      { id: 2, label: 'Position' },
                      { id: 3, label: 'Experience' },
                      { id: 4, label: 'Education' },
                      { id: 5, label: 'Resume' },
                      { id: 6, label: 'Cover Letter' },
                    ].map((s, i, arr) => (
                      <div key={s.id} className="careers-progress-step">
                        <div className="careers-progress-number">
                          <span>{s.id}</span>
                        </div>
                        <span className="careers-progress-label">{s.label}</span>
                        {i < arr.length - 1 && <div className="careers-progress-line" />}
                      </div>
                    ))}
                  </div>

                  {status.text && (
                    <div className={`careers-form-status careers-form-status--${status.type}`}>
                      {status.type === 'success' ? (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      <span>{status.text}</span>
                    </div>
                  )}

                  <form ref={formRef} className="careers-form" onSubmit={handleSubmit}>
                    {/* Section 1 - Personal Info */}
                    <div className="careers-form-section-block">
                      <div className="careers-form-section-header">
                        <div className="careers-form-section-number">
                          <span>1</span>
                        </div>
                        <div className="careers-form-section-info">
                          <h3>Personal Information</h3>
                          <p>Your basic contact details</p>
                        </div>
                      </div>
                      <div className="careers-field-grid careers-field-grid--2">
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="fullName">
                            Full Name <span className="careers-field-required">*</span>
                          </label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            } />
                            <input
                              type="text" id="fullName" name="fullName" required
                              value={form.fullName} onChange={handleChange}
                              placeholder="John Doe"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="email">
                            Email Address <span className="careers-field-required">*</span>
                          </label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            } />
                            <input
                              type="email" id="email" name="email" required
                              value={form.email} onChange={handleChange}
                              placeholder="john@company.com"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="phone">
                            Phone Number <span className="careers-field-required">*</span>
                          </label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            } />
                            <input
                              type="tel" id="phone" name="phone" required
                              value={form.phone} onChange={handleChange}
                              placeholder="+971 58 531 8860"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="address">Current Address</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            } />
                            <input
                              type="text" id="address" name="address"
                              value={form.address} onChange={handleChange}
                              placeholder="Dubai, UAE"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2 - Position Details */}
                    <div className="careers-form-section-block">
                      <div className="careers-form-section-header">
                        <div className="careers-form-section-number">
                          <span>2</span>
                        </div>
                        <div className="careers-form-section-info">
                          <h3>Position Details</h3>
                          <p>Tell us about the role you&apos;re interested in</p>
                        </div>
                      </div>
                      <div className="careers-field-grid careers-field-grid--2">
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="position">
                            Position Applying For <span className="careers-field-required">*</span>
                          </label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            } />
                            <select
                              id="position" name="position" required
                              value={form.position} onChange={handleChange}
                              className="careers-field-input careers-field-select"
                            >
                              {positions.map((p) => (
                                <option key={p.value} value={p.value} disabled={p.value === ''}>
                                  {p.label}
                                </option>
                              ))}
                            </select>
                            <SelectArrow />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="division">
                            Division / Department <span className="careers-field-required">*</span>
                          </label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            } />
                            <select
                              id="division" name="division" required
                              value={form.division} onChange={handleChange}
                              className="careers-field-input careers-field-select"
                            >
                              {divisions.map((d) => (
                                <option key={d.value} value={d.value} disabled={d.value === ''}>
                                  {d.label}
                                </option>
                              ))}
                            </select>
                            <SelectArrow />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="employmentType">
                            Employment Type <span className="careers-field-required">*</span>
                          </label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            } />
                            <select
                              id="employmentType" name="employmentType" required
                              value={form.employmentType} onChange={handleChange}
                              className="careers-field-input careers-field-select"
                            >
                              {employmentTypes.map((t) => (
                                <option key={t.value} value={t.value}>{t.label}</option>
                              ))}
                            </select>
                            <SelectArrow />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="startDate">Available Start Date</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            } />
                            <input
                              type="date" id="startDate" name="startDate"
                              value={form.startDate} onChange={handleChange}
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3 - Work Experience */}
                    <div className="careers-form-section-block">
                      <div className="careers-form-section-header">
                        <div className="careers-form-section-number">
                          <span>3</span>
                        </div>
                        <div className="careers-form-section-info">
                          <h3>Work Experience</h3>
                          <p>Your professional background</p>
                        </div>
                      </div>
                      <div className="careers-field-grid careers-field-grid--2">
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="experience">Years of Experience</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            } />
                            <input
                              type="number" id="experience" name="experience"
                              min="0" max="50"
                              value={form.experience} onChange={handleChange}
                              placeholder="5"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="currentCompany">Current / Last Company</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            } />
                            <input
                              type="text" id="currentCompany" name="currentCompany"
                              value={form.currentCompany} onChange={handleChange}
                              placeholder="Company name"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="currentRole">Current / Last Job Title</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            } />
                            <input
                              type="text" id="currentRole" name="currentRole"
                              value={form.currentRole} onChange={handleChange}
                              placeholder="Senior Designer"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 4 - Education */}
                    <div className="careers-form-section-block">
                      <div className="careers-form-section-header">
                        <div className="careers-form-section-number">
                          <span>4</span>
                        </div>
                        <div className="careers-form-section-info">
                          <h3>Education</h3>
                          <p>Your academic background</p>
                        </div>
                      </div>
                      <div className="careers-field-grid careers-field-grid--2">
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="qualification">
                            Highest Qualification <span className="careers-field-required">*</span>
                          </label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              </svg>
                            } />
                            <select
                              id="qualification" name="qualification" required
                              value={form.qualification} onChange={handleChange}
                              className="careers-field-input careers-field-select"
                            >
                              {qualifications.map((q) => (
                                <option key={q.value} value={q.value} disabled={q.value === ''}>
                                  {q.label}
                                </option>
                              ))}
                            </select>
                            <SelectArrow />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="fieldOfStudy">Field of Study</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            } />
                            <input
                              type="text" id="fieldOfStudy" name="fieldOfStudy"
                              value={form.fieldOfStudy} onChange={handleChange}
                              placeholder="Business Administration"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="institution">Institution</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            } />
                            <input
                              type="text" id="institution" name="institution"
                              value={form.institution} onChange={handleChange}
                              placeholder="University name"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 5 - Resume & Links */}
                    <div className="careers-form-section-block">
                      <div className="careers-form-section-header">
                        <div className="careers-form-section-number">
                          <span>5</span>
                        </div>
                        <div className="careers-form-section-info">
                          <h3>Resume &amp; Links</h3>
                          <p>Upload your CV and share your professional profiles</p>
                        </div>
                      </div>
                      <div className="careers-field-grid">
                        <div className="careers-field-full">
                          <label className="careers-field-label">
                            Upload Resume / CV <span className="careers-field-required">*</span>
                          </label>
                          <div className="careers-field-file">
                            <input
                              type="file" id="resume" name="resume" required
                              accept=".pdf,.doc,.docx,.jpg,.png"
                              onChange={handleChange}
                            />
                            <div className="careers-field-file-icon">
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                            </div>
                            <p className="careers-field-file-text">
                              <strong>Click to upload</strong> or drag and drop
                            </p>
                            <p className="careers-field-file-hint">PDF, DOC, DOCX, JPG, PNG &mdash; Max 10MB</p>
                            {resumeFile && (
                              <span className="careers-field-file-name">
                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {resumeFile.name}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="linkedinUrl">LinkedIn Profile URL</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                              </svg>
                            } />
                            <input
                              type="url" id="linkedinUrl" name="linkedinUrl"
                              value={form.linkedinUrl} onChange={handleChange}
                              placeholder="https://linkedin.com/in/username"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="portfolioUrl">Portfolio / Website URL</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                            } />
                            <input
                              type="url" id="portfolioUrl" name="portfolioUrl"
                              value={form.portfolioUrl} onChange={handleChange}
                              placeholder="https://yourportfolio.com"
                              className="careers-field-input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 6 - Cover Letter */}
                    <div className="careers-form-section-block">
                      <div className="careers-form-section-header">
                        <div className="careers-form-section-number">
                          <span>6</span>
                        </div>
                        <div className="careers-form-section-info">
                          <h3>Cover Letter &amp; Additional Info</h3>
                          <p>Tell us more about yourself</p>
                        </div>
                      </div>
                      <div className="careers-field-grid">
                        <div className="careers-field careers-field-full">
                          <label className="careers-field-label" htmlFor="coverLetter">Cover Letter / Message</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                              </svg>
                            } />
                            <textarea
                              id="coverLetter" name="coverLetter" rows={6}
                              value={form.coverLetter} onChange={handleChange}
                              placeholder="Tell us why you&apos;d be a great fit for this role..."
                              className="careers-field-input careers-field-textarea"
                            />
                          </div>
                        </div>
                        <div className="careers-field">
                          <label className="careers-field-label" htmlFor="hearAbout">How did you hear about us?</label>
                          <div className="careers-field-input-wrap">
                            <FieldIcon icon={
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            } />
                            <select
                              id="hearAbout" name="hearAbout"
                              value={form.hearAbout} onChange={handleChange}
                              className="careers-field-input careers-field-select"
                            >
                              {hearAbout.map((h) => (
                                <option key={h.value} value={h.value} disabled={h.value === ''}>
                                  {h.label}
                                </option>
                              ))}
                            </select>
                            <SelectArrow />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="careers-form-submit">
                      <div className="careers-form-agree">
                        <input type="checkbox" id="agree" required />
                        <label htmlFor="agree">
                          I confirm that the information provided is accurate and complete. I agree to the{' '}
                          <a href="#">Privacy Policy</a> and consent to Venturis Partners processing my personal data
                          for recruitment purposes. <span className="careers-field-required">*</span>
                        </label>
                      </div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="careers-form-submit-btn"
                      >
                        <span className="careers-form-submit-btn-content">
                          {submitting ? (
                            <>
                              <svg className="careers-spinner" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Submitting Application...
                            </>
                          ) : (
                            <>
                              Submit Application
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="careers-cta">
        <div className="container">
          <AnimatedSection>
            <div className="careers-section-header-accent">
              <span className="line" />
              <span className="careers-section-header-tag">Get in Touch</span>
              <span className="line" />
            </div>
            <h2>
              Questions About Your{' '}
              <span className="highlight">Application?</span>
            </h2>
            <p>
              Our HR team is here to help. Reach out to us with any questions about the application process or career opportunities.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact HR Team
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
