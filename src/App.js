import './App.css';  
import React, { useState } from 'react';
import FirstPage from './pages/firstpages/first-page';
import HideOnScroll from './components/hiddenonscroll';
import ScrollToTop from './components/scrolltop';
import Home from './pages/acceuil/home';

function App() {
  
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleAnimationComplete = () => {
    setShowScrollButton(true);
  };

  const handleScrollToTopClick = () => {
    setShowScrollButton(false);
  };
  return (
    <div className="App">
      {/* Composant HideOnScroll qui gère l'animation et la visibilité de FirstPage */}
      <HideOnScroll onAnimationComplete={handleAnimationComplete} onScrollToTopClick={handleScrollToTopClick}>
        <FirstPage className="top" />
      </HideOnScroll>
      {/* Composant Home toujours visible */}
      <Home />
      {/* Composant ScrollToTop qui gère la visibilité du bouton et les clics */}
      <ScrollToTop
        showButton={showScrollButton}
        onScrollToTopClick={handleScrollToTopClick}
      />
    </div>
  );
}

export default App;
