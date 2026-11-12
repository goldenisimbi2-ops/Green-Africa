import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, Globe2, Users, Microscope, BookOpen, Handshake } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { workAreas } from '../data';
import './WorkPage.css';

const icons = {
  TreePine,
  Globe2,
  Users,
  Microscope,
  BookOpen,
  Handshake,
};

export default function Work() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Six interconnected areas of action linking healthy ecosystems with resilient communities."
        img="about.jpg"
      />

      <section className="work-page">
        <div className="container">
          {workAreas.map((area, i) => {
            const Icon = icons[area.icon];
            const reversed = i % 2 === 1;
            return (
              <article className={`work-row reveal ${reversed ? 'reversed' : ''}`} key={area.id} id={area.id}>
                <div className="work-row-img">
                  <img src={area.img} alt={area.alt} loading="lazy" />
                </div>
                <div className="work-row-body">
                  <span className="card-icon"><Icon size={26} /></span>
                  <h2>{area.title}</h2>
                  <p>{area.text}</p>
                  <Link to="/projects" className="btn btn-dark">Learn More <ArrowRight size={18} /></Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Want to See This Work in Action?"
        text="Explore our projects on the ground across Rwanda."
        primary={{ label: 'View Projects', to: '/projects' }}
        secondary={{ label: 'Get Involved', to: '/get-involved' }}
      />
    </>
  );
}
