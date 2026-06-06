import { Link } from 'react-router-dom'
import './VenturisTech.css'

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

export default function Consultancy() {
  return (
    <>
      <style>{`
        .cn-hero-content {
          margin-left: 10%;
        }
        @media (max-width: 1024px) {
          .cn-hero-content {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          .cn-hero-content .vt-hero-badge {
            margin-left: auto;
            margin-right: auto;
          }
          .cn-hero-content .vt-hero-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .cn-hero-content .vt-hero-actions {
            justify-content: center;
          }
        }

        .cn-about-float-card {
          left: auto;
          right: -24px;
        }
        @media (max-width: 768px) {
          .cn-about-float-card {
            left: 16px;
            right: auto;
          }
        }

        .cn-services {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
        }

        .cn-services-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .cn-services-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: 8px 0;
          margin-bottom: 20px;
          position: relative;
        }

        .cn-services-badge::before,
        .cn-services-badge::after {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .cn-services-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: var(--primary);
          line-height: 1.2;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          max-width: 650px;
          margin: 0 auto 14px;
        }

        .cn-services-sub {
          font-size: 16px;
          color: var(--text-light);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cn-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .cn-service-card {
          background: #ffffff;
          border: 1px solid rgba(175, 105, 63, 0.12);
          border-radius: 18px;
          padding: 36px 28px 32px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .cn-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .cn-service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(25, 40, 58, 0.1);
          border-color: rgba(175, 105, 63, 0.25);
        }

        .cn-service-card:hover::before {
          opacity: 1;
        }

        .cn-service-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          color: #fff;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cn-service-card:hover .cn-service-icon {
          transform: scale(1.1) rotate(-3deg);
        }

        .cn-service-icon svg {
          width: 28px;
          height: 28px;
        }

        .cn-service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          line-height: 1.3;
        }

        .cn-service-card p {
          font-size: 14px;
          color: var(--text-light);
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .cn-service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .cn-service-tag {
          font-size: 11px;
          font-weight: 500;
          color: var(--accent);
          background: rgba(175, 105, 63, 0.06);
          padding: 4px 12px;
          border-radius: 6px;
          border: 1px solid rgba(175, 105, 63, 0.12);
        }

        @media (max-width: 1024px) {
          .cn-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cn-services {
            padding: 70px 0;
          }
          .cn-services-grid {
            grid-template-columns: 1fr;
          }
          .cn-service-card {
            padding: 28px 22px 26px;
          }
        }

        .cn-process {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .cn-process::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(175, 105, 63, 0.12), transparent);
        }

        .cn-process::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(175, 105, 63, 0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .cn-process-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .cn-process-orb--1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.04), transparent 70%);
          top: -150px;
          left: -100px;
        }

        .cn-process-orb--2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.03), transparent 70%);
          bottom: -120px;
          right: -80px;
        }

        .cn-process-header {
          text-align: center;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .cn-process-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: 7px 20px;
          background: rgba(175, 105, 63, 0.08);
          border: 1px solid rgba(175, 105, 63, 0.2);
          border-radius: 50px;
          margin-bottom: 18px;
        }

        .cn-process-title {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          color: var(--primary);
          font-family: 'Playfair Display', serif;
          line-height: 1.15;
          margin-bottom: 14px;
        }

        .cn-process-title span {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cn-process-sub {
          font-size: 16px;
          color: var(--text-light);
          max-width: 560px;
          margin: 0 auto 50px;
          line-height: 1.75;
        }

        .cn-process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .cn-process-step {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 36px 28px 32px;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .cn-process-step::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
        }

        .cn-process-step:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(25, 40, 58, 0.08);
          border-color: rgba(175, 105, 63, 0.12);
        }

        .cn-process-num {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          color: #fff;
          font-size: 24px;
          font-weight: 800;
          font-family: 'Playfair Display', serif;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          box-shadow: 0 6px 20px rgba(175, 105, 63, 0.25);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .cn-process-step:hover .cn-process-num {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 10px 30px rgba(175, 105, 63, 0.35);
        }

        .cn-process-step h4 {
          font-size: 18px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          transition: color 0.3s ease;
        }

        .cn-process-step:hover h4 {
          color: var(--accent);
        }

        .cn-process-step p {
          font-size: 13.5px;
          color: var(--text-light);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .cn-process-steps {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .cn-process {
            padding: 70px 0;
          }
          .cn-process-steps {
            grid-template-columns: 1fr;
          }
        }

        .cn-verticals {
          padding: 110px 0;
          background: #f9fafc;
          position: relative;
        }

        .cn-verticals-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .cn-verticals-badge {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--accent);
          margin-bottom: 14px;
        }

        .cn-verticals-badge::before,
        .cn-verticals-badge::after {
          content: '';
          width: 28px;
          height: 1px;
          background: var(--accent);
        }

        .cn-verticals-title {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 800;
          color: var(--primary);
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
        }

        .cn-verticals-title span {
          color: var(--accent);
        }

        .cn-verticals-sub {
          font-size: 15px;
          color: var(--text-light);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cn-verticals-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .cn-vertical-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(25,40,58,0.06);
          transition: box-shadow 0.6s ease, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          position: relative;
        }

        .cn-vertical-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #af693f, #d4956a, #af693f);
          background-size: 200% 100%;
          z-index: 10;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .cn-vertical-card:hover {
          box-shadow: 0 25px 70px rgba(25,40,58,0.14);
          transform: translateY(-6px);
        }

        .cn-vertical-card:hover::before {
          opacity: 1;
        }

        .cn-vertical-card:hover .cn-vertical-img img {
          transform: scale(1.08);
          filter: brightness(1.06) contrast(1.04) saturate(1.05);
        }

        .cn-vertical-card:hover .cn-vertical-body h3 {
          color: #af693f;
        }

        .cn-vertical-img {
          height: 220px;
          overflow: hidden;
          position: relative;
        }

        .cn-vertical-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), filter 0.6s ease;
        }

        .cn-vertical-img .img-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          padding: 6px 14px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          color: #19283a;
          letter-spacing: 0.5px;
          z-index: 2;
        }

        .cn-vertical-body {
          padding: 28px 30px 32px;
        }

        .cn-vertical-body h3 {
          font-size: 22px;
          font-weight: 700;
          color: #19283a;
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
          line-height: 1.2;
          transition: color 0.45s ease;
        }

        .cn-vertical-body p {
          font-size: 14px;
          color: #5a6577;
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .cn-vertical-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .cn-vertical-tag {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 500;
          color: #19283a;
          background: #f0f2f6;
          border: 1px solid #e8ecf2;
        }

        @media (max-width: 1024px) {
          .cn-verticals-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .cn-verticals {
            padding: 70px 0;
          }
          .cn-verticals-grid {
            grid-template-columns: 1fr;
          }
          .cn-vertical-body {
            padding: 22px 24px 26px;
          }
        }

        .cn-why {
          padding: 110px 0;
          background: linear-gradient(170deg, #0a1628 0%, #12202f 50%, #0f1a28 100%);
          position: relative;
          overflow: hidden;
        }

        .cn-why::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 80% 20%, rgba(175, 105, 63, 0.06), transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(255, 255, 255, 0.02), transparent 50%);
          pointer-events: none;
        }

        .cn-why-header {
          text-align: center;
          margin-bottom: 56px;
          position: relative;
          z-index: 1;
        }

        .cn-why-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: 8px 0;
          margin-bottom: 20px;
        }

        .cn-why-badge::before,
        .cn-why-badge::after {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .cn-why-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          max-width: 600px;
          margin: 0 auto 14px;
        }

        .cn-why-sub {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.5);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cn-why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .cn-why-card {
          background: linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 36px 28px 32px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          backdrop-filter: blur(10px);
        }

        .cn-why-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(160deg, rgba(255,255,255,0.08) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .cn-why-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .cn-why-card:hover::after {
          opacity: 1;
        }

        .cn-why-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          position: relative;
          z-index: 1;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cn-why-card:hover .cn-why-icon {
          transform: scale(1.1) rotate(-3deg);
        }

        .cn-why-icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
        }

        .cn-why-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 1;
        }

        .cn-why-card p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1100px) {
          .cn-why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cn-why {
            padding: 70px 0;
          }
          .cn-why-grid {
            grid-template-columns: 1fr;
          }
          .cn-why-card {
            padding: 28px 24px;
          }
        }

        /* ── Corporate Consultancy ── */
        .cn-corporate {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .cn-corporate::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(175, 105, 63, 0.12), transparent);
        }

        .cn-corporate::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(175, 105, 63, 0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .cn-corp-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .cn-corp-orb--1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.04), transparent 70%);
          top: -200px;
          left: -150px;
        }

        .cn-corp-orb--2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.03), transparent 70%);
          bottom: -100px;
          right: -100px;
        }

        .cn-corp-header {
          text-align: center;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .cn-corp-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: 7px 20px;
          background: rgba(175, 105, 63, 0.08);
          border: 1px solid rgba(175, 105, 63, 0.2);
          border-radius: 50px;
          margin-bottom: 18px;
        }

        .cn-corp-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: var(--primary);
          line-height: 1.2;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          max-width: 650px;
          margin: 0 auto 14px;
        }

        .cn-corp-title span {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cn-corp-sub {
          font-size: 15.5px;
          color: var(--text-light);
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.75;
        }

        .cn-corp-intro-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin: 40px auto 50px;
          position: relative;
          z-index: 1;
        }

        .cn-corp-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 50px;
          font-size: 12px;
          color: var(--text-light);
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 600;
        }

        .cn-corp-pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
        }

        .cn-corp-section-label {
          text-align: center;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }

        .cn-corp-section-label h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--primary);
          font-family: 'Playfair Display', serif;
          margin-bottom: 6px;
        }

        .cn-corp-section-label p {
          font-size: 13px;
          color: var(--text-light);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .cn-corp-divisions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto 56px;
          position: relative;
          z-index: 1;
        }

        .cn-corp-division {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .cn-corp-division::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, var(--accent), #c97a4a);
          border-radius: 0 0 2px 2px;
        }

        .cn-corp-division:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(25, 40, 58, 0.08);
          border-color: rgba(175, 105, 63, 0.15);
          background: #ffffff;
        }

        .cn-corp-division:hover .cn-corp-div-icon {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 8px 25px rgba(175, 105, 63, 0.3);
        }

        .cn-corp-div-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, var(--accent), #c97a4a);
        }

        .cn-corp-div-icon svg {
          width: 22px;
          height: 22px;
          color: #fff;
        }

        .cn-corp-division h4 {
          font-size: 17px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          transition: color 0.3s ease;
        }

        .cn-corp-division:hover h4 {
          color: var(--accent);
        }

        .cn-corp-division p {
          font-size: 13.5px;
          color: var(--text-light);
          line-height: 1.7;
          margin: 0;
        }

        .cn-corp-sisters {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cn-corp-sister {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .cn-corp-sister::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .cn-corp-sister:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(25, 40, 58, 0.08);
          border-color: rgba(175, 105, 63, 0.15);
          background: #ffffff;
        }

        .cn-corp-sister:hover::before {
          opacity: 1;
        }

        .cn-corp-sister-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, var(--accent), #c97a4a);
        }

        .cn-corp-sister:hover .cn-corp-sister-icon {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 8px 25px rgba(175, 105, 63, 0.3);
        }

        .cn-corp-sister-icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
        }

        .cn-corp-sister h5 {
          font-size: 16px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          transition: color 0.3s ease;
        }

        .cn-corp-sister:hover h5 {
          color: var(--accent);
        }

        .cn-corp-sister p {
          font-size: 13px;
          color: var(--text-light);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .cn-corp-divisions {
            grid-template-columns: repeat(2, 1fr);
          }
          .cn-corp-sisters {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cn-corporate {
            padding: 70px 0;
          }
          .cn-corp-divisions {
            grid-template-columns: 1fr;
          }
          .cn-corp-sisters {
            grid-template-columns: 1fr;
          }
        }

        /* ── Documentary Consultancy ── */
        .cn-documentary {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .cn-documentary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(rgba(175, 105, 63, 0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .cn-doc-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .cn-doc-orb--1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.04), transparent 70%);
          top: -150px;
          right: -100px;
        }

        .cn-doc-orb--2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.03), transparent 70%);
          bottom: -100px;
          left: -80px;
        }

        .cn-doc-header {
          text-align: center;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .cn-doc-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: 7px 20px;
          background: rgba(175, 105, 63, 0.08);
          border: 1px solid rgba(175, 105, 63, 0.2);
          border-radius: 50px;
          margin-bottom: 18px;
        }

        .cn-doc-title {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0;
          font-family: 'Playfair Display', serif;
          line-height: 1.15;
        }

        .cn-doc-title span {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cn-doc-intro {
          text-align: center;
          max-width: 620px;
          margin: 20px auto 50px;
          position: relative;
          z-index: 1;
        }

        .cn-doc-intro p {
          font-size: 16px;
          color: var(--text-light);
          line-height: 1.85;
        }

        .cn-doc-intro-accent {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
          margin: 22px auto 0;
          border-radius: 2px;
        }

        .cn-doc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cn-doc-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .cn-doc-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, var(--accent), #c97a4a);
          border-radius: 0 0 2px 2px;
        }

        .cn-doc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(25, 40, 58, 0.08);
          border-color: rgba(175, 105, 63, 0.15);
        }

        .cn-doc-card:hover .cn-doc-card-icon {
          transform: scale(1.1) rotate(-3deg);
          box-shadow: 0 8px 25px rgba(175, 105, 63, 0.3);
        }

        .cn-doc-card:hover .cn-doc-card-num {
          color: rgba(175, 105, 63, 0.08);
        }

        .cn-doc-card:hover h3 {
          color: var(--accent);
        }

        .cn-doc-card:hover li {
          border-color: rgba(175, 105, 63, 0.1);
          background: rgba(175, 105, 63, 0.03);
        }

        .cn-doc-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .cn-doc-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          border: none;
        }

        .cn-doc-card-icon svg {
          width: 22px;
          height: 22px;
          color: #fff;
        }

        .cn-doc-card-num {
          margin-left: auto;
          font-size: 26px;
          font-weight: 800;
          color: rgba(25, 40, 58, 0.04);
          font-family: 'Playfair Display', serif;
          line-height: 1;
          transition: color 0.4s ease;
        }

        .cn-doc-card h3 {
          font-size: 17px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
          font-family: 'Playfair Display', serif;
          position: relative;
          z-index: 1;
          transition: color 0.4s ease;
        }

        .cn-doc-card-desc {
          font-size: 13.5px;
          color: var(--text-light);
          line-height: 1.7;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .cn-doc-card ul {
          display: flex;
          flex-direction: column;
          gap: 7px;
          position: relative;
          z-index: 1;
        }

        .cn-doc-card li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: var(--text-light);
          transition: all 0.3s ease;
          padding: 5px 10px;
          background: var(--bg-alt);
          border-radius: 8px;
          border: 1px solid var(--border);
        }

        .cn-doc-card:hover li {
          border-color: rgba(175, 105, 63, 0.1);
          background: rgba(175, 105, 63, 0.03);
        }

        .cn-doc-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.5;
          flex-shrink: 0;
        }

        .cn-doc-footer {
          max-width: 800px;
          margin: 48px auto 0;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 30px;
          align-items: center;
          background: linear-gradient(135deg, rgba(175, 105, 63, 0.04), rgba(201, 122, 74, 0.06));
          border: 1px solid rgba(175, 105, 63, 0.1);
          border-radius: 16px;
          padding: 36px 40px;
        }

        .cn-doc-footer p {
          font-size: 14.5px;
          color: var(--text-light);
          line-height: 1.8;
        }

        .cn-doc-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.4s ease;
          white-space: nowrap;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }

        .cn-doc-footer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(175, 105, 63, 0.3);
        }

        .cn-doc-footer-btn svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .cn-doc-footer-btn:hover svg {
          transform: translateX(3px);
        }

        @media (max-width: 1024px) {
          .cn-doc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cn-doc-intro {
            margin: 16px auto 40px;
          }
          .cn-doc-footer {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .cn-doc-footer-btn {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .cn-documentary {
            padding: 70px 0;
          }
          .cn-doc-grid {
            grid-template-columns: 1fr;
          }
          .cn-doc-card {
            padding: 24px 20px;
          }

          .cn-doc-footer {
            padding: 24px 20px;
          }
        }

        /* ── Client Consultancy Services ── */
        .cn-client {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .cn-client::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(175, 105, 63, 0.12), transparent);
        }

        .cn-client::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(175, 105, 63, 0.04) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .cn-client-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .cn-client-orb--1 {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.04), transparent 70%);
          top: -180px;
          right: -120px;
        }

        .cn-client-orb--2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(175, 105, 63, 0.03), transparent 70%);
          bottom: -100px;
          left: -80px;
        }

        .cn-client-header {
          text-align: center;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .cn-client-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 3px;
          padding: 7px 20px;
          background: rgba(175, 105, 63, 0.08);
          border: 1px solid rgba(175, 105, 63, 0.2);
          border-radius: 50px;
          margin-bottom: 18px;
        }

        .cn-client-title {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          color: var(--primary);
          font-family: 'Playfair Display', serif;
          line-height: 1.15;
          margin-bottom: 14px;
        }

        .cn-client-title span {
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cn-client-intro {
          max-width: 680px;
          margin: 0 auto 50px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .cn-client-intro p {
          font-size: 16px;
          color: var(--text-light);
          line-height: 1.85;
        }

        .cn-client-intro-accent {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
          margin: 22px auto 0;
          border-radius: 2px;
        }

        .cn-client-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
          max-width: 1150px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cn-client-image-wrap {
          position: sticky;
          top: 120px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }

        .cn-client-image-wrap img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
          border-radius: 20px;
        }

        .cn-client-image-overlay {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(180deg, transparent 50%, rgba(25, 40, 58, 0.15));
          pointer-events: none;
          border: 1px solid rgba(175, 105, 63, 0.08);
        }

        .cn-client-image-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .cn-client-image-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
        }

        .cn-client-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .cn-client-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 28px 24px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }

        .cn-client-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
        }

        .cn-client-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(25, 40, 58, 0.08);
          border-color: rgba(175, 105, 63, 0.12);
        }

        .cn-client-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cn-client-card:hover .cn-client-card-icon {
          transform: scale(1.08) rotate(-3deg);
          box-shadow: 0 8px 25px rgba(175, 105, 63, 0.3);
        }

        .cn-client-card-icon svg {
          width: 22px;
          height: 22px;
          color: #fff;
        }

        .cn-client-card h4 {
          font-size: 16px;
          font-weight: 700;
          color: var(--primary);
          font-family: 'Playfair Display', serif;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }

        .cn-client-card:hover h4 {
          color: var(--accent);
        }

        .cn-client-card ul {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cn-client-card li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: var(--text-light);
          line-height: 1.4;
        }

        .cn-client-card li::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          opacity: 0.5;
        }

        .cn-client-benefits {
          max-width: 1100px;
          margin: 56px auto 0;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .cn-client-benefit {
          text-align: center;
          padding: 32px 18px 28px;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cn-client-benefit::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #c97a4a);
        }

        .cn-client-benefit:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(25, 40, 58, 0.08);
          border-color: rgba(175, 105, 63, 0.12);
        }

        .cn-client-benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          background: linear-gradient(135deg, var(--accent), #c97a4a);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cn-client-benefit:hover .cn-client-benefit-icon {
          transform: scale(1.12);
          box-shadow: 0 8px 25px rgba(175, 105, 63, 0.3);
        }

        .cn-client-benefit-icon svg {
          width: 20px;
          height: 20px;
          color: #fff;
        }

        .cn-client-benefit h5 {
          font-size: 12px;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .cn-client-benefit:hover h5 {
          color: var(--accent);
        }

        .cn-client-benefit p {
          font-size: 12px;
          color: var(--text-light);
          line-height: 1.65;
          margin: 0;
          max-width: 160px;
        }

        .cn-client-closing {
          max-width: 820px;
          margin: 48px auto 0;
          position: relative;
          z-index: 1;
          padding: 40px 48px 40px 60px;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 18px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .cn-client-closing:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 50px rgba(25, 40, 58, 0.06);
          border-color: rgba(175, 105, 63, 0.1);
        }

        .cn-client-closing::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, var(--accent), #c97a4a);
          border-radius: 4px 0 0 4px;
        }

        .cn-client-closing::after {
          content: '\u201C';
          position: absolute;
          top: 24px;
          left: 28px;
          font-size: 64px;
          font-family: 'Playfair Display', serif;
          line-height: 1;
          color: rgba(175, 105, 63, 0.12);
          pointer-events: none;
        }

        .cn-client-closing p {
          font-size: 15px;
          color: var(--text-light);
          line-height: 1.9;
          margin: 0;
          font-style: italic;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .cn-client-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cn-client-image-wrap img {
            height: 380px;
          }
          .cn-client-benefits {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cn-client {
            padding: 70px 0;
          }
          .cn-client-cards {
            grid-template-columns: 1fr;
          }
          .cn-client-benefits {
            grid-template-columns: repeat(2, 1fr);
          }
          .cn-client-closing {
            padding: 24px 20px;
          }
        }

        @media (max-width: 480px) {
          .cn-client-benefits {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="vt-hero">
        <video className="vt-hero-video" autoPlay muted loop playsInline poster="/client-consultancy.jpg">
          <source src="/545.mp4" type="video/mp4" />
        </video>
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content cn-hero-content">
          <span className="vt-hero-badge">CONSULTANCY</span>
          <h1 className="vt-hero-title">
            Strategic <span className="vt-hero-gradient-text">Consulting<br />Services</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.75)', fontWeight: 500, marginBottom: 16 }}>
            Expert Guidance for Business Growth & Transformation
          </p>
          <p className="vt-hero-desc">
            We deliver strategic consulting solutions that empower businesses to navigate complexity, drive innovation, and achieve sustainable growth through data-driven insights and industry expertise.
          </p>
          <div className="vt-hero-actions">
            <Link to="/services" className="vt-btn-primary">
              Explore Services
              <ArrowIcon />
            </Link>
            <Link to="/contact" className="vt-btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="vt-about">
        <div className="container">
          <div className="vt-about-grid">
            <div className="vt-about-visual">
              <div className="vt-about-image">
                <img src="/consultancy-about.jpg" alt="Consultancy Services" className="vt-about-img" />
              </div>
              <div className="vt-about-float-card cn-about-float-card">
                <div className="vt-about-float-icon">CN</div>
                <div className="vt-about-float-text">
                  <strong>Consultancy</strong>
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
            <div className="vt-about-content">
              <span className="vt-badge">ABOUT US</span>
              <h2 className="vt-about-title">
                <span className="vt-gradient-text">Excellence</span> in Strategic<br />Consulting
              </h2>
              <p className="vt-about-desc">
                At Venturis Consultancy, we partner with visionary leaders to architect transformative strategies that redefine industries. Our multidisciplinary team brings together deep domain expertise, rigorous analytical rigor, and an unwavering commitment to delivering outcomes that transcend expectations.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Corporate Strategy & Governance
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Market Intelligence & Advanced Analytics
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Digital Transformation & Technology Strategy
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Organizational Design & Change Leadership
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Verticals ── */}
      <section className="cn-verticals">
        <div className="container">
          <div className="cn-verticals-header">
            <div className="cn-verticals-badge">INDUSTRIES WE SERVE</div>
            <h2 className="cn-verticals-title">Deep <span>Industry Expertise</span></h2>
            <p className="cn-verticals-sub">Specialized consulting capabilities across key sectors, delivered by teams with deep domain knowledge.</p>
          </div>
          <div className="cn-verticals-grid">
            <div className="cn-vertical-card">
              <div className="cn-vertical-img">
                <img src="/financial-consultancy.jpg" alt="Financial Services" loading="lazy" />
                <div className="img-tag">FINANCIAL SERVICES</div>
              </div>
              <div className="cn-vertical-body">
                <h3>Financial Services</h3>
                <p>Strategic advisory for banks, insurance firms, and fintech companies navigating regulatory change, digital disruption, and competitive pressures.</p>
                <div className="cn-vertical-tags">
                  <span className="cn-vertical-tag">Banking</span>
                  <span className="cn-vertical-tag">Insurance</span>
                  <span className="cn-vertical-tag">Fintech</span>
                  <span className="cn-vertical-tag">Wealth Management</span>
                </div>
              </div>
            </div>
            <div className="cn-vertical-card">
              <div className="cn-vertical-img">
                <img src="https://media.licdn.com/dms/image/v2/C4E12AQGObe_j7ZzdCw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1562336441138?e=2147483647&v=beta&t=gzSMvC5sFc4B8l7owu87F9iRifHmjfRJzxK145OXJrE" alt="Client Consultancy" loading="lazy" />
                <div className="img-tag">CLIENT CONSULTANCY</div>
              </div>
              <div className="cn-vertical-body">
                <h3>Client Consultancy</h3>
                <p>Strategic advisory and business consultancy services helping clients navigate complex challenges, seize growth opportunities, and achieve sustainable success across every stage of their journey.</p>
                <div className="cn-vertical-tags">
                  <span className="cn-vertical-tag">Business Advisory</span>
                  <span className="cn-vertical-tag">Strategic Planning</span>
                  <span className="cn-vertical-tag">Market Entry</span>
                  <span className="cn-vertical-tag">Growth Consulting</span>
                </div>
              </div>
            </div>
            <div className="cn-vertical-card">
              <div className="cn-vertical-img">
                <img src="https://img.magnific.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?semt=ais_hybrid&w=740&q=80" alt="Documentary Consultancy" loading="lazy" />
                <div className="img-tag">DOCUMENTARY CONSULTANCY</div>
              </div>
              <div className="cn-vertical-body">
                <h3>Documentary Consultancy</h3>
                <p>Comprehensive documentation, visa processing, legal attestation, and government coordination services for individuals and businesses navigating UAE administrative processes.</p>
                <div className="cn-vertical-tags">
                  <span className="cn-vertical-tag">Visa Processing</span>
                  <span className="cn-vertical-tag">Legal Attestation</span>
                  <span className="cn-vertical-tag">Business Setup</span>
                  <span className="cn-vertical-tag">Government Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Corporate Consultancy ── */}
      <section className="cn-corporate">
        <div className="cn-corp-orb cn-corp-orb--1" />
        <div className="cn-corp-orb cn-corp-orb--2" />
        <div className="container">
          <div className="cn-corp-header">
            <span className="cn-corp-badge">CORPORATE GROUP</span>
            <h2 className="cn-corp-title">Corporate <span>Consultancy</span></h2>
            <p className="cn-corp-sub">
              Venturis Consultancy operates as a unified multi-sector advisory practice delivering professional solutions across strategy, finance, operations, and business transformation.
            </p>
          </div>

          {/* Intro Strip */}
          <div className="cn-corp-intro-strip">
            <span className="cn-corp-pill"><span className="cn-corp-pill-dot" />Est. 2010</span>
            <span className="cn-corp-pill"><span className="cn-corp-pill-dot" />UAE Based</span>
            <span className="cn-corp-pill"><span className="cn-corp-pill-dot" />Multi-Sector</span>
            <span className="cn-corp-pill"><span className="cn-corp-pill-dot" />Global Reach</span>
          </div>

          {/* Divisions */}
          <div className="cn-corp-section-label">
            <h3>Our Expertise</h3>
            <p>Four core divisions driving your success</p>
          </div>
          <div className="cn-corp-divisions">
            <div className="cn-corp-division">
              <div className="cn-corp-div-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4>Financial Consultancy</h4>
              <p>Investment strategies, portfolio planning, risk management, and financial advisory solutions tailored for sustainable business growth.</p>
            </div>
            <div className="cn-corp-division">
              <div className="cn-corp-div-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4>Asset Management</h4>
              <p>Professional asset management services focused on wealth growth, operational efficiency, and long-term investment planning.</p>
            </div>
            <div className="cn-corp-division">
              <div className="cn-corp-div-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4>Legal Compliance</h4>
              <p>Ensuring compliance with local and international legal frameworks through professional documentation and regulatory guidance.</p>
            </div>
            <div className="cn-corp-division">
              <div className="cn-corp-div-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4>Business Incorporation</h4>
              <p>Business setup, company structuring, licensing support, and operational establishment services for startups and enterprises.</p>
            </div>
          </div>

          {/* Sister Companies */}
          <div className="cn-corp-section-label">
            <h3>Sister Companies</h3>
            <p>Complementary services under one umbrella</p>
          </div>
          <div className="cn-corp-sisters">
            <div className="cn-corp-sister">
              <div className="cn-corp-sister-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h5>Accounting Services</h5>
              <p>Comprehensive accounting solutions including bookkeeping, financial reporting, payroll management, and audit support for businesses of all sizes.</p>
            </div>
            <div className="cn-corp-sister">
              <div className="cn-corp-sister-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              </div>
              <h5>Tax Advisory</h5>
              <p>Expert tax planning, VAT consultation, corporate tax compliance, and strategic advisory services to optimize tax efficiency and ensure regulatory adherence.</p>
            </div>
            <div className="cn-corp-sister">
              <div className="cn-corp-sister-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h5>Mortgage Consultancy</h5>
              <p>Professional mortgage advisory services covering home loans, property financing, refinancing solutions, and tailored lending strategies for individuals and investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Documentary Consultancy ── */}
      <section className="cn-documentary">
        <div className="cn-doc-orb cn-doc-orb--1" />
        <div className="cn-doc-orb cn-doc-orb--2" />
        <div className="container">
          <div className="cn-doc-header">
            <span className="cn-doc-badge">DOCUMENTATION</span>
            <h2 className="cn-doc-title">Documentary <span>Consultancy</span></h2>
          </div>

          <div className="cn-doc-intro">
            <p>Simplifying complex administrative processes across the UAE — from business setup and visa processing to legal attestation and government coordination. Our expert team ensures a seamless experience at every step.</p>
            <div className="cn-doc-intro-accent" />
          </div>

          <div className="cn-doc-grid">
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">01</span>
              </div>
              <h3>Business Setup & Licensing</h3>
              <p className="cn-doc-card-desc">Complete company formation and licensing support across UAE free zones and mainland.</p>
              <ul>
                <li><span className="cn-doc-dot" />Company Formation</li>
                <li><span className="cn-doc-dot" />Trade License Processing</li>
                <li><span className="cn-doc-dot" />Business Consultancy</li>
              </ul>
            </div>
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">02</span>
              </div>
              <h3>Visa & Immigration</h3>
              <p className="cn-doc-card-desc">End-to-end visa processing and immigration services for individuals and corporate teams.</p>
              <ul>
                <li><span className="cn-doc-dot" />Visa Processing</li>
                <li><span className="cn-doc-dot" />Emirates ID Services</li>
                <li><span className="cn-doc-dot" />Immigration Documentation</li>
              </ul>
            </div>
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">03</span>
              </div>
              <h3>Legal & Attestation</h3>
              <p className="cn-doc-card-desc">Document attestation, notary services, and legal documentation for all UAE authorities.</p>
              <ul>
                <li><span className="cn-doc-dot" />MOFA Attestation</li>
                <li><span className="cn-doc-dot" />Notary & Legal Docs</li>
                <li><span className="cn-doc-dot" />Dubai Courts Support</li>
              </ul>
            </div>
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">04</span>
              </div>
              <h3>Government Services</h3>
              <p className="cn-doc-card-desc">Hassle-free government transaction processing through Tasheel, Tawjeeh, and more.</p>
              <ul>
                <li><span className="cn-doc-dot" />Tasheel & Tawjeeh</li>
                <li><span className="cn-doc-dot" />Tadbeer Services</li>
                <li><span className="cn-doc-dot" />RTA & Health Docs</li>
              </ul>
            </div>
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">05</span>
              </div>
              <h3>Financial & Support</h3>
              <p className="cn-doc-card-desc">Accounting, VAT, translation, and bank account opening services under one roof.</p>
              <ul>
                <li><span className="cn-doc-dot" />VAT & Accounting</li>
                <li><span className="cn-doc-dot" />Translation Services</li>
                <li><span className="cn-doc-dot" />Bank Account Opening</li>
              </ul>
            </div>
            <div className="cn-doc-card">
              <div className="cn-doc-card-header">
                <div className="cn-doc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="cn-doc-card-num">06</span>
              </div>
              <h3>Corporate PRO</h3>
              <p className="cn-doc-card-desc">Dedicated government coordination and document clearing for your business operations.</p>
              <ul>
                <li><span className="cn-doc-dot" />Government Coordination</li>
                <li><span className="cn-doc-dot" />License Renewals</li>
                <li><span className="cn-doc-dot" />Document Clearing</li>
              </ul>
            </div>
          </div>

          <div className="cn-doc-footer">
            <p>With a strong focus on transparency, efficiency, and customer satisfaction, our Documentary Consultancy serves as a trusted partner for startups, entrepreneurs, corporates, and individuals seeking smooth and hassle-free documentation solutions in the UAE.</p>
            <Link to="/contact" className="cn-doc-footer-btn">
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Client Consultancy Services ── */}
      <section className="cn-client">
        <div className="cn-client-orb cn-client-orb--1" />
        <div className="cn-client-orb cn-client-orb--2" />
        <div className="container">
          <div className="cn-client-header">
            <span className="cn-client-badge">CONSULTANCY</span>
            <h2 className="cn-client-title">Client <span>Consultancy Services</span></h2>
          </div>
          <div className="cn-client-intro">
            <p>We provide strategic consultancy services designed to help individuals, investors, and businesses make confident decisions and achieve sustainable success. Through personalized guidance, professional expertise, and comprehensive support, we ensure every client receives tailored solutions that align with their goals, requirements, and long-term objectives.</p>
            <div className="cn-client-intro-accent" />
          </div>

          <div className="cn-client-main">
            <div className="cn-client-image-wrap">
              <img src="https://media.licdn.com/dms/image/v2/C4E12AQGObe_j7ZzdCw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1562336441138?e=2147483647&v=beta&t=gzSMvC5sFc4B8l7owu87F9iRifHmjfRJzxK145OXJrE" alt="Deep Industry Expertise" />
              <div className="cn-client-image-overlay" />
              <div className="cn-client-image-badge">
                <span className="cn-client-image-badge-dot" />
                Deep Industry Expertise
              </div>
            </div>

            <div className="cn-client-cards">
              <div className="cn-client-card">
                <div className="cn-client-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4>Personalized Guidance</h4>
                <ul>
                  <li>Tailored Consultation &amp; Recommendations</li>
                  <li>Requirement &amp; Needs Assessment</li>
                  <li>Goal-Oriented Strategic Planning</li>
                  <li>Risk &amp; Opportunity Analysis</li>
                  <li>Budget &amp; Investment Advisory</li>
                </ul>
              </div>
              <div className="cn-client-card">
                <div className="cn-client-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9l-7 7m4-7l3 3m-7 4l3 3m8-10l2 2m-5 5l3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4>Client Consultancy</h4>
                <ul>
                  <li>Comprehensive Business Advisory</li>
                  <li>Strategic Roadmap Development</li>
                  <li>Stakeholder Engagement &amp; Management</li>
                  <li>Performance Monitoring &amp; Reporting</li>
                  <li>Growth &amp; Scalability Planning</li>
                </ul>
              </div>
              <div className="cn-client-card">
                <div className="cn-client-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4>End-to-End Management</h4>
                <ul>
                  <li>Documentation &amp; Compliance Support</li>
                  <li>Approval Process Management</li>
                  <li>Coordination &amp; Follow-Up Services</li>
                  <li>Project Monitoring &amp; Execution</li>
                  <li>Final Delivery &amp; Ongoing Assistance</li>
                </ul>
              </div>
              <div className="cn-client-card">
                <div className="cn-client-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4>Visa &amp; Immigration Consultancy</h4>
                <ul>
                  <li>Visa Eligibility Assessment</li>
                  <li>Immigration Documentation Guidance</li>
                  <li>Application Submission Assistance</li>
                  <li>Residency &amp; Work Permit Support</li>
                  <li>Post-Arrival Advisory Services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cn-client-benefits">
            <div className="cn-client-benefit">
              <div className="cn-client-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
              <h5>Client-Centric Approach</h5>
              <p>Every solution is tailored to client requirements and objectives.</p>
            </div>
            <div className="cn-client-benefit">
              <div className="cn-client-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h5>Trusted &amp; Confidential</h5>
              <p>Maintaining complete privacy, professionalism, and integrity.</p>
            </div>
            <div className="cn-client-benefit">
              <div className="cn-client-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h5>Strategic Insights</h5>
              <p>Providing expert analysis for informed decision-making.</p>
            </div>
            <div className="cn-client-benefit">
              <div className="cn-client-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h5>Timely &amp; Transparent</h5>
              <p>Ensuring smooth communication and efficient service delivery.</p>
            </div>
            <div className="cn-client-benefit">
              <div className="cn-client-benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h5>Long-Term Partnership</h5>
              <p>Building lasting relationships focused on sustainable success.</p>
            </div>
          </div>

          <div className="cn-client-closing">
            <p>From initial consultation and strategic planning to negotiations, documentation, approvals, and successful project completion, our consultancy team manages every stage with professionalism, transparency, and efficiency. We are committed to delivering reliable solutions that create long-term value, confidence, and growth for our clients.</p>
          </div>
        </div>
      </section>

      {/* ── Consulting Services ── */}
      <section className="cn-services">
        <div className="container">
          <div className="cn-services-header">
            <span className="cn-services-badge">OUR SERVICES</span>
            <h2 className="cn-services-title">Comprehensive Consulting<br />Solutions</h2>
            <p className="cn-services-sub">Tailored advisory services designed to address your unique business challenges and unlock new opportunities.</p>
          </div>
          <div className="cn-services-grid">
            <div className="cn-service-card">
              <div className="cn-service-icon" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Strategy & Transformation</h3>
              <p>Develop and execute growth strategies, drive organizational transformation, and build competitive advantage through market-led planning and operational redesign.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Growth Strategy</span>
                <span className="cn-service-tag">M&A Advisory</span>
                <span className="cn-service-tag">Operating Model</span>
              </div>
            </div>
            <div className="cn-service-card">
              <div className="cn-service-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                </svg>
              </div>
              <h3>Business Analytics</h3>
              <p>Transform data into actionable insights with advanced analytics, predictive modeling, and custom dashboards that enable informed, confident decision-making.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Predictive Analytics</span>
                <span className="cn-service-tag">Data Visualization</span>
                <span className="cn-service-tag">Performance Metrics</span>
              </div>
            </div>
            <div className="cn-service-card">
              <div className="cn-service-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3>Digital & Technology Advisory</h3>
              <p>Navigate digital disruption with confidence. We guide technology strategy, platform selection, and digital transformation initiatives from vision to execution.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Digital Strategy</span>
                <span className="cn-service-tag">Cloud Advisory</span>
                <span className="cn-service-tag">AI & Automation</span>
              </div>
            </div>
            <div className="cn-service-card">
              <div className="cn-service-icon" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Risk & Compliance</h3>
              <p>Identify, assess, and manage enterprise risks. We design robust compliance frameworks that protect your business while enabling strategic agility.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Risk Assessment</span>
                <span className="cn-service-tag">Regulatory Compliance</span>
                <span className="cn-service-tag">Cybersecurity</span>
              </div>
            </div>
            <div className="cn-service-card">
              <div className="cn-service-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Operational Excellence</h3>
              <p>Optimize processes, reduce costs, and improve efficiency across your value chain with lean methodologies, supply chain optimization, and performance improvement programs.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Process Optimization</span>
                <span className="cn-service-tag">Supply Chain</span>
                <span className="cn-service-tag">Cost Reduction</span>
              </div>
            </div>
            <div className="cn-service-card">
              <div className="cn-service-icon" style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                </svg>
              </div>
              <h3>Change Management</h3>
              <p>Navigate organizational change smoothly with structured change strategies, stakeholder engagement, and training programs that ensure lasting adoption.</p>
              <div className="cn-service-tags">
                <span className="cn-service-tag">Change Strategy</span>
                <span className="cn-service-tag">Stakeholder Engagement</span>
                <span className="cn-service-tag">Culture Transformation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="cn-process">
        <div className="cn-process-orb cn-process-orb--1" />
        <div className="cn-process-orb cn-process-orb--2" />
        <div className="container">
          <div className="cn-process-header">
            <span className="cn-process-badge">OUR PROCESS</span>
            <h2 className="cn-process-title">How We <span>Deliver Results</span></h2>
            <p className="cn-process-sub">A proven, collaborative methodology that ensures measurable outcomes at every stage.</p>
          </div>
          <div className="cn-process-steps">
            <div className="cn-process-step">
              <div className="cn-process-num">01</div>
              <h4>Discover</h4>
              <p>Deep dive into your business, market dynamics, and strategic challenges through stakeholder interviews and data analysis.</p>
            </div>
            <div className="cn-process-step">
              <div className="cn-process-num">02</div>
              <h4>Analyze</h4>
              <p>Rigorous assessment of opportunities, risks, and performance gaps using advanced analytical frameworks and benchmarks.</p>
            </div>
            <div className="cn-process-step">
              <div className="cn-process-num">03</div>
              <h4>Strategize</h4>
              <p>Develop a tailored, actionable roadmap with clear priorities, resource allocation, and measurable KPIs aligned to your vision.</p>
            </div>
            <div className="cn-process-step">
              <div className="cn-process-num">04</div>
              <h4>Execute</h4>
              <p>Implement solutions with dedicated support, agile governance, and continuous monitoring to ensure lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="cn-why">
        <div className="container">
          <div className="cn-why-header">
            <span className="cn-why-badge">WHY CHOOSE US</span>
            <h2 className="cn-why-title">Why Venturis<br />Consultancy</h2>
            <p className="cn-why-sub">What sets our consulting practice apart in a competitive market.</p>
          </div>
          <div className="cn-why-grid">
            <div className="cn-why-card">
              <div className="cn-why-icon" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(37,99,235,0.1))', borderColor: 'rgba(59,130,246,0.3)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <h3>Proven Expertise</h3>
              <p>Years of cross-industry consulting experience with a track record of delivering measurable, sustainable results for global clients.</p>
            </div>
            <div className="cn-why-card">
              <div className="cn-why-icon" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(217,119,6,0.1))', borderColor: 'rgba(245,158,11,0.3)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Global Perspective</h3>
              <p>Deep understanding of international markets, cultural dynamics, and cross-border business practices that inform every engagement.</p>
            </div>
            <div className="cn-why-card">
              <div className="cn-why-icon" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(124,58,237,0.1))', borderColor: 'rgba(139,92,246,0.3)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Data-Driven Approach</h3>
              <p>Every recommendation is grounded in rigorous analysis, market intelligence, and quantitative validation to ensure confidence and clarity.</p>
            </div>
            <div className="cn-why-card">
              <div className="cn-why-icon" style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(220,38,38,0.1))', borderColor: 'rgba(239,68,68,0.3)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3>End-to-End Delivery</h3>
              <p>From discovery to execution, we partner with you throughout the journey — ensuring strategies are implemented and results are achieved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="vt-cta-section">
        <div className="container">
          <div className="vt-cta-card">
            <div className="vt-cta-glow"></div>
            <div className="vt-cta-body">
              <div className="vt-cta-text">
                <span className="vt-cta-badge">GET IN TOUCH</span>
                <h2 className="vt-cta-title">Ready to Transform Your Business?</h2>
                <p className="vt-cta-desc">
                  Contact our consulting team today for a free initial consultation. Let&apos;s discuss how we can help you achieve your strategic goals.
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
