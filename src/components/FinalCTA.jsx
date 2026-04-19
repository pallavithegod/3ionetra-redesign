import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimateText from '../utils/AnimateText';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const ref = useRef(null);
  
  useEffect(() => {
    gsap.fromTo('.text-cta', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.text-cta',
          start: 'top 95%'
        }
      }
    );
  }, []);

  return (
    <section className="light-theme final-cta" ref={ref}>
      <div className="container">
        <div className="center-block">
          <div className="text-cta">
            <AnimateText type="lines" duration={1.2}>
              <h3 style={{ fontFamily: '"Faculty Glyphic", sans-serif', margin: 'auto', maxWidth: '70%', fontSize: 'clamp(9px, 5vw, 42px)', lineHeight: 1.1, marginBottom: '1.5vw', letterSpacing: '0.04em', fontWeight: '650', color: '#2a2a2a', textShadow: '2px 4px 15px rgba(0,0,0,0.15)' }}>Find emotional balance and inner clarity at our upcoming wellness events.</h3>
            </AnimateText>
            {/* <div className="bottom-cta-buttons">
              <a href="/catalog" className="w-inline-block">
                <button className="hollow">Browse Upcoming Events</button>
              </a>
              <a href="/contact" className="w-inline-block">
                <button className="filled">Join Our Wellness Community</button>
              </a>
            </div> */}
            <div className="buttons-row">
            <a href="/catalog" className="w-inline-block">
              <button className="filled">
                <span className="catalog-icon"></span>
                <span>Browse Upcoming Events</span>
              </button>
            </a>
            <a href="https://my3ionetra.com/pages/join-our-wellness-community" className="w-inline-block">
              <button className="filled">
                <span className="catalog-icon"></span>
                <span>Join Our Wellness Community</span>
              </button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
