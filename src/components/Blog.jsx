import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimateText from '../utils/AnimateText';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const ref = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.boxes-slider .column', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.boxes-slider',
          start: 'top 85%'
        }
      }
    );
  }, []);

  const posts = [
    {
      title: "How to Build a Regular Spiritual Practice at Home",
      desc: "Creating a dedicated space for mindfulness and daily reflection is the key to inner clarity. Learn how a simple Puja corner enhances everyday focus and peace.",
      img: "https://my3ionetra.com/cdn/shop/articles/Copy_of_GaneshChaturthi_WebsiteBanner_Desktop.png?v=1725516086&width=1100",
      tags: ["Guides"],
      link: "https://my3ionetra.com/blogs/3ioprasadam-blogs/what-should-be-placed-inside-the-temple"
    },
    {
      title: "The Art of Cleansing: Removing Negative Energy with Sage",
      desc: "An exhaustive guide exploring how sacred incense and pure cleansing tools purify your home environment rapidly, bringing a renewed sense of emotional balance.",
      img: "https://my3ionetra.com/cdn/shop/articles/What_if_diya_blows_off_unexpectedly.png?v=1733220455&width=1100",
      tags: ["Wellness"],
      link: "https://my3ionetra.com/blogs/3ioprasadam-blogs"
    },
    {
      title: "Why Sound Healing Provides Immense Stress Relief",
      desc: "Discover how specifically tuned frequencies act on the parasympathetic nervous system, drastically decreasing anxiety strings in everyday life.",
      img: "https://my3ionetra.com/cdn/shop/articles/1.jpg?v=1733140502&width=1100",
      tags: ["News"],
      link: "https://my3ionetra.com/blogs/3ioprasadam-blogs"
    },
    {
      title: "Designing the Perfect Altar – Step by Step Directions",
      desc: "Where should your statues face? What materials hold pure energy the longest? We sit down with experts to help you construct a flawless ritual table.",
      img: "https://my3ionetra.com/cdn/shop/articles/Benefits_of_Chanting_Mantras.jpg?v=1732688756&width=1100",
      tags: ["Guides"],
      link: "https://my3ionetra.com/blogs/3ioprasadam-blogs"
    }
  ];

  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.5;
      sliderRef.current.scrollBy({ left: direction === 'next' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="light-theme" ref={ref}>
      <div className="container">
        <div className="indicator"><span>from our blog</span></div>
        <div className="section-header">
          <div className="headline">
            <AnimateText type="lines">
              <h3>Stay tuned with all recent updates</h3>
            </AnimateText>
          </div>
          <div className="arrows">
            <div id="blog-prev" className="arrow-left" onClick={() => slide('prev')}>
              <img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0e3_arrow-left.svg" loading="lazy" alt="" />
            </div>
            <div id="blog-next" className="arrow-right" onClick={() => slide('next')}>
              <img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0e0_arrow-right.svg" loading="lazy" alt="" />
            </div>
          </div>
        </div>
        <div className="boxes-slider-wrapper w-dyn-list">
          <div role="list" className="boxes-grid w-dyn-items boxes-slider" ref={sliderRef} style={{ overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}>
            {posts.map((post, idx) => (
              <div key={idx} role="listitem" className="column w-dyn-item" style={{ scrollSnapAlign: 'start' }}>
                <div className="blog-box">
                  <a href={post.link} className="link-box w-inline-block"></a>
                  <div className="blog-image img-block">
                    <img src={post.img} loading="lazy" alt={post.title} />
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items" style={{ display: 'flex', gap: '5px' }}>
                      <div role="listitem" className="tag w-dyn-item">
                        <div>Show All</div>
                      </div>
                      {post.tags.map((tag, tIdx) => (
                        <div key={tIdx} role="listitem" className="tag w-dyn-item">
                          <div>{tag}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h5>{post.title}</h5>
                  <p>{post.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
