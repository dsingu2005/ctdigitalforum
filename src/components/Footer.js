// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-nav">
        <Link to="/privacy" className="footer-link">
          Privacy Policy
        </Link>
        <Link to="/terms" className="footer-link">
          Terms of Use
        </Link>
      </div>
      <p>© {new Date().getFullYear()} Crypto Forum Group LLC. All rights reserved.</p>
    </footer>
  );
}

