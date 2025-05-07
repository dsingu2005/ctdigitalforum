import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const sections = ['home','about','linkedin','past-events','upcoming','testimonials'];
  const [popped, setPopped] = useState(true);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // pop-on-load
  useEffect(() => {
    const onScroll = () => {
      setPopped(false);
      window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  return (
    <nav className={`navbar ${popped ? 'pop' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="footer-link">CT Digital Forum</Link>
        </div>
        <button className="hamburger" onClick={()=>setOpen(o=>!o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {sections.map(id => (
            <li key={id}>
              <Link
                to={`/#${id}`}
                className="nav-link"
              >
                {id.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
