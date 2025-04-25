import React from 'react';
import { Linkedin } from 'lucide-react';

export default function LinkedinSection() {
  return (
    <section id="linkedin" className="section linkedin-section">
      <div className="linkedin-content">
        <Linkedin size={48} className="linkedin-icon" />
        <div>
          <h2>Join Our LinkedIn Community</h2>
          <p>
            Stay in the loop on upcoming CT Digital Forum events, get exclusive
            recaps, and network with fellow digital-technology leaders.
          </p>
          <a
            href="https://www.linkedin.com/company/ct-digital-forum"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn"
          >
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
