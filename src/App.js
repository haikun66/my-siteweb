import './App.css';
import FirstPage from './pages/firstpages/first-page';
import HideOnScroll from './components/hiddenonscroll';
import ScrollToTop from './components/scrolltop';
import Home from './pages/acceuil/home';

function App() {
  return (
    <div className="App">
      <HideOnScroll>
        <FirstPage className="top" />
      </HideOnScroll>
      <Home />
      <ScrollToTop />
    </div>
  );
}

export default App;
