import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const ref = useRef(null);

  const stats = [
    { value: '1000+', label: 'Participants joined curated wellness experiences' },
    { value: '4.9/5', label: 'Participant satisfaction across workshops' },
    { value: '50+', label: 'Curated sessions, workshops and retreats' },
    { value: 'Safe', label: 'Supportive, thoughtfully guided environments' },
  ];

  const testimonials = [
    { number: "01", author: 'Shabri L', role: 'Participant, Wellness Workshop', quote: 'The workshop helped me slow down, reconnect with myself and find a sense of inner calm. It felt thoughtfully led from beginning to end.' },
    { number: "02", author: 'Andy C', role: 'Retreat Participant', quote: 'The experience was grounding and practical at the same time. I left with more emotional clarity and tools I could genuinely use in daily life.' },
    { number: "03", author: 'Madison H', role: 'Workshop Attendee', quote: 'What stood out most was the safe and supportive environment. The facilitators created a space that felt both authentic and professionally held.' },
    { number: "04", author: 'Rhea K', role: 'Healing Session Participant', quote: 'I joined for stress relief and came away feeling noticeably more grounded, emotionally lighter and clearer about the next steps in my journey.' },
    { number: "05", author: 'Vansh S', role: 'Wellness Event Attendee', quote: 'The session felt meaningful without being overwhelming. It balanced depth, care and practical value in a way that stayed with me afterward.' },
    { number: "06", author: 'Nimisha S', role: 'Retreat Attendee', quote: 'Beautifully curated, deeply calming and incredibly well facilitated. The retreat gave me the pause and perspective I did not realize I needed.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Stats Reveal Animation
    gsap.fromTo('.stats-reveal', 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 85%'
        }
      }
    );
  }, []);

  const changeTestimonial = (newIndex) => {
    gsap.to('.testimonial-card', {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.fromTo('.testimonial-card', 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      }
    });
  };

  const handleNext = () => changeTestimonial((currentIndex + 1) % testimonials.length);
  const handlePrev = () => changeTestimonial(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);

  return (
    <section className="light-theme testimonials-section" ref={ref} style={{ padding: '8vw 0' }}>
      <div className="section-header">
        <h2>What Participants Say About Our Wellness Events</h2>
        <div className="section-divider" />
        <p style={{ margin: 0, maxWidth: '35vw', opacity: 0.65 }}>Real experiences shared by people who've attended our workshops, retreats and healing sessions.</p>
      </div>

      <div style={{ maxWidth: '85vw', margin: '0 auto', padding: '0 4vw' }}>
        
        {/* Status Card (Stats Block) */}
        <div className="stats-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3vw', marginBottom: '6vw', justifyContent: 'center', padding: '4vw 3vw', borderRadius: '2vw', backgroundColor: 'var(--creme-light, #FBF8F3)', border: '1px solid rgba(255, 255, 255, 0.8)', boxShadow: '1px 1px 20px rgba(0,0,0,0.04), -6px -6px 20px rgba(255,255,255,1)' }}>
          {stats.map((stat, i) => (
            <div key={i} className="stats-reveal" style={{ flex: '1 1 calc(25% - 3vw)', minWidth: '180px', textAlign: 'left', opacity: 0 }}>
              <div style={{ color: 'var(--maroon, #8B0000)', fontSize: 'clamp(28px, 3.5vw, 56px)', fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1 }}>
                {stat.value}
              </div>
              <p style={{ color: 'var(--dark-blue)', opacity: 0.65, marginTop: '1vw' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="testimonial-card">
          <div className="testimonial-number"><span>{testimonials[currentIndex].number}</span></div>
          <div className="arrows">
            <div id="testimonial-prev" className="arrow-left" onClick={handlePrev}>
              <img loading="lazy" src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db13f_test-back.svg" alt="" />
            </div>
            <div id="testimonial-next" className="arrow-right" onClick={handleNext}>
              <img loading="lazy" src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db13e_testi-next.svg" alt="" />
            </div>
          </div>
          <div className="testimonial-text">
            <h4>&quot;{testimonials[currentIndex].quote}&quot;</h4>
          </div>
          <div className="testimonial-author">
            <strong>{testimonials[currentIndex].author}</strong><br /><span>{testimonials[currentIndex].role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
