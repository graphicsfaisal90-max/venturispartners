import { useState, useRef, useEffect } from 'react'
import './AIChatbot.css'

const faqs = [
  {
    keywords: ['who are you', 'tell me about', 'about venturis', 'company', 'overview', 'background'],
    answer: 'Venturis Partners is a premier business consultancy based in Dubai, UAE, with an additional office in Jacksonville, Florida, USA. We deliver excellence across Management Consulting, IT Solutions, E-Commerce & Trading, and comprehensive Business Advisory services. Our mission is to empower businesses with strategic insights and innovative solutions for sustainable growth. You can explore the full breakdown of our services directly on our website.'
  },
  {
    keywords: ['mission', 'vision', 'goal', 'objective', 'values'],
    answer: 'Our mission is to empower businesses with strategic insights and innovative solutions for sustainable growth. We operate with integrity, innovation, and an unwavering commitment to quality across all our services.'
  },
  {
    keywords: ['service', 'offer', 'provide', 'do', 'solutions'],
    answer: 'Venturis Partners offers four main service pillars:\n\n1) Management Consulting — Marketing management, business registration, business center services, strategic frameworks\n2) Venturis Tech — IT solutions, software development, cloud computing, cybersecurity\n3) E-Commerce & Trading — Online store setup, general trading in electronics, spices, recyclables, precious metals\n4) Business Consultancy — Financial, corporate, mortgage, client, documentation, and comprehensive advisory\n\nVisit our Services page to explore each pillar in detail.'
  },
  {
    keywords: ['management service', 'marketing management'],
    answer: 'Our Management Consulting division provides:\n- Marketing Management Services (advertising campaigns, social media, infographics, email marketing, whitepapers, blog writing)\n- Business Registration (4-step process)\n- Business Center Services (registration & construction)\n- 360° Structuring Ecosystem\n- Strategic Business Framework\n- Strategic Marketing Process\n\nYou can view the full breakdown directly on our website.'
  },
  {
    keywords: ['venturis tech', 'it solution', 'software', 'technology', 'digital', 'tech service'],
    answer: 'Venturis Tech delivers IT solutions including custom software development, cloud computing services, cybersecurity solutions, digital transformation consulting, and IT infrastructure management. We help businesses leverage technology for operational excellence.'
  },
  {
    keywords: ['ecommerce', 'e-commerce', 'trading', 'trade', 'online store'],
    answer: 'Our E-Commerce & Trading division handles end-to-end online store setup, digital sales channel development, and general trading. We trade in electronics, spices, recyclable materials, and precious metals (gold, silver). We also offer cryptocurrency trading solutions.'
  },
  {
    keywords: ['consultancy', 'advisory', 'business consult'],
    answer: 'Our Business Consultancy covers six specialized areas:\n- Financial Consultancy\n- Corporate Consultancy\n- Mortgage Consultancy\n- Client Consultancy\n- Documentation Consultancy\n- Comprehensive Consultancy\n\nEach service is tailored to specific business needs. You can explore detailed information on our website.'
  },
  {
    keywords: ['financial consultancy', 'financial advisory', 'finance'],
    answer: 'Financial Consultancy covers financial planning, investment advisory, risk management, financial analysis, and strategic financial guidance to help businesses optimize their financial performance.'
  },
  {
    keywords: ['corporate consultancy', 'corporate advisory', 'corporate strategy'],
    answer: 'Corporate Consultancy provides corporate strategy development, governance frameworks, business restructuring, organizational development, and operational excellence advisory.'
  },
  {
    keywords: ['mortgage consultancy', 'mortgage', 'home financing', 'property loan', 'real estate'],
    answer: 'Mortgage Consultancy offers expert guidance on home financing, property loans, mortgage advisory, and real estate financial solutions for individuals and businesses.'
  },
  {
    keywords: ['client consultancy', 'client', 'customer experience', 'crm'],
    answer: 'Client Consultancy focuses on customer experience optimization, client acquisition strategies, retention solutions, and CRM implementation to enhance business relationships.'
  },
  {
    keywords: ['documentation consultancy', 'documentation', 'compliance', 'regulatory', 'legal document'],
    answer: 'Documentation Consultancy handles legal documentation, regulatory filings, compliance services, and business documentation to ensure your operations meet all legal requirements.'
  },
  {
    keywords: ['comprehensive consultancy', 'end to end', 'full service'],
    answer: 'Comprehensive Consultancy provides end-to-end business advisory from setup to scaling — covering strategy, operations, compliance, growth planning, and ongoing support.'
  },
  {
    keywords: ['location', 'office', 'address', 'dubai', 'where', 'find'],
    answer: 'Head Office: 5th Floor Al Saqr Tower, Sheikh Zayed Road, Dubai, UAE. US Office: 6501 Arlington Expressway, B105 #7330, Jacksonville, FL 32211, United States. Please book an appointment before visiting our US office.'
  },
  {
    keywords: ['phone', 'call', 'contact', 'reach', 'telephone', 'number'],
    answer: 'You can call us at +971 58 531 8860 (Dubai) or +1 (904) 6550900 (US). For general inquiries, email info@venturispartners.com. You can also chat with us on WhatsApp at +971 58 531 8860.'
  },
  {
    keywords: ['email', 'mail', 'send email'],
    answer: 'Send us an email at info@venturispartners.com and our team will get back to you within 24 hours.'
  },
  {
    keywords: ['whatsapp', 'whats app', 'chat'],
    answer: 'You can chat with us on WhatsApp at +971 58 531 8860. Click the WhatsApp button on this page to start a conversation with our team.'
  },
  {
    keywords: ['price', 'cost', 'pricing', 'fee', 'charges', 'rate', 'package', 'plan'],
    answer: 'We offer flexible pricing models including fixed-fee projects, hourly consulting, and retainer-based engagements. Each solution is customized to your specific requirements. Contact us for a tailored quote.'
  },
  {
    keywords: ['industry', 'sector', 'serve', 'client type', 'who do you'],
    answer: 'We serve a diverse range of industries including finance, healthcare, technology, manufacturing, retail, real estate, and professional services. Our methodologies are adaptable to virtually any sector.'
  },
  {
    keywords: ['startup', 'small business', 'size', 'company size', 'enterprise'],
    answer: 'Absolutely! We work with businesses of all sizes — from early-stage startups and SMEs to large enterprises and Fortune 500 companies. Our solutions are tailored to your specific scale, budget, and growth stage.'
  },
  {
    keywords: ['time', 'how long', 'duration', 'engagement', 'project', 'timeline'],
    answer: 'Typical engagements range from 4-12 weeks depending on scope and complexity. We also offer ongoing retainer-based support for continuous strategic guidance.'
  },
  {
    keywords: ['team', 'who works', 'leadership', 'management team', 'founder'],
    answer: 'Our team comprises experienced professionals across management consulting, IT, finance, and business strategy. We have experts in Dubai and Jacksonville working together to deliver global-standard solutions. Visit our About page to meet our leadership team.'
  },
  {
    keywords: ['career', 'job', 'vacancy', 'hiring', 'employment', 'work with us'],
    answer: 'We are always looking for talented professionals. Please send your CV and cover letter to info@venturispartners.com with the subject line "Career Application". We will review and get back to you.'
  },
  {
    keywords: ['partner', 'partnership', 'collaborate', 'channel partner', 'authorized partner'],
    answer: 'Our Network & Authorized Channel Partners program includes collaborations with leading organizations across various industries. We are always open to strategic partnerships. Contact us to discuss potential collaboration opportunities.'
  },
  {
    keywords: ['process', 'how it works', 'methodology', 'approach', 'step'],
    answer: 'Our engagement follows a structured 4-phase approach:\n\n1) Discovery & Assessment — Understanding your business, challenges, and goals\n2) Strategy Development — Creating tailored solutions\n3) Implementation — Executing the plan with your team\n4) Review & Optimize — Measuring results and refining for continuous improvement\n\nFor a deeper dive into each phase, we encourage you to explore our website.'
  },
  {
    keywords: ['payment', 'pay', 'mode of payment', 'bank', 'transfer'],
    answer: 'We accept bank transfers and other standard payment methods. Payment terms are discussed and agreed upon during the engagement contract phase. Contact us for specific details.'
  },
  {
    keywords: ['guarantee', 'satisfaction', 'refund', 'money back'],
    answer: 'We are committed to delivering measurable results. We establish clear KPIs at the outset of every engagement to ensure alignment with your business objectives. Contact us to discuss specific terms.'
  },
  {
    keywords: ['testimonial', 'review', 'client say', 'feedback', 'case study'],
    answer: 'Our clients across finance, healthcare, technology, and retail sectors have benefited from our strategic consulting. Visit our website to learn more about our success stories and client experiences.'
  },
  {
    keywords: ['difference', 'why choose', 'unique', 'better than', 'usp'],
    answer: 'What sets Venturis Partners apart:\n\n1) Comprehensive service portfolio under one roof\n2) Deep expertise across multiple industries\n3) Tailored solutions for businesses of all sizes\n4) Strategic locations in Dubai and the US\n5) Commitment to measurable results and long-term partnerships\n\nWe invite you to explore our website to learn more about what makes us different.'
  },
  {
    keywords: ['international', 'global', 'outside uae', 'worldwide', 'overseas'],
    answer: 'Yes! While our headquarters is in Dubai, UAE, we serve clients globally. Our US office in Jacksonville, Florida allows us to support North American clients. We have experience working with international businesses across multiple continents.'
  },
  {
    keywords: ['business setup', 'company formation', 'registration', 'license', 'dubai business'],
    answer: 'Our Business Registration service covers the complete 4-step process for setting up your business in Dubai. We guide you through company formation, licensing, legal documentation, and operational setup to ensure a smooth launch.'
  },
  {
    keywords: ['business center', 'business center service', 'registration service', 'construction service'],
    answer: 'Our Business Center Services include Registration Services (company incorporation, licensing, visa processing, PRO services) and Construction Services (project management, contractor coordination, compliance, quality assurance).'
  },
  {
    keywords: ['structuring', '360 ecosystem', 'business structuring', 'restructuring'],
    answer: 'Our 360° Structuring Ecosystem provides comprehensive Business Structuring (organizational design, legal structure optimization, governance setup) and Restructuring services (operational turnaround, cost optimization, process reengineering) to ensure your business operates at peak efficiency.'
  },
  {
    keywords: ['strategic framework', 'business framework', 'strategy'],
    answer: 'Our Strategic Business Framework is a 4-step process delivered in a 2x2 format: Analyze, Strategize, Implement, and Optimize. Each quadrant includes clear action items and deliverables to drive your business forward.'
  },
  {
    keywords: ['marketing process', 'strategic marketing'],
    answer: 'Our Strategic Marketing Process is a 4-step methodology: Market Research & Insights, Brand Strategy & Positioning, Campaign Execution & Management, and Performance Analysis & Optimization — designed to maximize your marketing ROI.'
  },
  {
    keywords: ['logo', 'branding', 'brand identity'],
    answer: 'Our brand identity is built on professionalism, innovation, and trust. The Venturis Partners logo reflects our commitment to excellence. We also offer branding and graphics design services as part of our marketing management solutions.'
  },
  {
    keywords: ['social media', 'facebook', 'instagram', 'linkedin', 'tiktok', 'telegram', 'youtube'],
    answer: 'Follow Venturis Partners on Facebook, Instagram, LinkedIn, TikTok, Telegram, and YouTube. Connect with us to stay updated on our latest insights, services, and company news.'
  },
  {
    keywords: ['appointment', 'visit', 'meeting', 'book', 'schedule'],
    answer: 'We welcome visits to our Dubai office. For our US office in Jacksonville, please book an appointment before visiting. You can schedule a meeting by calling +971 58 531 8860 or emailing info@venturispartners.com.'
  },
  {
    keywords: ['support', 'after sales', 'post service', 'follow up'],
    answer: 'Our relationship doesn\'t end with project completion. We provide ongoing support, follow-up consultations, and performance reviews to ensure sustained success. Retainer packages are available for continuous support.'
  },
]

