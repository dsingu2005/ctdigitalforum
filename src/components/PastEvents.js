// src/components/PastEvents.js
import React, { useState } from 'react';

const EVENTS = [
  {
    title: 'CT Digital Forum "Midnight Dorm" Edition',
    date: 'Mar 28, 2025, 8:30 AM',
    link: 'https://www.linkedin.com/events/march28-ctdigitalforum-midnight7307458689718714368/', 
  },
  {
    title: 'A New Day for Capital Markets / Digital Assets Outlook',
    date: 'Feb 21, 2025, 8:30 AM',
    link: 'https://www.linkedin.com/events/inperson-ctdigitalforum-capital7295243136199507970/',
  },
  {
    title: 'Future of AI with Microsoft’s Jason Morris (Online)',
    date: 'Feb 7, 2025, 12:00 PM',
    link: 'https://www.linkedin.com/events/ctdigitalforum-futureofaiwithmi7290397010099068930/',
  },
  {
    title: 'January 24th "Futurama" Edition',
    date: 'Jan 24, 2025, 8:30 AM',
    link: 'https://www.linkedin.com/events/ctdigitalforumjanuary24th-futur7285451502851170304/',
  },
  {
    title: 'Holiday Party: In Person ',
    date: 'Dec 12, 2024, 6:00 PM',
    link: 'https://www.linkedin.com/events/ctdigitalforumholidayevent-appl7266960196965429248/',
  },
  {
    title: 'Beyond the Digital Horizon: AI, XR & the Metaverse',
    date: 'Nov 4, 2024, 1:00 PM',
    link: 'https://www.linkedin.com/events/beyondthedigitalhorizon-theoppo7252807650868957184/',
  },
];

const LINKEDIN_EVENTS_URL =
  'https://www.linkedin.com/company/ct-digital-forum/events/';

export default function PastEvents() {
  // stage 0: show 3 events; stage 1: show 6; stage 2: redirect
  const [stage, setStage] = useState(0);

  // determine how many to show
  const displayed =
    stage === 0 ? EVENTS.slice(0, 3) : EVENTS.slice(0, 6);

  const handleButton = () => {
    if (stage === 0) {
      setStage(1);
    } else {
      // redirect to LinkedIn
      window.open(LINKEDIN_EVENTS_URL, '_blank');
    }
  };

  const buttonText =
    stage === 0 ? 'Show More ▼' : 'View All on LinkedIn →';

  return (
    <section id="past-events" className="section">
      <h2>Past Events</h2>

      <div className="events-grid">
        {displayed.map((ev, i) => (
          <a
            key={i}
            href={ev.link}
            target="_blank"
            rel="noopener noreferrer"
            className="event-box"
          >
            <h3>{ev.title}</h3>
            <p>{ev.date}</p>
          </a>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <button
          className="show-more-btn"
          onClick={handleButton}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

