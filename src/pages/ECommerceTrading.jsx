import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
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

export default function ECommerceTrading() {
  return (
    <>
      <SEO title="E-Commerce & Trading" description="E-commerce development and general trading services in Dubai — online store setup, digital sales channels, and import/export solutions by Venturis Partners." keywords={['e-commerce Dubai', 'trading company UAE', 'online business setup Dubai', 'import export Dubai']} />
      <style>{`
        .et-hero-content {
          margin-left: 10%;
        }
        @media (max-width: 1024px) {
          .et-hero-content {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          .et-hero-content .vt-hero-badge {
            margin-left: auto;
            margin-right: auto;
          }
          .et-hero-content .vt-hero-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .et-hero-content .vt-hero-actions {
            justify-content: center;
          }
        }

        .et-assets {
          padding: 110px 0;
          background: linear-gradient(170deg, #0a1628 0%, #12202f 50%, #0f1a28 100%);
          position: relative;
          overflow: hidden;
        }

        .et-assets::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 80% 20%, rgba(175, 105, 63, 0.06), transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(255, 255, 255, 0.02), transparent 50%);
          pointer-events: none;
        }

        .et-assets-header {
          text-align: center;
          margin-bottom: 56px;
          position: relative;
          z-index: 1;
        }

        .et-assets-badge {
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
          position: relative;
        }

        .et-assets-badge::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .et-assets-badge::after {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .et-assets-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          max-width: 650px;
          margin: 0 auto 14px;
        }

        .et-assets-sub {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.5);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .et-assets-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .et-asset-card {
          background: linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 28px 20px 24px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .et-asset-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(160deg, rgba(255,255,255,0.08) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .et-asset-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .et-asset-card:nth-child(1):hover {
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(74, 222, 128, 0.08);
        }
        .et-asset-card:nth-child(2):hover {
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(245, 158, 11, 0.08);
        }
        .et-asset-card:nth-child(3):hover {
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(59, 130, 246, 0.08);
        }
        .et-asset-card:nth-child(4):hover {
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(139, 92, 246, 0.08);
        }
        .et-asset-card:nth-child(5):hover {
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(244, 63, 94, 0.08);
        }

        .et-asset-card:hover::after {
          opacity: 1;
        }

        .et-asset-card:hover .et-asset-icon-wrap {
          transform: scale(1.05);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .et-asset-card:hover .et-asset-icon {
          transform: scale(1.08);
        }

        .et-asset-card:hover .et-asset-title {
          color: #ffffff;
        }

        .et-asset-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border: 1px solid;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.5s ease;
        }

        .et-asset-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .et-asset-body {
          position: relative;
          z-index: 1;
        }

        .et-asset-title {
          font-size: 17px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 10px;
          font-family: 'Playfair Display', serif;
          line-height: 1.3;
          transition: color 0.4s ease;
        }

        .et-asset-desc {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 1100px) {
          .et-assets-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .et-asset-card {
            padding: 24px 18px 22px;
          }
        }

        @media (max-width: 768px) {
          .et-assets {
            padding: 70px 0;
          }

          .et-assets-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .et-asset-card {
            padding: 22px 16px 20px;
            border-radius: 14px;
          }

          .et-asset-icon-wrap {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            margin-bottom: 14px;
          }

          .et-asset-icon {
            width: 38px;
            height: 38px;
            border-radius: 10px;
          }

          .et-asset-icon svg {
            width: 18px;
            height: 18px;
          }

          .et-asset-title {
            font-size: 15px;
          }

          .et-asset-desc {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .et-assets-grid {
            gap: 10px;
          }

          .et-asset-card {
            padding: 18px 12px 16px;
            border-radius: 12px;
          }

          .et-asset-icon-wrap {
            width: 46px;
            height: 46px;
            border-radius: 12px;
            margin-bottom: 12px;
          }

          .et-asset-icon {
            width: 34px;
            height: 34px;
            border-radius: 9px;
          }

          .et-asset-icon svg {
            width: 16px;
            height: 16px;
          }

          .et-asset-title {
            font-size: 14px;
            margin-bottom: 6px;
          }
        }

        .et-market {
          padding: 110px 0;
          background: #ffffff;
          position: relative;
        }

        .et-market::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(175, 105, 63, 0.12), transparent);
        }

        .et-market-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .et-market-badge {
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

        .et-market-badge::before,
        .et-market-badge::after {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .et-market-title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: var(--primary);
          line-height: 1.2;
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          max-width: 600px;
          margin: 0 auto 16px;
        }

        .et-market-sub {
          font-size: 16px;
          color: var(--text-light);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .et-market-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .et-market-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          cursor: pointer;
          display: flex;
          align-items: flex-end;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease;
        }

        .et-market-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 30px 70px rgba(10, 22, 40, 0.18);
        }

        .et-market-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1), filter 0.6s ease;
        }

        .et-market-card:hover .et-market-card-img {
          transform: scale(1.12);
          filter: brightness(1.08) contrast(1.08) saturate(1.05);
        }

        .et-market-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 25%, rgba(10, 22, 40, 0.8) 100%);
          z-index: 1;
          transition: background 0.6s ease;
        }

        .et-market-card:hover .et-market-overlay {
          background: linear-gradient(180deg, transparent 10%, rgba(10, 22, 40, 0.92) 100%);
        }

        .et-market-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%);
          opacity: 0;
          z-index: 2;
          pointer-events: none;
          transition: opacity 0.6s ease;
        }

        .et-market-card:hover::after {
          opacity: 1;
        }

        .et-market-info {
          position: relative;
          z-index: 2;
          padding: 36px 30px 30px;
          width: 100%;
          transform: translateY(0);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), padding 0.6s ease;
        }

        .et-market-card:hover .et-market-info {
          transform: translateY(-6px);
          padding-bottom: 36px;
        }

        .et-market-name {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          font-family: 'Playfair Display', serif;
          margin-bottom: 8px;
          line-height: 1.2;
          transition: color 0.4s ease;
        }

        .et-market-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          margin: 0;
          max-width: 280px;
          transition: color 0.4s ease;
        }

        .et-market-card:hover .et-market-desc {
          color: rgba(255, 255, 255, 0.8);
        }

        .et-market-line {
          width: 36px;
          height: 2px;
          background: var(--accent);
          border-radius: 1px;
          margin-bottom: 14px;
          transition: width 0.5s cubic-bezier(0.23, 1, 0.32, 1), background 0.4s ease;
        }

        .et-market-card:hover .et-market-line {
          width: 56px;
          background: #ffffff;
        }

        .et-market-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), color 0.4s ease;
        }

        .et-market-card:hover .et-market-arrow {
          opacity: 1;
          transform: translateX(0);
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .et-market-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .et-market {
            padding: 70px 0;
          }

          .et-market-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            max-width: 420px;
            margin: 0 auto;
          }

          .et-market-card {
            aspect-ratio: 16 / 9;
          }

          .et-market-info {
            padding: 24px 24px 22px;
          }

          .et-market-name {
            font-size: 20px;
          }
        }

        /* ── Trading Categories Section ── */
        .et-trade-cats {
          padding: 110px 0;
          background: #f5f7fa;
          position: relative;
        }

        .et-trade-cats-title {
          text-align: center;
          margin-bottom: 64px;
        }

        .et-trade-cats-title .badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }

        .et-trade-cats-title .badge::before,
        .et-trade-cats-title .badge::after {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent);
        }

        .et-trade-cats-title h2 {
          font-size: 40px;
          font-weight: 700;
          color: #19283a;
          margin-bottom: 14px;
          line-height: 1.15;
        }

        .et-trade-cats-title h2 span {
          background: linear-gradient(135deg, var(--accent), #c97d4a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .et-trade-cats-title p {
          font-size: 16px;
          color: #5a6577;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .et-trade-block {
          margin-bottom: 56px;
        }

        .et-trade-block:last-child {
          margin-bottom: 0;
        }

        .et-trade-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(25,40,58,0.06);
          transition: box-shadow 0.6s ease, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          position: relative;
        }

        .et-trade-card::before {
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

        .et-trade-card:hover {
          box-shadow: 0 25px 70px rgba(25,40,58,0.14);
          transform: translateY(-6px);
        }

        .et-trade-card:hover::before {
          opacity: 1;
        }

        .et-trade-card:hover .et-trade-images img {
          transform: scale(1.08);
          filter: brightness(1.06) contrast(1.04) saturate(1.05);
        }

        .et-trade-card:hover .et-trade-images .img-item::after {
          opacity: 1;
        }

        .et-trade-card:hover .et-trade-body h3 {
          color: #af693f;
        }

        .et-trade-card:hover .et-trade-body p {
          color: #3a4556;
        }

        .et-trade-images .img-tag {
          position: absolute;
          bottom: 20px;
          left: 20px;
          padding: 8px 18px;
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          color: #19283a;
          letter-spacing: 0.8px;
          z-index: 2;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .et-trade-card:hover .et-trade-images .img-tag {
          opacity: 1;
          transform: translateY(0);
        }

        .et-trade-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          height: 340px;
          background: #19283a;
        }

        .et-trade-images .img-item {
          position: relative;
          overflow: hidden;
        }

        .et-trade-images img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), filter 0.6s ease;
        }

        .et-trade-images .img-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(175,105,63,0.25), transparent 50%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .et-trade-images .img-cat-tag {
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
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .et-trade-card:hover .et-trade-images .img-cat-tag {
          opacity: 1;
          transform: translateY(0);
        }

        .et-trade-body {
          padding: 32px 36px 36px;
        }

        .et-trade-body .sub {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 8px;
        }

        .et-trade-body h3 {
          font-size: 26px;
          font-weight: 700;
          color: #19283a;
          margin-bottom: 14px;
          line-height: 1.2;
          letter-spacing: -0.3px;
          transition: color 0.45s ease;
        }

        .et-trade-body p {
          font-size: 14px;
          color: #5a6577;
          line-height: 1.75;
          margin-bottom: 20px;
          transition: color 0.45s ease;
        }

        .et-trade-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .et-trade-tag {
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          color: #19283a;
          background: #f0f2f6;
          border: 1px solid #e8ecf2;
          transition: all 0.3s ease;
        }

        .et-trade-tag:hover {
          background: #19283a;
          color: #fff;
          border-color: #19283a;
          transform: translateY(-1px);
        }

        .et-trade-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 18px;
          border-top: 1px solid #f0f2f6;
        }

        .et-trade-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          color: var(--accent);
          background: rgba(175,105,63,0.08);
          border: 1px solid rgba(175,105,63,0.12);
          transition: all 0.3s ease;
        }

        .et-trade-badge:hover {
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
          transform: translateY(-1px);
        }

        .et-trade-badge svg {
          width: 12px;
          height: 12px;
        }

        /* ── Import Export Services ── */
        .et-import {
          padding: 90px 0 80px;
          background: #f9fafc;
          position: relative;
        }

        .et-import .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .et-import-title {
          text-align: center;
          margin-bottom: 56px;
        }

        .et-import-title .badge {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--accent);
          margin-bottom: 14px;
        }

        .et-import-title .badge::before,
        .et-import-title .badge::after {
          content: '';
          width: 28px;
          height: 1px;
          background: var(--accent);
        }

        .et-import-title h2 {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 800;
          color: var(--primary);
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
        }

        .et-import-title h2 span {
          color: var(--accent);
        }

        .et-import-title p {
          font-size: 15px;
          color: var(--text-light);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .et-import-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .et-import-card {
          background: linear-gradient(135deg, #19283a, #ae683f);
          border-radius: 18px;
          padding: 36px 28px 32px;
          box-shadow: 0 4px 24px rgba(174, 104, 63, 0.15);
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .et-import-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ae683f, #19283a);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
        }

        .et-import-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 60%);
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: 0;
          pointer-events: none;
        }

        .et-import-card > * {
          position: relative;
          z-index: 1;
        }

        .et-import-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 70px rgba(174, 104, 63, 0.35);
          border-color: rgba(255,255,255,0.2);
        }

        .et-import-card:hover::before {
          opacity: 1;
        }

        .et-import-card:hover::after {
          opacity: 1;
        }

        .et-import-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          color: #fff;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.4s ease, box-shadow 0.4s ease;
        }

        .et-import-icon svg {
          width: 26px;
          height: 26px;
        }

        .et-import-card:hover .et-import-icon {
          transform: scale(1.12) rotate(-3deg);
          background: rgba(255,255,255,0.22);
          box-shadow: 0 0 30px rgba(255,255,255,0.15);
        }

        .et-import-card h3 {
          font-size: 19px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.3;
          transition: color 0.35s ease, transform 0.4s ease;
        }

        .et-import-card:hover h3 {
          color: #f0d5c0;
          transform: translateX(4px);
        }

        .et-import-card p {
          font-size: 13.5px;
          color: rgba(255,255,255,0.78);
          line-height: 1.7;
          margin-bottom: 18px;
          transition: color 0.4s ease;
        }

        .et-import-card:hover p {
          color: rgba(255,255,255,0.92);
        }

        .et-import-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          text-decoration: none;
          transition: gap 0.3s ease, color 0.3s ease, letter-spacing 0.3s ease;
        }

        .et-import-link svg {
          width: 16px;
          height: 16px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .et-import-card:hover .et-import-link {
          gap: 14px;
          color: #fff;
          letter-spacing: 1px;
        }

        .et-import-card:hover .et-import-link svg {
          transform: translateX(5px);
        }

        @media (max-width: 1024px) {
          .et-import-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .et-import {
            padding: 56px 0 48px;
          }
          .et-import-grid {
            grid-template-columns: 1fr;
          }
          .et-import-title {
            margin-bottom: 36px;
          }
          .et-import-title h2 {
            font-size: 24px;
          }
          .et-import-card {
            padding: 28px 24px;
          }
        }

        @media (max-width: 900px) {
          .et-trade-images {
            grid-template-columns: 1fr 1fr;
            height: 260px;
          }
          .et-trade-cats-title h2 {
            font-size: 30px;
          }
          .et-trade-body {
            padding: 24px 28px 28px;
          }
          .et-trade-body h3 {
            font-size: 22px;
          }
        }

        @media (max-width: 640px) {
          .et-trade-cats {
            padding: 56px 0;
          }
          .et-trade-cats-title {
            margin-bottom: 36px;
          }
          .et-trade-cats-title h2 {
            font-size: 24px;
          }
          .et-trade-block {
            margin-bottom: 28px;
          }
          .et-trade-images {
            grid-template-columns: 1fr 1fr;
            height: 200px;
          }
          .et-trade-card {
            border-radius: 14px;
          }
          .et-trade-body {
            padding: 20px;
          }
          .et-trade-body h3 {
            font-size: 20px;
          }
          .et-trade-body p {
            font-size: 13px;
          }
          .et-trade-tag {
            font-size: 11px;
            padding: 4px 10px;
          }
          .et-trade-badge {
            font-size: 9px;
            padding: 4px 10px;
          }
        }
      `}</style>
      <section className="vt-hero">
        <video className="vt-hero-video" autoPlay muted loop playsInline poster="/vt-service-01.jpg">
          <source src="/Crypto%20Trading.mp4" type="video/mp4" />
        </video>
        <div className="vt-hero-overlay"></div>
        <div className="vt-hero-content et-hero-content">
          <span className="vt-hero-badge">E-COMMERCE & TRADING</span>
          <h1 className="vt-hero-title">
            E-commerce <span className="vt-hero-gradient-text">& Trade<br />Solutions</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.75)', fontWeight: 500, marginBottom: 16 }}>
            Financial Markets & International Commodity Trading
          </p>
          <p className="vt-hero-desc">
            We provide seamless access to global financial markets and international trade opportunities through a secure, reliable, and technology-driven trading network, designed to support efficient global connectivity, transparent transactions, and strategic market engagement for sustainable growth.
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

      <section className="vt-about">
        <div className="container">
          <div className="vt-about-grid" style={{ alignItems: 'start' }}>
            <div className="vt-about-content">
              <span className="vt-badge">WHO WE ARE</span>
              <h2 className="vt-about-title">
                Your <span className="vt-gradient-text">Global Trading & E-Commerce Partner</span>
              </h2>
              <p className="vt-about-desc">
                We provide a secure, unified platform that connects modern investors and businesses to global financial markets and international trade. By seamlessly integrating forex, crypto, stocks, commodities, and e-commerce, we simplify diversified trading to empower sustainable, long-term growth.
              </p>
              <div className="vt-about-features">
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Global Forex & Crypto Trading
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  Commodities, Stocks & Indices Access
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  ETFs & Diversified Investment Options
                </div>
                <div className="vt-about-feature">
                  <span className="vt-about-check"><CheckIcon /></span>
                  E-Commerce Trade (Electronics, Spices & Recyclables)
                </div>
              </div>
            </div>
            <div className="vt-about-visual" style={{ alignSelf: 'center' }}>
              <div className="vt-about-image">
                <img src="/ecommerce-about.jpg" alt="E-Commerce & Trading" className="vt-about-img" />
              </div>
              <div className="vt-about-float-card">
                <div className="vt-about-float-icon">ET</div>
                <div className="vt-about-float-text">
                  <strong>E-Commerce & Trading</strong>
                  <span>Global Trading Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="et-market">
        <div className="container">
          <div className="et-market-header">
            <span className="et-market-badge">ONLINE TRADING</span>
            <h2 className="et-market-title">Trade Bitcoin, Gold & Silver<br />With Confidence</h2>
            <p className="et-market-sub">Real-time pricing, deep liquidity, and secure execution for the world's most traded assets.</p>
          </div>
          <div className="et-market-grid">
            <div className="et-market-card">
              <img src="/bitcoin-card.jpg" alt="Bitcoin Trading" className="et-market-card-img" loading="lazy" />
              <div className="et-market-overlay"></div>
              <div className="et-market-info">
                <div className="et-market-line"></div>
                <h3 className="et-market-name">Bitcoin</h3>
                <p className="et-market-desc">Trade BTC with leverage, advanced charts, and deep liquidity pools.</p>
                <span className="et-market-arrow">
                  Trade Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
            <div className="et-market-card">
              <img src="/gold-card.jpg" alt="Gold Trading" className="et-market-card-img" loading="lazy" />
              <div className="et-market-overlay"></div>
              <div className="et-market-info">
                <div className="et-market-line"></div>
                <h3 className="et-market-name">Gold</h3>
                <p className="et-market-desc">Trade XAU/USD with competitive spreads and institutional-grade execution.</p>
                <span className="et-market-arrow">
                  Trade Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
            <div className="et-market-card">
              <img src="/silver-card.jpg" alt="Silver Trading" className="et-market-card-img" loading="lazy" />
              <div className="et-market-overlay"></div>
              <div className="et-market-info">
                <div className="et-market-line"></div>
                <h3 className="et-market-name">Silver</h3>
                <p className="et-market-desc">Trade XAG/USD with real-time streaming quotes and flexible position sizing.</p>
                <span className="et-market-arrow">
                  Trade Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="et-assets">
        <div className="container">
          <div className="et-assets-header">
            <span className="et-assets-badge">TRADING ASSETS</span>
            <h2 className="et-assets-title">Trade Popular Asset Classes<br />With Top Brokers</h2>
            <p className="et-assets-sub">Access global markets through a single, powerful platform</p>
          </div>
          <div className="et-assets-grid">
            <div className="et-asset-card">
              <div className="et-asset-icon-wrap" style={{ background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.15), rgba(34, 197, 94, 0.08))', borderColor: 'rgba(74, 222, 128, 0.3)' }}>
                <div className="et-asset-icon" style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v12M8 10l4-4 4 4M8 14l4 4 4-4"/>
                  </svg>
                </div>
              </div>
              <div className="et-asset-body">
                <h3 className="et-asset-title">Currencies</h3>
                <p className="et-asset-desc">Trade major, minor and exotic pairs such as EUR/USD, GBP/USD and USD/JPY.</p>
              </div>
            </div>
            <div className="et-asset-card">
              <div className="et-asset-icon-wrap" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.08))', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
                <div className="et-asset-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <div className="et-asset-body">
                <h3 className="et-asset-title">Commodities</h3>
                <p className="et-asset-desc">Trade commodities such as gold, silver, oil and natural gas.</p>
              </div>
            </div>
            <div className="et-asset-card">
              <div className="et-asset-icon-wrap" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.08))', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
                <div className="et-asset-icon" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                  </svg>
                </div>
              </div>
              <div className="et-asset-body">
                <h3 className="et-asset-title">Stocks</h3>
                <p className="et-asset-desc">Trade shares from global companies such as Apple, Tesla, Amazon and HSBC.</p>
              </div>
            </div>
            <div className="et-asset-card">
              <div className="et-asset-icon-wrap" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.08))', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
                <div className="et-asset-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <div className="et-asset-body">
                <h3 className="et-asset-title">ETFs</h3>
                <p className="et-asset-desc">Access ETF Funds such as SPY, QQQ or iShares funds.</p>
              </div>
            </div>
            <div className="et-asset-card">
              <div className="et-asset-icon-wrap" style={{ background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(225, 29, 72, 0.08))', borderColor: 'rgba(244, 63, 94, 0.3)' }}>
                <div className="et-asset-icon" style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
              </div>
              <div className="et-asset-body">
                <h3 className="et-asset-title">Indices</h3>
                <p className="et-asset-desc">Trade leading indices like the S&P500, Nasdaq100, FTSE100 and DAX40.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trading Categories ── */}
      <section className="et-trade-cats">
        <div className="container">
          <div className="et-trade-cats-title">
            <div className="badge">TRADING CATEGORIES</div>
            <h2>Our <span>Trading Verticals</span></h2>
            <p>Sourcing and trading premium commodities across three specialized sectors worldwide.</p>
          </div>

          {/* Recyclable Materials */}
          <div className="et-trade-block">
            <div className="et-trade-card">
              <div className="et-trade-images">
                <div className="img-item">
                  <img src="/recyclables-1.jpg" alt="Paper & Cardboard" loading="lazy" />
                  <div className="img-tag">RECYCLABLES</div>
                </div>
                <div className="img-item">
                  <img src="/recyclables-2.jpg" alt="Scrap Processing" loading="lazy" />
                  <div className="img-tag">WASTE MANAGEMENT</div>
                </div>
              </div>
              <div className="et-trade-body">
                <div className="sub">SUSTAINABLE RESOURCE RECOVERY & TRADING</div>
                <h3>Recyclable Materials</h3>
                <p>Venturis Trading drives environmental sustainability through certified recycling and global resource recovery. We source, trade, and process industrial-grade recyclable materials—including premium metals, plastics, and tech components—empowering global industries to minimize their carbon footprint and transition smoothly into a circular economy.</p>
                <div className="et-trade-tags">
                  <span className="et-trade-tag">Scrap Metals</span>
                  <span className="et-trade-tag">Copper & Aluminum</span>
                  <span className="et-trade-tag">Electronic Waste (LEDs)</span>
                  <span className="et-trade-tag">Industrial Plastics</span>
                  <span className="et-trade-tag">Recyclable Components</span>
                  <span className="et-trade-tag">Paper & Cardboard</span>
                  <span className="et-trade-tag">Glass Materials</span>
                  <span className="et-trade-tag">Cable Recycling</span>
                </div>
                <div className="et-trade-badges">
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>Eco-Friendly</span>
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>Zero Waste</span>
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Compliant Recycling</span>
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>Global Shipping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Spices */}
          <div className="et-trade-block">
            <div className="et-trade-card">
              <div className="et-trade-images">
                <div className="img-item">
                  <img src="/spices-1.jpg" alt="Premium Spices" loading="lazy" />
                  <div className="img-tag">PREMIUM SPICES</div>
                </div>
                <div className="img-item">
                  <img src="/spices-2.jpg" alt="Aromatic Herbs" loading="lazy" />
                  <div className="img-tag">AROMATIC HERBS</div>
                </div>
              </div>
              <div className="et-trade-body">
                <div className="sub">GLOBAL AGRICULTURAL COMMODITIES & TRADING</div>
                <h3>Premium Spices</h3>
                <p>Venturis Trading bridges the gap between premium global farms and international markets. Our specialized foodstuff division secures high-grade agricultural commodities and raw spices, delivering guaranteed freshness, strict quality compliance, and uncompromised supply chain reliability for bulk commercial distribution worldwide.</p>
                <div className="et-trade-tags">
                  <span className="et-trade-tag">Spices</span>
                </div>
                <div className="et-trade-badges">
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>ISO Certified</span>
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>HACCP Compliant</span>
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>Direct Sourcing</span>
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>Bulk Supply</span>
                </div>
              </div>
            </div>
          </div>

          {/* Consumer Electronics & IT Hardware */}
          <div className="et-trade-block">
            <div className="et-trade-card">
              <div className="et-trade-images">
                <div className="img-item">
                  <img src="/electronics-1.jpg" alt="Smart Devices" loading="lazy" />
                  <div className="img-tag">SMART DEVICES</div>
                </div>
                <div className="img-item">
                  <img src="/electronics-2.jpg" alt="Gaming & Peripherals" loading="lazy" />
                  <div className="img-tag">GAMING & PERIPHERALS</div>
                </div>
              </div>
              <div className="et-trade-body">
                <div className="sub">NEXT-GEN TECH DISTRIBUTION & TRADING</div>
                <h3>Consumer Electronics & IT Hardware</h3>
                <p>Venturis Trading is a premier B2B distributor of cutting-edge consumer electronics and enterprise IT hardware from the world's most trusted manufacturers. We supply authentic devices—ranging from smartphones and workstations to enterprise systems—backed by competitive wholesale margins and optimized logistics for retailers and corporate clients.</p>
                <div className="et-trade-tags">
                  <span className="et-trade-tag">Desktop Computers</span>
                  <span className="et-trade-tag">Laptops & Tablets</span>
                  <span className="et-trade-tag">iPhones & Smartphones</span>
                  <span className="et-trade-tag">Android Devices</span>
                  <span className="et-trade-tag">Small Electronic Goods</span>
                  <span className="et-trade-tag">Household Electronics</span>
                  <span className="et-trade-tag">Gaming Consoles</span>
                  <span className="et-trade-tag">Audio & Wearables</span>
                </div>
                <div className="et-trade-badges">
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Authorized Distributor</span>
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Brand Warranty</span>
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>Wholesale Pricing</span>
                  <span className="et-trade-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>Nationwide Delivery</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Import & Export Services ── */}
      <section className="et-import">
        <div className="container">
          <div className="et-import-title">
            <div className="badge">WHY CHOOSE US</div>
            <h2>Our Trade <span>Excellence</span></h2>
            <p>Commitment to quality, logistics, packaging, and sustainability across every global shipment.</p>
          </div>

          <div className="et-import-grid">
            {/* Card 1 - Quality Assurance */}
            <div className="et-import-card">
              <div className="et-import-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <h3>Quality Assurance</h3>
              <p>ISO &amp; HACCP certified processes, batch testing, and full traceability for every shipment.</p>
              <span className="et-import-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>

            {/* Card 2 - Global Logistics */}
            <div className="et-import-card">
              <div className="et-import-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Global Logistics</h3>
              <p>Air, sea, and land freight options with insured shipments and timed delivery windows.</p>
              <span className="et-import-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>

            {/* Card 3 - Custom Packaging */}
            <div className="et-import-card">
              <div className="et-import-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                </svg>
              </div>
              <h3>Custom Packaging</h3>
              <p>Bulk-to-retail packaging solutions, private-label options, and tamper-evident seals.</p>
              <span className="et-import-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>

            {/* Card 4 - Sustainability Commitment */}
            <div className="et-import-card">
              <div className="et-import-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Sustainability Commitment</h3>
              <p>Responsible sourcing, recyclable packaging, and certified recycling for e-waste &amp; scrap.</p>
              <span className="et-import-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>
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
                <h2 className="vt-cta-title">Ready to Start Trading?</h2>
                <p className="vt-cta-desc">
                  Contact our trade team today for a free consultation on sourcing, logistics, and global market opportunities tailored to your business.
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
