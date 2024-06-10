// src/components/ScrollToTop.js
import React, { useState, useEffect } from 'react';

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
          ↑
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
    backgroundColor: 'black',
    color: 'white',
    padding: '1rem',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 1000,
  }
};

export default ScrollToTop;
