import React from 'react';
const arrow = require('./vecteezy_top-arrow-icon-png-on-transparent-background_17785072.png');

const ScrollToTop = ({ showButton, onScrollToTopClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if (onScrollToTopClick) {
      onScrollToTopClick(); // Appelle le callback pour réafficher l'élément
    }
  };

  return (
    <div className="scroll-to-top">
      {showButton && (
        <div onClick={scrollToTop} style={styles.scrollToTopButton}>
          <img src={arrow} alt="fleche" style={styles.arrow} />
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
