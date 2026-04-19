import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimateText from '../utils/AnimateText';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const ref = useRef(null);
  
  useEffect(() => {
    gsap.fromTo('.product-reveal', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.two-columns',
          start: 'top 85%'
        }
      }
    );
  }, []);

  const products = [
    {
      name: 'FZ94 Evo',
      tags: ['All', 'Specialty Roasters'],
      img: 'https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/6980673191af575b5eeae6fa_fz94_white_3_0002_converted.avif',
      link: '/products/fz94-evo'
    },
    {
      name: 'Silon ZR7',
      tags: ['All', 'Commercial Roasters'],
      img: 'https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/69839d6df6330eeaafe59b2f_silon_black_shot_0000_converted.avif',
      link: '/products/silon-zr7'
    },
    {
      name: 'Ghibli R90',
      tags: ['All', 'Industrial Roasters'],
      img: 'https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/698715c880c8acf315d9bb97_ghibli_90_new_anim_0001_converted.avif',
      link: '/products/ghibli-r90'
    },
    {
      name: 'Lab Extractor',
      tags: ['All', 'Accessories'],
      img: 'https://cdn.prod.website-files.com/6978cf5d8e122e23793db0d1/69871bac1f79f669b33ed332_final_transparent_2_0001_converted.avif',
      link: '/products/lab-extractor'
    }
  ];

  return (
    <section className="light-theme" ref={ref}>
      <div className="grid one-five">
        <div className="indicator"><span>Our Products</span></div>
        <div className="products-grid w-dyn-list">
          <div role="list" className="two-columns w-dyn-items">
            {products.map((product, idx) => (
              <div key={idx} role="listitem" className="w-dyn-item product-reveal">
                <div className="column">
                  <a href={product.link} className="link-box w-inline-block"></a>
                  <div className="product-image">
                    <img src={product.img} loading="lazy" alt={product.name} />
                  </div>
                  <div className="product-name"><span>{product.name}</span></div>
                  <div className="w-dyn-list">
                    <div role="list" className="product-tags w-dyn-items">
                      {product.tags.map((tag, tIdx) => (
                        <div key={tIdx} role="listitem" className="tag w-dyn-item"><span>{tag}</span></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-cta">
          <a href="/catalog" className="text-link w-inline-block">
            <div className="flex">
              <AnimateText type="lines">
                <h2>See all products</h2>
              </AnimateText>
              <img src="https://cdn.prod.website-files.com/6978cf5d8e122e23793db0cd/6978cf5d8e122e23793db0dd_arrow-black.svg" loading="lazy" alt="" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
