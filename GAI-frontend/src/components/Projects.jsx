import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { ProjectCard } from './Cards';
import { projects } from '../data';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionTitle
          title="Our Projects"
          subtitle="Practical projects on the ground that restore nature and strengthen communities."
        />
        <div className="projects-grid">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link to="/projects" className="btn btn-dark">View All Projects <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
