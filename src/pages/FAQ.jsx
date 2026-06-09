import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './FAQ.css'

const faqData = [
  {
    q: 'What industries do you serve?',
    a: 'We serve a wide range of industries including finance, healthcare, technology, manufacturing, retail, and professional services. Our methodologies are adaptable to virtually any sector.',
  },
  {
    q: 'How long does a typical engagement last?',
    a: 'Engagements vary based on scope and complexity. Typical projects range from 4-12 weeks. We also offer retainers for ongoing strategic support.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer flexible pricing including fixed-fee projects, hourly consulting, and retainer-based engagements. We\'ll work with you to find a model that fits your budget and needs.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Absolutely. We work with businesses of all sizes, from early-stage startups to Fortune 500 companies. Our solutions are tailored to your specific scale and growth stage.',
  },
  {
    q: 'How do you measure success?',
    a: 'We establish clear KPIs at the outset of every engagement. Success is measured against these metrics, which may include revenue growth, cost savings, market share, operational efficiency, and more.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Yes. We collaborate closely with your internal teams to ensure knowledge transfer and sustainable results. Our approach is highly collaborative.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <>
      <SEO title="FAQ" description="Frequently asked questions about Venturis Partners — services, pricing, industries, and engagement process. Get answers to common queries." keywords={['Venturis Partners FAQ', 'business consultancy questions', 'Dubai consulting FAQ', 'UAE business services']} />
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="section-tag">FAQ</span>
          <h1 className="page-hero-title">Frequently Asked Questions</h1>
          <p className="page-hero-desc">
            Everything you need to know about working with Venturis Partners.
          </p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="faq-list">
            {faqData.map((item, i) => (
              <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFAQ(i)}>
                  <span className="faq-q-number">0{i + 1}</span>
                  <span className="faq-q-text">{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`faq-arrow ${openIndex === i ? 'rotated' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className="faq-answer" style={{ maxHeight: openIndex === i ? '300px' : '0' }}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <div className="faq-cta-icon">
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8m-4-4v8" />
              </svg>
            </div>
            <h3>Still have questions?</h3>
            <p>We&apos;re here to help. Reach out to us anytime.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
