import React, { useState, useEffect, useRef } from 'react';
import './style/App.scss';
import Home from './section/Home/Home';
import Presentation from "./section/Presentation/Presentation";
import Header from './components/Header/Header';
import Services from './section/Services/Services';
import About from './section/About/About';
import Contact from './section/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const headerRef = useRef(null);
  const websiteRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && websiteRef.current) {
        const { top } = headerRef.current.getBoundingClientRect();
        const { top: websiteTop } = websiteRef.current.getBoundingClientRect();
        setIsHeaderFixed(top <= 0 && top >= websiteTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Home />
      <div className='website' ref={websiteRef}>
        <div ref={headerRef} className={`header ${isHeaderFixed ? 'fixed' : ''}`}>
          <Header />
        </div>
        <Presentation />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;


