import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [popped, setPopped] = useState(true);
  const sections = ['home', 'about', 'linkedin', 'past-events', 'upcoming', 'testimonials'];

  useEffect(() => {
    const onScroll = () => {
      setPopped(false);
      window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${popped ? 'pop' : ''}`}>
      <ul>
        {sections.map(id => (
          <li key={id}>
            <a href={`#${id}`}>
              {id
                .split('-')
                .map(w => w[0].toUpperCase() + w.slice(1))
                .join(' ')}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
