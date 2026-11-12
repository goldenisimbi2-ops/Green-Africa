import { Link } from 'react-router-dom';
import { ArrowRight, Drone, Smartphone, Brain, Sprout } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { innovations } from '../data';
import './Innovation.css';

const icons = { Drone, Smartphone, Brain, Sprout };

export default function Innovation() {
  return (
    <section className="innovation" id="innovation">
      <div className="container">
        <SectionTitle
          title="Innovation"
          subtitle="Pioneering new approaches to restore ecosystems and strengthen community resilience."
        />
        <div className="innovation-grid">
          {innovations.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article className="innovation-card" key={item.id}>
                <span className="innovation-icon"><Icon size={28} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to="/innovation" className="innovation-link">Explore <ArrowRight size={15} /></Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
