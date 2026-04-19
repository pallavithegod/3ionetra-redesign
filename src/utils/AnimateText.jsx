import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './SplitTextShim';

gsap.registerPlugin(ScrollTrigger);

export default function AnimateText({ 
  children, 
  type = 'lines', // 'lines', 'words', or 'chars'
  delay = 0,
  duration = 1,
  className = '',
  ease = 'power4.out',
  stagger = 0.05
}) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Slight delay to ensure fonts are loaded and layout is stable
    const cleanup = setTimeout(() => {
      const targetElement = containerRef.current.children.length === 1 ? containerRef.current.children[0] : containerRef.current;
      const split = new SplitText(targetElement, { type });
      const target = type === 'lines' ? split.lines : type === 'words' ? split.words : split.chars;
      
      if (type === 'lines' && split.lines[0]?.parentElement) {
        gsap.set(split.lines[0].parentElement, { overflow: 'visible' });
        split.lines.forEach(line => {
          gsap.set(line, { overflow: 'hidden' });
          const innerWrapper = document.createElement('div');
          innerWrapper.innerHTML = line.innerHTML;
          line.innerHTML = '';
          line.appendChild(innerWrapper);
        });
      }

      gsap.fromTo(type === 'lines' ? targetElement.querySelectorAll('div > div') : target, 
        { 
          y: '100%', 
          opacity: 0, 
          rotateX: type === 'lines' ? 50 : 0 
        },
        {
          y: '0%',
          opacity: 1,
          rotateX: 0,
          duration,
          ease,
          stagger,
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          }
        }
      );
      
    }, 100);

    return () => clearTimeout(cleanup);
  }, [type, delay, duration, ease, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
