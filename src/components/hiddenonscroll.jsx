import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const HideOnScroll = ({ children }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false); // État pour gérer l'affichage
  const elementRef = useRef(null);
  const buttonRef = useRef(null);

  const getScrollTop = () => {
    return document.documentElement.scrollTop || document.body.scrollTop;
  };

  const handleScroll = useCallback(() => {
    const currentScrollTop = getScrollTop();

    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      gsap.to(elementRef.current, { opacity: 0, y: -100, duration: 1, onComplete: () => setHidden(true) });
    } else if (currentScrollTop < lastScrollTop) {
      setHidden(false);
      gsap.to(elementRef.current, { opacity: 1, y: 0, duration: 0.5 });
    }

    setLastScrollTop(currentScrollTop);
  }, [lastScrollTop]);

  const handleClick = () => {
    gsap.to(elementRef.current, {
      opacity: 0,
      y: -100,
      duration: 1,
      onComplete: () => setHidden(true),
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (buttonRef.current) {
      buttonRef.current.addEventListener('click', handleClick);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (buttonRef.current) {
        buttonRef.current.removeEventListener('click', handleClick);
      }
    };
  }, [handleScroll]);

  return (
    !hidden && (
      <div ref={elementRef} style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        {children}
        <button ref={buttonRef} className="continue-btn">
          Continuer
        </button>
      </div>
    )
  );
};

export default HideOnScroll;
