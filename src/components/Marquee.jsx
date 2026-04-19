import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Marquee({ text = "Beyond your expectations", dark = false, speed = 20, style = {} }) {
  const scrollRef = useRef(null);

  // Default color logic replicating old themes
  const bgColor = dark ? "#4c1e1b" : "var(--beige)";
  const textColor = dark ? "var(--creme)" : "var(--dark-blue)";

  // If no custom padding is provided, use standard 4vw 0 padding. Look in `style` for overrides.
  const paddingStyle = style.padding !== undefined ? style.padding : '4vw 0';

  useEffect(() => {
    if (!scrollRef.current) return;

    const collections = scrollRef.current.children;
    
    gsap.to(collections, {
      xPercent: -100,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
  }, [speed]);

  return (
    <section 
      className="marquee-section"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: paddingStyle,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        ...style
      }}
    >
      <div className="marquee-wrap">
        <div className="marquee-scroll" ref={scrollRef}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="marquee-collection">
              <div className="big-type" style={{ fontSize: '7vw' }}>
                <div>{text}&nbsp;&nbsp;</div>
                <div style={{ opacity: 0.2, color: textColor }}>/&nbsp;&nbsp;</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
