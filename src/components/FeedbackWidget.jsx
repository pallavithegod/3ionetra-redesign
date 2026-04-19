import React, { useState, useEffect } from 'react';

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission here
    alert("Thank you for your feedback!");
    setFeedback('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Feedback Button */}
      <button 
        className="feedback-floating-btn" 
        onClick={() => setIsOpen(true)}
        aria-label="Give Feedback"
      >
        Feedback
      </button>

      {/* Sidebar Overlay using Specialty's classes */}
      <div 
        className={`features-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
        style={{ zIndex: 100000 }} /* Ensure it sits above perfectly */
      >
        <div className="features-overlay-content" onClick={(e) => e.stopPropagation()}>
          <button className="features-overlay-close" onClick={() => setIsOpen(false)}>×</button>
          
          <div className="features-overlay-info" style={{ width: '100%', height: '100%', padding: '4vw 2vw' }}>
            <div className="features-overlay-description" style={{ width: '100%' }}>
              <h2 style={{ color: 'var(--dark-blue)', marginBottom: '2vw', fontSize: '2.5vw' }}>We Value Your Feedback</h2>
              <p style={{ color: 'var(--dark-blue)', opacity: 0.7, marginBottom: '2vw' }}>
                Please let us know how we can improve your experience on our website.
              </p>
              
              <form onSubmit={handleSubmit} className="features-overlay-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5vw' }}>
                <div className="form-field">
                  <textarea 
                    placeholder="Type your feedback here..." 
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                    rows={6}
                    style={{ width: '100%', resize: 'vertical' }}
                  ></textarea>
                </div>
                <button type="submit" className="filled features-overlay-submit" style={{ backgroundColor: 'var(--orange)', color: 'var(--creme)' }}>
                  <span className="text-link">Submit Feedback</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
