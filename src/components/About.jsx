import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimateText from '../utils/AnimateText';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/12.jpg?v=1775555189',
    pills: ['Featured Workshop', 'Online Experience'],
    title: 'Reclaim your Radiance: A 7-Day Sacred Rest',
    desc: 'A sacred 7-day journey into rest and self-connection. Because your radiance returns when your soul is truly at ease.',
    details: [
      // { label: 'Format', value: 'Online Experience' },
      // { label: 'Mode', value: 'Online' },
      { label: 'Availability', value: 'Limited Seats' },
    ],
    link: 'https://my3ionetra.com/products/reclaim-your-radiance-a-7-day-sacred-rest',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/image_5.jpg?v=1775562168',
    pills: ['Featured Retreat', 'Offline Retreat', 'ISKCON'],
    badge: '1st May – 3rd May',
    title: 'HeartSpace X ISKCON Spiritual Retreat',
    desc: 'A soulful retreat for stillness, satsang, and prayer—escape the everyday noise and reconnect with inner calm.',
    details: [
      // { label: 'Format', value: 'Offline Retreat' },
      { label: 'Focus', value: 'Spiritual Reset' },
      { label: 'Availability', value: 'Limited Seats' },
    ],
    link: 'https://my3ionetra.com/products/heartspace-x-iskcon-spiritual-retreat?variant=55617885896777',
  },
];