function getResponse(input) {
  const lower = input.toLowerCase()
  for (const faq of faqs) {
    if (faq.keywords.some(k => lower.includes(k))) {
      return faq.answer
    }
  }
  return null
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Welcome to Venturis Partners. I\'m your dedicated AI Support Assistant, here to guide you through our services — from Management Consulting and Business Registration to Strategic Frameworks and Corporate Advisory. How may I assist you today?' }
  ])
  const [input, setInput] = useState('')
  const chatRef = useRef(null)

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    const text = input.trim()
    if (!text) return

    setMessages(prev => [...prev, { role: 'user', text }])
    setInput('')

    const reply = getResponse(text)
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: reply || 'I want to ensure you get the most accurate assistance for this specific query. Please allow me to connect you with our specialized team members, or you can contact us directly to discuss this further.' }])
    }, 400)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      <button className={`ai-chat-btn ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label="AI Support">
        {open ? (
          <svg className="ai-chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="ai-chat-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM7.5 13A1.5 1.5 0 106 14.5 1.5 1.5 0 007.5 13zm9 0A1.5 1.5 0 1015 14.5 1.5 1.5 0 0016.5 13zM12 15c-1.5 0-2.5.5-3 1.5h6c-.5-1-1.5-1.5-3-1.5z" />
          </svg>
        )}
        <span className="ai-chat-tooltip">AI Assistant</span>
      </button>

      <div className={`ai-chat-panel ${open ? 'open' : ''}`}>
        <div className="ai-chat-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM7.5 13A1.5 1.5 0 106 14.5 1.5 1.5 0 007.5 13zm9 0A1.5 1.5 0 1015 14.5 1.5 1.5 0 0016.5 13zM12 15c-1.5 0-2.5.5-3 1.5h6c-.5-1-1.5-1.5-3-1.5z" />
          </svg>
          <span>AI Assistant</span>
          <button className="ai-chat-close" onClick={() => setOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="ai-chat-body" ref={chatRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`ai-chat-msg ${msg.role}`}>
              <div className="ai-chat-bubble">{msg.text.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}</div>
            </div>
          ))}
          <div className="ai-chat-contact">
            <p className="ai-contact-title">Speak with our team directly:</p>
            <a href="tel:+971585318860" className="ai-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              +971 58 531 8860
            </a>
            <a href="mailto:info@venturispartners.com" className="ai-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@venturispartners.com
            </a>
            <a href={`https://wa.me/+971585318860?text=${encodeURIComponent('Hello! I need help with your services.')}`} target="_blank" rel="noopener noreferrer" className="ai-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="ai-chat-footer">
          <input
            className="ai-chat-input"
            placeholder="Type your question..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="ai-chat-send" onClick={handleSend}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
