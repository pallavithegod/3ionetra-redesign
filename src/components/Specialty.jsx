import React, { useEffect, useRef , useState  } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Specialty() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo('.boxes-grid .column', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.boxes-grid',
          start: 'top 85%'
        }
      }
    );
  }, []);

  // Example data map for future dynamic conversion
  // const specialties = [
  //   {
  //     city: 'Rudraksha',
  //     desc: 'Experience the spiritual power of authentic Nepali and Indonesian beads. Each Rudraksha is energetically cleansed and thoughtfully curated to ensure you access the highest possible vibrations for your journey.',
  //     bg: 'https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/697a71c569462a8a637a7662_image-test-1.avif'
  //   },
  //   {
  //     city: 'Puja Kits',
  //     desc: 'Perfect your sacred daily rituals with our specialized equipment. Achieve optimal connection and consistent harmony for your spiritual practices. Our kits are designed to handle the requirements of every holy ceremony.',
  //     bg: 'https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/697e94caa694ae5f751f7f3a_6978cf5d8e122e23793db0fb_cocoa_converted.avif'
  //   },
  //   {
  //     city: 'Vastu',
  //     desc: 'Balance your environment to perfection with our versatile spiritual remedies. Whether balancing a home, office, or meditation room, our Vastu solutions unlock cosmic energy to perfectly flow within your space.',
  //     bg: 'https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/6992d9beafe4ef9ec03ccb63_nuts_converted.avif'
  // ]

  const specialties = [
  {
    bg: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/3_1.jpg?v=1773398066',
    city: 'Delhi NCR',
    desc: 'Guided wellness workshops and mindful gatherings hosted across Delhi NCR.',
  },
  {
    bg: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/1_1.jpg?v=1773398066',
    city: 'Rishikesh',
    desc: 'Immersive wellness experiences in a spiritually rooted setting ideal for deeper inner work.',
  },
  {
    bg: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/2_2.jpg?v=1773398066',
    city: 'Mumbai',
    desc: 'Urban wellness sessions designed for stress relief, balance and mindful transformation.',
  },
  {
    bg: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/4_1.jpg?v=1773398066',
    city: 'Bangalore',
    desc: 'Transformative offline experiences for personal growth, inner clarity and holistic wellbeing.',
  },
];

  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex !== null) {
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
  }, [activeIndex]);

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % specialties.length);
  };
  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? specialties.length - 1 : prev - 1));
  };

  return (
    <>
      <section className="light-theme" ref={ref} style={{ backgroundColor: '#F3EDE3' }}>
        <div className="container">
          <div className="w-dyn-list">
            <div className="section-header">
              <h2 style={{ color: '#4C1E1B', margin: 0 }}>Wellness Events in Major Cities</h2>
              <div className="section-divider" style={{ backgroundColor: '#4C1E1B' }} />
              <p style={{ margin: 0, maxWidth: '35vw', color: '#515151', opacity: 0.8 }}>
                Our offline wellness workshops are hosted across leading cities in India, making it easier for you to attend healing experiences close to your location.
              </p>
            </div>
            

            <div role="list" className="boxes-grid w-dyn-items">
              {specialties.map((item, idx) => (
                <div key={idx} role="listitem" className="column w-dyn-item" onClick={() => setActiveIndex(idx)}>
                  <div className="link-box"></div>
                  <div className="box-name">
                    <h4>{item.city}</h4>
                    <div className="arrow-icon"><img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0f3_arrow-white-1.svg" loading="lazy" alt="" /></div>
                  </div>
                  <div className="box-background"><img src={item.bg} loading="lazy" alt="" /></div>
                  <div className="box-info">
                    <p className="paragraph">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Overlay */}
      <div 
        id="features-overlay"
        className={`features-overlay ${activeIndex !== null ? 'active' : ''}`}
        onClick={() => setActiveIndex(null)}
      >
        <div className="features-overlay-content" onClick={(e) => e.stopPropagation()}>
          <button className="features-overlay-close" onClick={() => setActiveIndex(null)}>×</button>
          {activeIndex !== null && (
            <>
              <div className="features-overlay-image">
                <img src={specialties[activeIndex].bg} alt="Feature Image" id="features-overlay-img" />
              </div>
              <div className="features-overlay-info">
                <span className="features-overlay-number">({(activeIndex + 1).toString().padStart(2, '0')})</span>
                <h4 className="features-overlay-city">{specialties[activeIndex].city}</h4>
                <p className="features-overlay-description">{specialties[activeIndex].desc}</p>
              </div>
              <div className="features-overlay-arrows">
                <div id="features-overlay-prev" className="arrow-left" onClick={handlePrev}>
                  <img loading="lazy" src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0e3_arrow-left.svg" alt="" />
                </div>
                <div id="features-overlay-next" className="arrow-right" onClick={handleNext}>
                  <img loading="lazy" src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0e0_arrow-right.svg" alt="" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
