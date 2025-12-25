import { useState } from 'react';
import About from './About';
import Privacy from './Privacy';
import './Footer.css';

function Footer() {
  const [showAbout, setShowAbout] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2025 Hub. Built with React & Vite.</p>
          <div className="footer-links">
            <button className="footer-link-btn" onClick={() => setShowAbout(true)}>About</button>
            <button className="footer-link-btn" onClick={() => setShowPrivacy(true)}>Privacy</button>
            <a 
              href="https://www.linkedin.com/in/shrey-tyagi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
      {showAbout && <About onClose={() => setShowAbout(false)} />}
      {showPrivacy && <Privacy onClose={() => setShowPrivacy(false)} />}
    </>
  );
}

export default Footer;

