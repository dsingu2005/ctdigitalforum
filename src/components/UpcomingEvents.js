import React from 'react';
import previewImg from './luma-preview.png';

export default function UpcomingEvents() {
    return (
      <section id="upcoming" className="section">
        <h2>Upcoming Event</h2>
        <br></br>
  
        <a
          href="https://lu.ma/y6cjuv11"
          target="_blank"
          rel="noopener noreferrer"
          className="event-card"
        >
          <img
            src={previewImg}
            alt="Digital Future Week Preview"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </a>
  
        <p style={{ textAlign: 'center', marginTop: '12px' }}>
          Click the preview above to view full details on lu.ma
        </p>
      </section>
    );
  }
  