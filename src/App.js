// src/App.js
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import LinkedinSection from './components/LinkedinSection';
import PastEvents from './components/PastEvents';
import UpcomingEvents from './components/UpcomingEvents';
import Testimonials from './components/Testimonials';
import LogosSection from './components/LogosSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Footer from './components/Footer';

function App() {
  const { pathname, hash } = useLocation();

  // scroll-reveal on route/section changes
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.section').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname, hash]);

  // smooth scroll on hash change (only on home/)
  useEffect(() => {
    if (pathname === '/' && hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <header className="section header-intro" id="home">
                <h1>CT Digital Forum</h1>
                <p>Where Connecticut’s leaders in finance, tech & culture converge.</p>
              </header>

              <AboutUs />
              <LinkedinSection />
              <PastEvents />
              <UpcomingEvents />
              <Testimonials />
              <LogosSection />

              <Footer />
            </>
          }
        />

        {/* Privacy Policy page */}
        <Route
          path="/privacy"
          element={
            <>
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        {/* Terms of Use page */}
        <Route
          path="/terms"
          element={
            <>
              <TermsOfUse />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
