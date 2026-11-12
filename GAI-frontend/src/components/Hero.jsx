import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gaiLogo from '../assets/gai-logo.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <img src={gaiLogo} alt="Green Africa Institute" className="hero-logo" />
        <p className="hero-tag">🌱 Restoring Nature. Improving Lives. Building Resilience.</p>
        <h1>
          <span>Protecting Nature,</span><br />
          <span className="accent">Empowering Communities.</span>
        </h1>
        <p className="hero-text">
          Green Africa Institute (GAI) restores ecosystems, strengthens climate resilience,
          supports community livelihoods, conducts environmental research, and empowers
          communities to become active stewards of nature.
        </p>
        <div className="hero-buttons">
          <Link to="/about" className="btn btn-primary">Learn More About Us <ArrowRight size={18} /></Link>
          <Link to="/our-work" className="btn btn-outline">Our Work <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
