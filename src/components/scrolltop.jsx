// src/components/ScrollToTop.js
import React, { useState, useEffect } from 'react';
const arrow = require('./vecteezy_top-arrow-icon-png-on-transparent-background_17785072.png');
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour afficher le bouton lorsque l'utilisateur fait défiler vers le bas
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} style={styles.scrollToTopButton}>
          <img src={arrow} alt="fleche" style={styles.arrow}/>
        </div>
      )}
    </div>
  );
};

const styles = {
  scrollToTopButton: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    cursor: 'pointer',
    zIndex: 1000,
  },
  arrow: {
    width: '4rem',
    filter: 'invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)',
  }
};

export default ScrollToTop;
