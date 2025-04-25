import React from 'react';

const quotes = [
  "“Perhaps the most sophisticated senior-level gathering of its kind in the country right now”",
  "“Where tradfi meets digital.”",
  "“There’s great interest in digital assets and AI, but also a lot of hype. We need more unbiased analysis, which you're great in providing.”"
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      {quotes.map((q, i) => (
        <div key={i} className="testimonial">
          {q}
        </div>
      ))}
    </section>
  );
}
