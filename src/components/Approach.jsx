import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const links = [
  {
    img: '../src/assets/Gemini_Generated_Image_sz7yv2sz7yv2sz7y.png',
    title: 'Stress & Anxiety Relief Workshops',
    desc: 'These experiences are designed to calm the mind, reduce overwhelm and support emotional steadiness.',
  },
  {
    img: '../src/assets/Gemini_Generated_Image_l8zs7il8zs7il8zs.png',
    title: 'Emotional Healing Experiences',
    desc: 'Supportive workshops that help you work through emotional patterns and reconnect with inner balance.',
  },
  {
    img: '../src/assets/Gemini_Generated_Image_tjdkdutjdkdutjdk.png',
    title: 'Personal Growth & Transformation Programs',
    desc: 'Experiences created to support deeper self-awareness, mindset growth and meaningful life change.',
  },
  {
    img: '../src/assets/Gemini_Generated_Image_8aklne8aklne8akl.png',
    title: 'Energy Healing & Spiritual Awareness Sessions',
    desc: 'Explore higher awareness, energetic balance and a deeper connection with your inner self.',
  },
];

export default function Approach() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);
  const sectionRef = useRef(null);

  // Auto-cycle images every 3 seconds
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex(prev => (prev + 1) % links.length);
      }
    }, 3000);
  };

  useEffect(() => {
    startAutoPlay();

    // Scroll reveal animation
 gsap.fromTo(
      '.approach-flex-container .image-block, .approach-flex-container .underline-link',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.approach-flex-container',
          start: 'top 85%',
        },
      }
    );
  
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = (idx) => {
    isPausedRef.current = true;
    setActiveIndex(idx);
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section className="light-theme" ref={sectionRef} style={{ padding: '8vw var(--padding-sides-desktop)' }}>
      {/* Section header above the grid */}
      <div className="section-header">
        <h2 style={{ margin: 0, color: 'var(--dark-blue)' }}>
          Find the Right Wellness Experience for Your Needs
        </h2>
        <div className="section-divider" />
        <p style={{ margin: 0, maxWidth: '35vw', opacity: 0.7, color: 'var(--dark-blue)' }}>
          Every wellness journey begins with a need, such as stress relief, emotional healing, personal growth or inner
          clarity. Our workshops are designed to support these needs in a thoughtful, practical and holistic way.
        </p>
      </div>

      {/* Flex layout replacing .grid.four-five to meet 0.66 column ratio requirement */}
      <div className="approach-flex-container" style={{ display: 'flex', alignItems: 'center', gap: '4vw', width: '100%' }}>
   
        {/* Left column — 40% width (creates 0.66 : 1 ratio against the 60% column) */}
        <div className="image-block" style={{ flex: '4', position: 'relative', height: '60vh', borderRadius: '1.5vw', overflow: 'hidden' }}>
          {links.map((link, idx) => (
            <img
              key={idx}
              src={link.img}
              loading="lazy"
              alt={link.title}
              className={`approach-image${activeIndex === idx ? ' active' : ''}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: activeIndex === idx ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out',
                pointerEvents: 'none'
              }}
            />
          ))}
        </div>

        {/* Right column — 60% width */}
        <div className="column" style={{ flex: '6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div
            className="underline-box"
            onMouseLeave={handleMouseLeave}
          >
            {links.map((link, idx) => (
              <a
                key={idx}
                href="#"
                data-image-index={idx}
                className={`underline-link w-inline-block${activeIndex === idx ? ' active' : ''}`}
                onMouseEnter={() => handleMouseEnter(idx)}
                style={{
                  textDecoration: 'none',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingBottom: '1vw',
                  paddingTop: '1vw',
                }}
              >
                {/* Title row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <h3 style={{ margin: 0, fontSize: '2.5vw' }}>{link.title}</h3>
                  <span className="arrow-icon" style={{ flexShrink: 0 }}>
                    <img
                      src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0dd_arrow-black.svg"
                      loading="lazy"
                      alt=""
                    />
                  </span>
                </div>

                {/* Expandable description — slides open/closed on active */}
                <div
                  style={{
                    width: '100%',
                    maxHeight: activeIndex === idx ? '5vw' : '0',
                    overflow: 'hidden',
                    opacity: activeIndex === idx ? 1 : 0,
                    transition: 'max-height 0.45s cubic-bezier(.46,0,0,.99), opacity 0.35s ease',
                  }}
                >
                  <p
                    style={{
                      margin: '0.5vw 0 0 0',
                      fontSize: '1vw',
                      color: 'var(--dark-blue)',
                      opacity: 0.65,
                      lineHeight: 1.5,
                      paddingRight: '3vw',
                    }}
                  >
                    {link.desc}
                  </p>
                </div>

                <div className="underline-indicator" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
