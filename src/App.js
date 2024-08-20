import React, { useState, useRef } from 'react';
import FirstPage from './pages/firstpages/first-page';
import HideOnScroll from './components/hiddenonscroll';
import ScrollToTop from './components/scrolltop';
import Home from './pages/acceuil/home';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const hideOnScrollRef = useRef(null); // Référence pour HideOnScroll

  // Fonction appelée lorsque l'animation est terminée
  const handleAnimationComplete = () => {
    setShowScrollButton(true); // Affiche le bouton lorsque l'animation est terminée
  };

  // Fonction appelée lorsque le bouton Scroll to Top est cliqué
  const handleScrollToTopClick = () => {
    setShowScrollButton(false); // Cache le bouton lorsque l'utilisateur clique dessus
    if (hideOnScrollRef.current) {
      hideOnScrollRef.current.showElement(); // Réaffiche le composant FirstPage
    }
  };

  return (
    <div className="App">
      <HideOnScroll ref={hideOnScrollRef} onAnimationComplete={handleAnimationComplete}>
        <FirstPage />
      </HideOnScroll>
      <Home />
      <ScrollToTop
        showButton={showScrollButton}
        onScrollToTopClick={handleScrollToTopClick}
      />
    </div>
  );
}

export default App;
