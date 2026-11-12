import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import gaiLogo from '../assets/gai-logo.jpg';
import './Footer.css';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Projects', to: '/projects' },
  { label: 'Innovation', to: '/innovation' },
  { label: 'News & Stories', to: '/news' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

const involvedLinks = [
  { label: 'Partner With Us', to: '/get-involved#partner' },
  { label: 'Volunteer', to: '/get-involved#volunteer' },
  { label: 'Support Our Work', to: '/get-involved#support' },
];

// Inline brand icons (lucide-react no longer ships social/brand icons)
const FacebookIcon = (p) => (
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3V11H9v3h2.3v7h2.2z"/></svg>
);
const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
);
const LinkedInIcon = (p) => (
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="currentColor" aria-hidden="true"><path d="M6.9 8.6H4V20h2.9V8.6zM5.4 7.3a1.7 1.7 0 100-3.4 1.7 1.7 0 000 3.4zM20 13.4c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5 1-2.9 1.6V8.6H10.4V20h2.9v-6c0-1.3.6-2.1 1.8-2.1 1.1 0 1.6.8 1.6 2.1v6H20v-6.6z"/></svg>
);
const XIcon = (p) => (
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="currentColor" aria-hidden="true"><path d="M17.8 3h3l-6.6 7.6L22 21h-6.1l-4.8-6.3L5.6 21h-3l7.1-8.1L2 3h6.3l4.3 5.7L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"/></svg>
);
const YouTubeIcon = (p) => (
  <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z"/></svg>
);

const socials = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/dodoce123' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/dodoce123' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dodoce123' },
  { icon: XIcon, label: 'X (Twitter)', href: '#' },
  { icon: YouTubeIcon, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <img src={gaiLogo} alt="Green Africa Institute" className="brand-logo" />
            <span>Green Africa Institute</span>
          </Link>
          <p>
            Protecting nature, strengthening communities and building climate
            resilience for a greener future.
          </p>
          <div className="socials">
            {socials.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"><Icon size={18} /></a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Get involved">
          <h4>Get Involved</h4>
          <ul>
            {involvedLinks.map((l) => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <address>
          <h4>Contact</h4>
          {/* Editable placeholder contact details */}
          <p><MapPin size={15} /> Gicumbi, Rwanda</p>
          <p><Mail size={15} /> greenafricainstitute@gmail.com</p>
          <p><Phone size={15} /> +250 780 767 464</p>
        </address>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Green Africa Institute. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
