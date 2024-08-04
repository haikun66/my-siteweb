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

    console.log('Scroll event triggered');
    console.log('currentScrollTop:', currentScrollTop);
    console.log('lastScrollTop:', lastScrollTop);

    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      console.log('Scrolling down');
      gsap.to(elementRef.current, { opacity: 0, y: -100, duration: 1 });
    } else if (currentScrollTop < lastScrollTop) {
      console.log('Scrolling up');
      gsap.to(elementRef.current, { opacity: 1, y: 0, duration: 0.5 });
    }

    setLastScrollTop(currentScrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    console.log('Adding scroll event listener');
    window.addEventListener('scroll', handleScroll);
    return () => {
      console.log('Removing scroll event listener');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div ref={elementRef} style={{ position: 'sticky', top: 0, zIndex: 10 }}>
      {children}
    </div>
  );
};

export default HideOnScroll;
