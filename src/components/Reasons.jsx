import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Reasons() {
  const ref = useRef(null);
  
  const reasons = [
    {
      title: 'Authentic & Applicable Transformation',
      desc: 'Our experiences are designed to create change that feels meaningful, practical and relevant to everyday life.',
    },
    {
      title: 'Traditional Wisdom + Scientific Perspective',
      desc: 'We combine trusted healing modalities with current perspectives to create balanced and thoughtful wellness experiences.',
    },
    {
      title: 'Qualified Facilitators & Safe Spaces',
      desc: 'Each workshop is led with care, integrity and participant wellbeing at the center of the experience.',
    },
  ];

  useEffect(() => {
    // Header reveal
    gsap.fromTo('.reasons-header',
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reasons-container',
          start: 'top 85%',
        }
      }
    );

    // Cards cascade sequence
    gsap.fromTo('.reason-item', 
      { opacity: 0, y: 60, rotationX: -5 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0,
        duration: 1.2, 
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.reasons-grid',
          start: 'top 85%',
        }
      }
    );

    // Subtle horizontal divider drawing animation
    gsap.fromTo('.reason-line', 
      { scaleX: 0 },
      { 
        scaleX: 1, 
        duration: 1.4, 
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.reasons-grid',
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <section className="dark-theme" ref={ref} style={{ padding: '8vw 0', overflow: 'hidden' }}>
      <div className="container reasons-container" style={{ maxWidth: '85vw', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '6vw' }}>
        
        {/* Header Block */}
        <div className="reasons-header section-header" style={{ marginBottom: '1vw' }}>
          <h2 style={{ color: 'var(--creme)' }}>
            Why Choose Our Wellness Events?
          </h2>
          <div className="section-divider" style={{ backgroundColor: 'var(--creme)' }} />
          <p style={{ opacity: 0.6, margin: 0, maxWidth: '35vw', color: 'var(--creme)' }}>
            A sacred confluence of traditional rituals and modern mindfulness designed purely for your deepest emotional elevation.
          </p>
        </div>

        {/* Dynamic Reasons Grid */}
        <div className="reasons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5vw' }}>
          {reasons.map((reason, i) => (
            <div key={i} className="reason-item" style={{ display: 'flex', flexDirection: 'column', position: 'relative', cursor: 'default' }}>
              
              {/* Minimalist Divider */}
              <div className="reason-line" style={{ height: '1px', width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', marginBottom: '2.5vw', transformOrigin: 'left' }}></div>
              
              {/* Context Block */}
              <div style={{ display: 'flex', gap: '1.5vw', alignItems: 'flex-start' }}>
                {/* Numeric Index */}
                <span style={{ fontSize: 'clamp(14px, 1.1vw, 18px)', fontWeight: 600, color: '#ffffff', opacity: 0.9, marginTop: '0.2vw' }}>
                  0{i + 1}
                </span>
                
                {/* Text Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2vw' }}>
                  <h4 style={{ color: 'var(--creme)' }}>
                    {reason.title}
                  </h4>
                  <p style={{ opacity: 0.6, color: 'var(--creme)' }}>
                    {reason.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
