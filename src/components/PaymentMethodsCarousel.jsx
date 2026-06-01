import './PaymentMethodsCarousel.css'

const logos = [
  { file: 'VISA-logo.png', name: 'Visa' },
  { file: 'Mastercard-logo.svg', name: 'Mastercard' },
  { file: 'American-Express-Color.png', name: 'American Express' },
  { file: 'Apple_Pay_logo.svg.png', name: 'Apple Pay' },
  { file: 'Google_Pay_Logo.svg.png', name: 'Google Pay' },
  { file: 'paypal-logo-png-2.png', name: 'PayPal' },
  { file: '1_myUsgaquInAWyZbb4GzWvg.png', name: 'Payment Gateway' },
  { file: '384578.svg', name: 'Payment Gateway' },
  { file: '65845ca6df37fcb3769be696_cdfd31fe33088ad8ad9be156ad812846_Isolation_Mode.svg', name: 'Payment Gateway' },
  { file: 'Stripe logo.svg', name: 'Stripe' },
]

const base = '/Payment methods/'

export default function PaymentMethodsCarousel() {
  return (
    <section className="payment-section">
      <div className="container">
        <div className="payment-header">
          <span className="payment-tag">
            <span className="payment-dot" />
            Secure Payments
          </span>
          <h2 className="payment-title">
            <span>We Accept</span>
          </h2>
          <p className="payment-desc">
            We support secure and verified payment gateways to ensure smooth global transactions.
          </p>
        </div>
      </div>

      <div className="payment-marquee-wrap">
        <div className="payment-marquee-row left">
          {[...logos, ...logos].map((logo, i) => (
            <LogoCard key={`row1-${i}`} logo={logo} />
          ))}
        </div>
        <div className="payment-marquee-row right">
          {[...logos, ...logos].map((logo, i) => (
            <LogoCard key={`row2-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoCard({ logo }) {
  return (
    <div className="payment-logo-card">
      <div className="payment-logo-card-inner">
        <img
          src={`${base}${logo.file}`}
          alt={logo.name}
        />
      </div>
    </div>
  )
}
