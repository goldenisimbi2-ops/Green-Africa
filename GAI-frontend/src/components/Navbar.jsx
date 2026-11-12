import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gaiLogo from '../assets/gai-logo.jpg';
import './Navbar.css';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Projects', to: '/projects' },
  { label: 'Innovation', to: '/innovation' },
  { label: 'News & Stories', to: '/news' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img src={gaiLogo} alt="Green Africa Institute" className="brand-logo" />
          <span className="brand-text">Green Africa Institute</span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="mobile-cta">
              <Link to="/get-involved" className="btn btn-primary">
                Get Involved
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/get-involved" className="btn btn-primary desktop-cta">
          Get Involved
        </Link>

        <button
          className="hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
