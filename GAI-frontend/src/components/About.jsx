import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './About.css';

const points = [
  'Ecosystem restoration across forests, wetlands and watersheds',
  'Building climate resilience through nature-based solutions',
  'Community-led conservation and sustainable livelihoods',
  'Environmental research and Indigenous knowledge',
  'Education and training for young environmental stewards',
  'Partnerships with government, NGOs and researchers',
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80"
            alt="Community members planting trees on Rwanda's green hills"
            loading="lazy"
          />
        </div>
        <div className="about-text">
          <h2>About Green Africa Institute</h2>
          <p className="lead">
            Green Africa Institute (GAI) is a Rwanda-based environmental and climate
            organization working to protect nature while improving community livelihoods
            and resilience.
          </p>
          <ul>
            {points.map((p) => (
              <li key={p}><CheckCircle2 size={18} /> {p}</li>
            ))}
          </ul>
          <Link to="/about" className="btn btn-dark">Learn More About GAI <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
