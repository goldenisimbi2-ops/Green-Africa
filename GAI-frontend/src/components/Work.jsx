import { Link } from 'react-router-dom';
import { TreePine, Globe2, Users, Microscope, BookOpen, Handshake, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { workAreas } from '../data';
import './Work.css';

const icons = { TreePine, Globe2, Users, Microscope, BookOpen, Handshake };

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="container">
        <SectionTitle
          title="Our Work"
          subtitle="Six interconnected areas of action that link healthy ecosystems with resilient communities."
        />
        <div className="work-grid">
          {workAreas.map((area) => {
            const Icon = icons[area.icon];
            return (
              <Link to="/our-work" className="work-card" key={area.id} aria-label={area.title}>
                <div className="work-img">
                  <img src={area.img} alt={area.alt} loading="lazy" />
                </div>
                <div className="work-body">
                  <span className="work-icon"><Icon size={20} /></span>
                  <h3>{area.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link to="/projects" className="btn btn-dark">View All Projects <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