export default function About() {
  const ref = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Reveal the whole section
    gsap.fromTo('.about-flex-container', 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-flex-container',
          start: 'top 80%'
        }
      }
    );
  }, []);

  return (
    <section className="about light-theme" ref={ref} style={{ padding: '8vw var(--padding-sides-desktop)' }}>
      <div className="section-header">
        <h2>Upcoming Wellness Events &amp; Workshops</h2>
        <div className="section-divider" />
        <p style={{ maxWidth: '35vw', margin: 0, opacity: 0.7 }}>Browse our latest curated wellness experiences and reserve your place to begin your journey toward healing, clarity and personal transformation.</p>
      </div>
      <div className="about-flex-container" style={{ display: 'flex', justifyContent: 'space-between', gap: '3vw', alignItems: 'stretch', width: '100%' }}>
        
        {/* === COLUMN 1: Card 1 === */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <a
            href={events[0].link}
            className="link-box w-inline-block"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ 
              borderRadius: '1.5vw', 
              height: '100%', 
              overflow: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: hoveredCard === 0 ? 'translateY(-0.8vw)' : 'translateY(0)',
              boxShadow: hoveredCard === 0 ? '0 1.5vw 3vw rgba(42,44,47,0.12)' : '0 0.5vw 1.5vw rgba(42,44,47,0.06)',
              backgroundColor: 'var(--creme)',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              textDecoration: 'none',
              position: 'relative'
            }}
          >
            {/* Sliding Transparent Overlay */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                transform: hoveredCard === 0 ? 'translateY(0)' : 'translateY(100%)',
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            />

            {/* Image (Flush with edges, increased height) */}
            <div style={{ overflow: 'hidden' }}>
              <img src={events[0].img} alt={events[0].title} style={{ width: '100%', height: 'calc(30vw + 2vh)', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', transform: hoveredCard === 0 ? 'scale(1.05)' : 'scale(1)' }} />
            </div>
            
            {/* Inner Content Component */}
            <div style={{ padding: '1.5vw', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 1 }}>
              {/* Pills */}
              <div style={{ display: 'flex', gap: '0.6vw', flexWrap: 'wrap', marginBottom: '1.5vw' }}>
                {events[0].pills.map((pill, i) => (
                  <span key={i} style={{ border: '1px solid var(--dark-blue)', padding: '0.4vw 0.8vw', borderRadius: '2vw', fontSize: '0.85vw', color: 'var(--dark-blue)', fontWeight: 500 }}>{pill}</span>
                ))}
              </div>

              {/* Title text */}
              <AnimateText type="words" duration={1} stagger={0.02}>
                <h4 style={{ fontSize: '1.8vw', color: 'var(--dark-blue)', margin: 0, fontWeight: 600, lineHeight: 1.25 }}>
                  {events[0].title}
                </h4>
              </AnimateText>
            </div>
          </a>
        </div>

        {/* === COLUMN 2: Middle Content === */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1vw 0', gap: '2vh' }}>
          
          {/* Content of Card 1 (Top, Left Aligned) */}
          <div style={{ textAlign: 'left', paddingRight: '2vw' }}>
            <p style={{ fontWeight: 500, color: 'var(--dark-blue)', opacity: 0.85, letterSpacing: '0.02em', margin: '0 0 2vw 0' }}>
              {events[0].desc}
            </p>
            <div style={{ borderTop: '1px solid rgba(42,44,47,0.1)', paddingTop: '1vw' }}>
              {events[0].details.map((detail, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5vw', fontSize: '0.9vw', color: 'var(--dark-blue)' }}>
                  <span style={{ opacity: 0.6 }}>{detail.label}</span>
                  <span style={{ fontWeight: 600 }}>{detail.value}</span>
                </div>
              ))}
            </div>
            <a href={events[0].link} className="text-link w-inline-block" style={{ marginTop: '1.5vw', display: 'inline-block' }}>View Event Details</a>
          </div>

          {/* Content of Card 2 (Bottom, Right Aligned) */}
          <div style={{ textAlign: 'right', paddingLeft: '2vw' }}>
            <p style={{ fontWeight: 500, color: 'var(--dark-blue)', opacity: 0.85, letterSpacing: '0.02em', margin: '0 0 2vw 0' }}>
              {events[1].desc}
            </p>
            <div style={{ borderTop: '1px solid rgba(42,44,47,0.1)', paddingTop: '1vw' }}>
              {events[1].details.map((detail, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5vw', fontSize: '0.9vw', color: 'var(--dark-blue)' }}>
                  <span style={{ opacity: 0.6 }}>{detail.label}</span>
                  <span style={{ fontWeight: 600 }}>{detail.value}</span>
                </div>
              ))}
            </div>
            <a href={events[1].link} className="text-link w-inline-block" style={{ marginTop: '1.5vw', display: 'inline-block' }}>View Event Details</a>
          </div>

        </div>

        {/* === COLUMN 3: Card 2 === */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <a
            href={events[1].link}
            className="link-box w-inline-block"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ 
              borderRadius: '1.5vw', 
              height: '100%', 
              overflow: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: hoveredCard === 1 ? 'translateY(-0.8vw)' : 'translateY(0)',
              boxShadow: hoveredCard === 1 ? '0 1.5vw 3vw rgba(42,44,47,0.12)' : '0 0.5vw 1.5vw rgba(42,44,47,0.06)',
              backgroundColor: 'var(--creme)',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              textDecoration: 'none',
              position: 'relative'
            }}
          >
            {/* Sliding Transparent Overlay */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                transform: hoveredCard === 1 ? 'translateY(0)' : 'translateY(100%)',
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            />

            {/* Image (Flush with edges, increased height) */}
            <div style={{ overflow: 'hidden' }}>
              <img src={events[1].img} alt={events[1].title} style={{ width: '100%', height: 'calc(30vw + 2vh)', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', transform: hoveredCard === 1 ? 'scale(1.05)' : 'scale(1)' }} />
            </div>
            
            {/* Inner Content Component */}
            <div style={{ padding: '1.5vw', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 1 }}>
              {/* Pills */}
              <div style={{ display: 'flex', gap: '0.6vw', flexWrap: 'wrap', marginBottom: '1.5vw' }}>
                {events[1].pills.map((pill, i) => (
                  <span key={i} style={{ border: '1px solid var(--dark-blue)', padding: '0.4vw 0.8vw', borderRadius: '2vw', fontSize: '0.85vw', color: 'var(--dark-blue)', fontWeight: 500 }}>{pill}</span>
                ))}
              </div>

              {/* Title text */}
              <AnimateText type="words" duration={1} stagger={0.02}>
                <h4 style={{ fontSize: '1.8vw', color: 'var(--dark-blue)', margin: 0, fontWeight: 600, lineHeight: 1.25 }}>
                  {events[1].title}
                </h4>
              </AnimateText>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
