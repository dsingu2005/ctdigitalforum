import React from 'react';
import { Clock, Users, Zap } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      Icon: Clock,
      title: 'Light-speed Insights',
      text:
        '21st-century digital technologies are reshaping our world faster than ever—so we meet monthly to stay ahead.',
    },
    {
      Icon: Users,
      title: 'Invitation-Only Network',
      text:
        'We convene leading institutions, investors, and innovators in an exclusive forum to debate digital impacts on money, markets, and culture.',
    },
    {
      Icon: Zap,
      title: 'Cutting-Edge Topics',
      text:
        'From blockchain & digital assets to AI, fintech, Web3, and quantum—if it’s digital, you’ll find it here.',
    },
  ];

  return (
    <section id="about" className="section about-us">
      <h2>About Us</h2>
      <div className="about-grid">
        {features.map(({ Icon, title, text }, i) => (
          <div key={i} className="about-card">
            <Icon className="about-icon" size={32} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

