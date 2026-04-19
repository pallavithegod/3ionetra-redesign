import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import EventCategories from './components/EventCategories'
import About from './components/About'
import Marquee from './components/Marquee'
import Products from './components/Products'
import Specialty from './components/Specialty'
import Testimonials from './components/Testimonials'
import Approach from './components/Approach'
import Blog from './components/Blog'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Reasons from './components/Reasons'
import FeedbackWidget from './components/FeedbackWidget'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis
    if (!window.Lenis) return;
    
    const lenis = new window.Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Hero />
        <EventCategories />
        <Approach />
        <Specialty />
        <About />
        {/* <Products /> */}
        <Testimonials />
        <Reasons />
        {/* <Blog /> */}
        <Marquee text="Begin Your Wellness Journey Today" dark={false} />
        <FinalCTA />
        <Footer />
      </div>
      <FeedbackWidget />
    </>
  )
}

export default App
