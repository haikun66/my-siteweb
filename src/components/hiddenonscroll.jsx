// src/components/HideOnScroll.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const HideOnScroll = ({ children }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const elementRef = useRef(null);

  const getScrollTop = () => {
    return document.documentElement.scrollTop || document.body.scrollTop;
  };

  const handleScroll = useCallback(() => {
    const currentScrollTop = getScrollTop();

    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      // L'utilisateur défile vers le bas et dépasse 100px
      gsap.to(elementRef.current, { opacity: 0, y: -100, duration: 0.5 });
    } else if (currentScrollTop < lastScrollTop) {
      // L'utilisateur défile vers le haut
      gsap.to(elementRef.current, { opacity: 1, y: 0, duration: 0.5 });
    }

    setLastScrollTop(currentScrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div ref={elementRef} style={{zIndex: 10 }}>
      {children}
    </div>
  );
};

export default HideOnScroll;
