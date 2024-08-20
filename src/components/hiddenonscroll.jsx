import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { gsap } from 'gsap';

const HideOnScroll = forwardRef(({ children, onAnimationComplete }, ref) => {
  const [hidden, setHidden] = useState(false);
  const elementRef = useRef(null);

  // Méthode pour cacher le composant
  const hideElement = () => {
    gsap.to(elementRef.current, {
      opacity: 0,
      y: -100,
      duration: 1,
      onComplete: () => {
        setHidden(true);
        if (onAnimationComplete) onAnimationComplete();
      },
    });
  };

  // Méthode pour réafficher le composant
  const showElement = () => {
    setHidden(false);
    gsap.to(elementRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    });
  };

  // Exposer la méthode showElement à l'extérieur via la référence
  useImperativeHandle(ref, () => ({
    showElement,
  }));

  return (
    !hidden && (
      <div ref={elementRef} style={{ position: 'relative', top: 0, zIndex: 10 }}>
        {children}
        <button onClick={hideElement} className="continue-btn">
          Continuer
        </button>
      </div>
    )
  );
});

export default HideOnScroll;
