import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AnimateText from '../utils/AnimateText';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const images = [
    {
      img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/image_3.png?v=1775646454',
      alt: 'Wellness retreat banner in Rishikesh by 3ioNetra',
      link: 'https://my3ionetra.com/products/heartspace-x-iskcon-spiritual-retreat',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/image_2.webp?v=1775646451',
      alt: 'Wellness retreat banner in Rishikesh by 3ioNetra',
      link: 'https://my3ionetra.com/products/reclaim-your-radiance-a-7-day-sacred-rest',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/Banner_Image_Rishikesh.jpg?v=1772603711',
      alt: 'Wellness retreat banner in Rishikesh by 3ioNetra',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/Website_Banners_2.png?v=1771493883',
      alt: 'Guided wellness workshop banner by 3ioNetra',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/Website_Banners_02.jpg?v=1771492986',
      alt: 'Transformational wellness experience banner by 3ioNetra',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Smooth transition for images - fade only, no zoom
    gsap.fromTo('.hero-carousel-img', 
      { opacity: 0,  },
      { opacity: 1, duration: 1.2, ease: 'power2.out' }
    );
  }, [index]);

  const currentImage = images[index];

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="model-page" className="hero dark-theme carousel-layout">
      <div className="hero-carousel">
        <div className="hero-carousel-track">
          {currentImage.link ? (
            <a href={currentImage.link} target="_blank" rel="noopener noreferrer">
              <img 
                key={index}
                src={currentImage.img} 
                alt={currentImage.alt} 
                className="hero-carousel-img"
              />
            </a>
          ) : (
            <img 
              key={index}
              src={currentImage.img} 
              alt={currentImage.alt} 
              className="hero-carousel-img"
            />
          )}
        </div>
        
        <div className="carousel-arrows">
          <button className="arrow-btn prev" onClick={handlePrev} aria-label="Previous slide">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="arrow-btn next" onClick={handleNext} aria-label="Next slide">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="hero-glow"></div>
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button 
            key={i} 
            className={`dot ${index === i ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-content hero-content-bottom">
        <AnimateText type="lines" duration={1.2}>
          <h1 style={{ fontFamily: '"Faculty Glyphic", sans-serif', fontSize: 'clamp(13px, 45vw, 60px)', lineHeight: 1.1, marginBottom: '1.5vw', fontWeight: '750', letterSpacing: '0.04em', color: '#FFF8E7', textShadow: '3px 5px 10px rgba(0,0,0,0.8), 0px 4px 5px rgba(0,0,0,0.6)' }}>Discover Transformational Wellness Events & Workshops Near You</h1>
        </AnimateText>
        
        <div className="hero-paragaph">
          <AnimateText type="lines" delay={0.3} duration={1}>
            <h6 style={{ color: '#D4BA9E', textShadow: '1px 2px 5px rgba(0,0,0,0.8), 0px 1px 1px rgba(0,0,0,0.6)', fontWeight: '500' }}>
              In a fast-paced world, it’s easy to lose connection with yourself. Our curated wellness workshops and retreats provide a safe, supportive space to slow down, reset, and reconnect through a blend of traditional healing and modern awareness.
            </h6>
          </AnimateText>
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
    </section>
  );
}
