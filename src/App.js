import React, { useEffect } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import LinkedinSection from './components/LinkedinSection';
import PastEvents from './components/PastEvents';
import UpcomingEvents from './components/UpcomingEvents';
import Testimonials from './components/Testimonials';

function App() {
  useEffect(() => {
    // scroll‐reveal for all .section
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.section').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="App">
      <NavBar />

      <header className="section header-intro" id="home">
        <h1>CT Digital Forum</h1>
        <p>Where Connecticut’s leaders in finance, tech & culture converge.</p>
      </header>

      <AboutUs />
      <LinkedinSection />
      <PastEvents />
      <UpcomingEvents />
      <Testimonials />

      <footer className="section">
        © {new Date().getFullYear()} CT Digital Forum. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
