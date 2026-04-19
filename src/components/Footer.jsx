import React, { useState } from 'react';
import Marquee from './Marquee';

export default function Footer() {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer dark-theme">
      <Marquee text="Stay Connected" dark={true} speed={10} padding="0 0 2vw 0" />

      {/* Newsletter Block */}
      <div style={{ padding: '4vw var(--padding-sides-desktop) 0vw var(--padding-sides-desktop)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ maxWidth: '30vw', minWidth: '320px' }}>
          <h3 style={{ fontSize: 'clamp(16px, 1.36vw, 22px)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.4, color: 'var(--creme)', marginBottom: '0.8vw' }}>
            Stay Connected to the Divine
          </h3>
          <p style={{ fontSize: 'clamp(12px, 0.9vw, 15px)', color: 'rgba(243,237,227,0.6)', marginBottom: '1.5vw', lineHeight: 1.5 }}>
            Get exclusive updates, sacred drops & spiritual stories in your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail('');
            }}
            style={{ display: 'flex', gap: '0.8vw' }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ flex: 1, backgroundColor: 'transparent', border: '1px solid rgba(243,237,227,0.3)', color: 'var(--creme)', fontSize: 'clamp(12px, 0.9vw, 15px)', padding: '0.8vw 1.2vw', outline: 'none', transition: 'border-color 0.3s' }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(243,237,227,0.8)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(243,237,227,0.3)'}
            />
            <button
              type="submit"
              className="filled"
              style={{ padding: '0.8vw 1.8vw', cursor: 'pointer', border: 'none', fontWeight: 600 }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer Links Matrix */}
      <div style={{ padding: '5vw var(--padding-sides-desktop) 2vw var(--padding-sides-desktop)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '4vw', marginBottom: '5vw' }}>
          
          {/* Logo Anchor */}
          <div className="column" style={{ flex: '1 1 200px', maxWidth: '300px' }}>
            <img 
              src="https://my3ionetra.com/cdn/shop/files/3ioNetra_horizontal_Logo-white_background.png?v=1757129895&width=376" 
              loading="lazy" 
              alt="3ioNetra Logo" 
              className="footer-logo" 
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.8, width: '100%', maxWidth: '140px' }}
            />
          </div>
          
          {/* 3ioNetra Links */}
          <div className="column" style={{ flex: '1 1 150px' }}>
            <p style={{ opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5vw', fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 600 }}>3ioNetra</p>
            <ul>
              <li><a href="/pages/about-us">About Us</a></li>
              <li><a href="/pages/contact">Contact</a></li>
              <li><a href="https://app.shipyaari.com/tracking">Track Your Order</a></li>
              <li><a href="/blogs/3ioprasadam-blogs">Blogs</a></li>
              <li><a href="https://www.3iosetu.com/">Temple Software</a></li>
            </ul>
          </div>

          {/* Policies Links */}
          <div className="column" style={{ flex: '1 1 150px' }}>
            <p style={{ opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5vw', fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 600 }}>Policies</p>
            <ul>
              <li><a href="/pages/privacy-policy">Privacy Policy</a></li>
              <li><a href="/pages/refund-returns-exchange-policy">Refund, Returns & Exchange</a></li>
              <li><a href="/pages/delivery-shipping-policy">Delivery & Shipping</a></li>
              <li><a href="/pages/terms-and-conditions">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Scroll to Top */}
          <div className="column" style={{ flex: '0 0 auto' }}>
            <button aria-label="Scroll to top" className="scroll-to-top" onClick={scrollToTop} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C84B24', width: '3.5vw', height: '3.5vw', minWidth: '40px', minHeight: '40px', borderRadius: '50%', border: '1px solid #C84B24', backgroundColor: 'transparent', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#C84B24'; e.currentTarget.style.color = 'var(--creme)';}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#C84B24';}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '1.2vw', height: '1.2vw', minWidth: '14px', minHeight: '14px', strokeWidth: 4 }}>
                <polyline strokeWidth="4" points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-copyright" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2vw', borderTop: '1px solid rgba(243,237,227,0.1)', gap: '1vw' }}>
          <div style={{ display: 'flex', gap: '3vw', alignItems: 'center', flexWrap: 'wrap' }}>
            <span>© 2026 my3ioNetra. All rights reserved.</span>
            <a href="/pages/privacy-policy" style={{ opacity: 0.8, transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}>Privacy & Terms</a>
          </div>
          
          <div className="footer-socials" style={{ display: 'flex', gap: '1.5vw', alignItems: 'center' }}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ color: '#C84B24', transition: 'color 0.3s, transform 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.color = 'var(--creme)'; e.currentTarget.style.transform = 'scale(1.1)';}} onMouseLeave={(e) => {e.currentTarget.style.color = '#C84B24'; e.currentTarget.style.transform = 'scale(1)';}}>
              <svg style={{ width: 'clamp(20px, 1.5vw, 24px)', height: 'clamp(20px, 1.5vw, 24px)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ color: '#C84B24', transition: 'color 0.3s, transform 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.color = 'var(--creme)'; e.currentTarget.style.transform = 'scale(1.1)';}} onMouseLeave={(e) => {e.currentTarget.style.color = '#C84B24'; e.currentTarget.style.transform = 'scale(1)';}}>
              <svg style={{ width: 'clamp(20px, 1.5vw, 24px)', height: 'clamp(20px, 1.5vw, 24px)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: '#C84B24', transition: 'color 0.3s, transform 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.color = 'var(--creme)'; e.currentTarget.style.transform = 'scale(1.1)';}} onMouseLeave={(e) => {e.currentTarget.style.color = '#C84B24'; e.currentTarget.style.transform = 'scale(1)';}}>
              <svg style={{ width: 'clamp(20px, 1.5vw, 24px)', height: 'clamp(20px, 1.5vw, 24px)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
