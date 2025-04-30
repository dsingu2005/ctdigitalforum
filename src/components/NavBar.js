import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const sections = ['home', 'about', 'linkedin', 'past-events', 'upcoming', 'testimonials'];
  const [popped, setPopped] = useState(true);
  const [open, setOpen] = useState(false);

  // pop-on-load, then settle on scroll
  useEffect(() => {
    const onScroll = () => {
      setPopped(false);
      window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setOpen(o => !o);

  return (
    <nav className={`navbar ${popped ? 'pop' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">CT Digital Forum</div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {sections.map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
              >
                {id
                  .split('-')
                  .map(w => w[0].toUpperCase() + w.slice(1))
                  .join(' ')}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

