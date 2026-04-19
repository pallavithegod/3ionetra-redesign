import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/1_1_70ed111d-c5fa-4926-bbdf-c02ae0e59d39.png?v=1773047718',
    title: 'Sound Healing Events',
    desc: 'Deep relaxation and energy balancing using sound waves to calm the nervous system and restore harmony.',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/2_1_f35a19c6-367f-4fd2-b246-fe07aa356fe9.png?v=1773047672',
    title: 'Mindfulness & Breath Sessions',
    desc: 'Unify your body and mind through movement, meditation, and breathwork to restore calm and build inner resilience.',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/3_1_bcf05407-6cc8-466f-b03f-6dd7a47724ea.png?v=1773047673',
    title: 'Stress Management Programs',
    desc: 'Practical techniques to overcome anxiety, burnout, and daily stress through guided wellness sessions.',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/4_1_c4c76a44-d824-4948-aa39-93135d43db11.png?v=1773047672',
    title: 'Manifestation Workshops',
    desc: 'Practical manifestation techniques to align your thoughts and intentions with your personal goals.',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/5_1c3237ac-9705-43d7-bef6-7f0f3c2b65c2.png?v=1773047672',
    title: 'Chakra Healing Sessions',
    desc: 'Guided sessions to align your energy centers, focusing on emotional balance and overall wellbeing.',
  },
  // {
  //   img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/6_07f4cfd3-0dbd-4423-a386-5df53a1dabb5.png?v=1773047672',
  //   title: 'Yoga & Mindfulness Events',
  //   desc: 'Connecting body and mind through movement, meditation, and guided mindfulness practices.',
  // },
  {
    img: 'https://cdn.shopify.com/s/files/1/0661/4243/7449/files/7_b87773ff-05e7-446c-983c-fdc8b69ce245.png?v=1773047672',
    title: 'Crystal Healing Workshops',
    desc: 'Exploring crystal use for emotional healing, energy balancing, and personal transformation.',
  },
];

export default function EventCategories() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.category-card');
    
    gsap.fromTo(cards, 
      { opacity: 0, x: -30 }, 
      { 
        opacity: 1, 
        x: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="event-categories light-theme" ref={containerRef}>
      {/* Full Width Header */}
      <div className="section-header" >
        <h2 className="big-title" style={{ margin: 0 }}>Explore Our Wellness Event Categories</h2>
        <div className="section-divider" />
        <p className="subtitle" style={{ margin: 0, maxWidth: '35vw' }}>
          Our events cater to your physical and emotional needs. Whether you are a beginner or seeking a deeper shift, we offer a wide variety of healing experiences to support your journey.
        </p>
      </div>
      
      {/* Full Width List */}
      <div className="categories-list" style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {categories.map((item, idx) => (
          <div key={idx} className="category-card" style={{ width: '48%', gap: '1vw' , height: '10vw' }}>
            <div className="card-inline-content">
              <div className="icon-wrap" style={{ width: '5.5vw', height: '5.5vw', borderRadius: '1vw', overflow: 'hidden' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="text-wrap" style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '0.2vw', textAlign: 'left' }}>
                <h4 className="card-title" style={{ width: '100%' }}>{item.title}</h4>
                <p className="card-desc" style={{ width: '100%' }}>{item.desc}</p>
              </div>
            </div>
            <div className="hover-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
