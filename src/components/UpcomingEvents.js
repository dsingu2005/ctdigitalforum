// src/components/UpcomingEvents.js
import React from 'react';
import previewImg from './luma-preview.png';

export default function UpcomingEvents() {
  return (
    <section id="upcoming" className="section">
      <h2>Upcoming Event</h2>
      <br />

      <a
        href="https://lu.ma/y6cjuv11"
        target="_blank"
        rel="noopener noreferrer"
        className="event-card"
      >
        <img
          src={previewImg}
          alt="Digital Future Fest Preview"
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </a>

      <div style={{ maxWidth: 800, margin: '24px auto', color: '#ffffff', lineHeight: 1.6 }}>
        <p style={{ textAlign: 'center', fontWeight: '600' }}>
          Click the preview above to buy tickets and learn more about Digital Future Fest on Luma!
        </p>
        <p>
          Digital FutureFest 2025 marks the debut of Connecticut’s leading event for executives,
          investors, and visionaries charting the course of the digital landscape. Hosted on
          <strong> Wednesday, June 4th</strong> at the University of Connecticut Stamford Campus
          (just 45 minutes from NYC), this all-day gathering brings together top minds to explore
          the latest developments in blockchain, digital assets, AI, fintech, Web3, and quantum
          computing.
        </p><br></br>
        <p>
          Attendees will gain cutting-edge insights from world-class speakers, participate in
          interactive workshops and panels, and enjoy high-level networking in a dynamic
          environment. Ideal for financial professionals, tech leaders, policymakers, and
          entrepreneurs, Digital FutureFest is designed to deliver actionable knowledge and
          foster meaningful discussion about the rapidly transforming digital economy.
        </p><br></br>
        <p style={{ textAlign: 'center', fontWeight: '600' }}>
          Tickets are available to all interested parties—secure your spot today!
        </p>
      </div>
    </section>
  );
}
