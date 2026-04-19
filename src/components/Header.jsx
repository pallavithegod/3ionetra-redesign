import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboveLight, setAboveLight] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'en,hi', autoDisplay: false },
          'google_translate_element'
        );
      };
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'hi' : 'en';
    setLang(nextLang);
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = nextLang;
      select.dispatchEvent(new Event('change'));
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.classList.remove('no-scroll');
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.classList.remove('no-scroll');
      if (window.lenis) window.lenis.start();
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastY && y > 300);
      setLastY(y);

      const hero = document.getElementById('model-page');
      if (hero) {
        setAboveLight(y > hero.offsetHeight - 80);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  const headerClass = `header ${scrolled ? 'scroll-deep' : ''} ${hidden ? 'hidden' : ''} ${aboveLight ? 'above-light-theme' : ''}`;

  return (
    <header className={headerClass}>
      <div className="grid">
        <a href="https://my3ionetra.com/" aria-current="page" className="logo w-inline-block w--current" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://my3ionetra.com/cdn/shop/files/3ioNetra_horizontal_Logo-white_background.png?v=1757129895&width=376" 
            loading="lazy" 
            alt="3ioNetra - Complete Wellness and Spiritual Elements" 
            style={{ 
              width: '10vw', 
              minWidth: '120px', 
              filter: aboveLight ? 'brightness(0)' : 'brightness(0) invert(1)',
              transition: 'filter 0.3s ease'
            }} 
          />
        </a>
        <nav className={`nav ${menuOpen ? 'w--open' : ''}`}>
          <a href="https://my3ionetra.com/" className="nav-link">Home</a>
          <a href="https://my3ionetra.com/pages/theheartspace" className="nav-link">TheHeartSpace</a>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            style={{ position: 'relative', paddingBottom: '0.35vw' }}
          >
            <a style={{ cursor: 'pointer', padding: 0 }}>
              Services
              <svg width="12" height="8" viewBox="0 0 10 6" fill="none" style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', marginLeft: '0.4vw', verticalAlign: 'middle', position: 'relative', top: '-0.1vw' }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: `translateX(-50%) translateY(${servicesOpen ? '0' : '1vw'})`,
              opacity: servicesOpen ? 1 : 0,
              visibility: servicesOpen ? 'visible' : 'hidden',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              backgroundColor: 'var(--creme)',
              boxShadow: '0 1vw 3vw rgba(42,44,47,0.1)',
              borderRadius: '1vw',
              padding: '0.5vw',
              minWidth: '200px',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 100,
              gap: '0.2vw'
            }}>
              <a href="https://my3ionetra.com/pages/puja-temple-list" style={{ padding: '0.8vw 1.2vw', margin: 0, width: '100%', borderRadius: '0.5vw', color: '#1a1a1a' }}><span className="nav-link-text">Puja</span></a>
              <a href="https://my3ionetra.com/pages/3ionetra-astro" style={{ padding: '0.8vw 1.2vw', margin: 0, width: '100%', borderRadius: '0.5vw', color: '#1a1a1a' }}><span className="nav-link-text">Astro</span></a>
              <a href="https://my3ionetra.com/pages/mantra" style={{ padding: '0.8vw 1.2vw', margin: 0, width: '100%', borderRadius: '0.5vw', color: '#1a1a1a' }}><span className="nav-link-text">Mantra</span></a>
              <a href="https://my3ionetra.com/pages/bhajan-clubbing-list" style={{ padding: '0.8vw 1.2vw', margin: 0, width: '100%', borderRadius: '0.5vw', color: '#1a1a1a' }}><span className="nav-link-text">Bhajan Clubbing</span></a>
            </div>
          </div>

          <a href="https://my3ionetra.com/pages/about-us" className="nav-link">About Us</a>

          <div className="header-actions">
            <div className="buttons">
              <a href="https://my3ionetra.com/collections/prasadam" className="w-inline-block">
                <button className="filled">
                  <span>Store</span>
                </button>
              </a>
              <a href="https://my3ionetra.com" className="w-inline-block" aria-label="Cart">
                <button className="hollow cart-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1vw', minHeight: '2.5vw' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </nav>
        
        <div className="header-actions">
          <div className="buttons">
            <a href="https://my3ionetra.com/collections/prasadam" className="w-inline-block">
              <button className="filled">
                <span>Store</span>
              </button>
            </a>
            <a href="https://my3ionetra.com" className="w-inline-block" aria-label="Cart">
              <button className="hollow cart-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 1.5vw', minHeight: '2.5vw' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <button className="mobile-products-button filled" aria-label="Products">
          <span className="catalog-icon"></span>
          <span>Products</span>
        </button>
        <button 
          aria-label="Toggle menu" 
          className={`burger-menu-toggle ${menuOpen ? 'w--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="burger-menu-icon">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
          </div>
        </button>
      </div>

      {/* Floating Sticky Language Selector */}
      <button 
        className="language-selector weglot-ignore wg-notranslate notranslate" 
        data-wg-notranslate=""
        onClick={toggleLanguage}
        aria-label="Toggle Language"
        style={{
          position: 'fixed',
          bottom: '2vw',
          right: '2vw',
          zIndex: 9999,
          backgroundColor: 'var(--creme)',
          border: '1px solid var(--dark-blue)',
          borderRadius: '50vw',
          padding: '0.6vw 1vw',
          boxShadow: '0 0.5vw 1.5vw rgba(42,44,47,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          color: 'var(--dark-blue)',
          fontSize: 'max(0.9vw, 13px)',
          fontWeight: 600,
          outline: 'none',
          fontFamily: 'inherit'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-0.2vw)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        {lang === 'en' ? 'HN' : 'EN'}
      </button>

      {/* Hidden Translate Element & CSS overrides to prevent UI layout shifts and tooltip bugs from Google Translate API */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      <style>{`
        .goog-te-banner-frame { display: none !important; }
        body { top: 0px !important; position: static !important; }
        #goog-gt-tt { display: none !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
        html { margin-top: 0 !important; }
      `}</style>
    </header>
  );
}
