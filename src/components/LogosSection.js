import React from 'react';

// dynamically import all PNGs from the images folder
const importAll = (r) => r.keys().map(r);
const logos = importAll(require.context('./images', false, /\.png$/));

export default function LogosSection() {
  return (
    <section id="logos" className="section logos-section">
      <h2>Our Participants</h2>
      <div className="logos-grid">
        {logos.map((logo, idx) => (
          <div key={idx} className="logo-item">
            <img src={logo.default || logo} alt={`Partner logo ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
