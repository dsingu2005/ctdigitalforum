import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import LinkedinSection from './components/LinkedinSection';
import PastEvents from './components/PastEvents';
import UpcomingEvents from './components/UpcomingEvents';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse   from './components/TermsOfUse';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Re-attach observer on every route change
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);

  return (
    <div className="App">
      <NavBar />

      <Routes>
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

              <Footer />
            </>
          }
        />

        <Route
          path="/privacy"
          element={
            <>
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

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
