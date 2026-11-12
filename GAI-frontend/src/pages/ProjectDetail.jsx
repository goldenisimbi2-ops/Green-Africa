import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Target, ListChecks, Users2, Leaf, Images } from 'lucide-react';
import { projects } from '../data';
import CTASection from '../components/CTASection';
import { ProjectCard } from '../components/Cards';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="detail-missing">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Project Not Found</h1>
          <p>This project does not exist or has been removed.</p>
          <Link to="/projects" className="btn btn-dark"><ArrowLeft size={18} /> Back to Projects</Link>
        </div>
      </section>
    );
  }

  // Placeholder gallery — replace with real project photos.
  const gallery = [
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80', alt: 'Project site landscape' },
    { src: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=600&q=80', alt: 'Community members working together' },
    { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80', alt: 'Green hills of the project area' },
  ];

  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      <section className="project-hero">
        <img src={project.img} alt={project.alt} />
        <div className="project-hero-overlay">
          <div className="container">
            <div className="project-badges">
              <span className="project-category">{project.category}</span>
              {project.status && <span className="project-status">{project.status}</span>}
            </div>
            <h1>{project.title}</h1>
            <p><MapPin size={16} /> {project.location}</p>
          </div>
        </div>
      </section>

      <section className="project-detail">
        <div className="container detail-grid">
          <article className="detail-main reveal">
            <h2>Project Overview</h2>
            <p>{project.overview}</p>

            <h3><Target size={20} /> Objectives</h3>
            <ul>
              {project.objectives.map((o) => <li key={o}>{o}</li>)}
            </ul>

            <h3><ListChecks size={20} /> Key Activities</h3>
            <ul>
              {project.activities.map((a) => <li key={a}>{a}</li>)}
            </ul>

            <h3><Users2 size={20} /> Community Involvement</h3>
            <p>{project.community}</p>

            <h3><Leaf size={20} /> Environmental Impact</h3>
            <p>{project.impact}</p>

            <h3><Images size={20} /> Project Gallery</h3>
            <div className="gallery">
              {gallery.map((g) => (
                <img key={g.src} src={g.src} alt={g.alt} loading="lazy" />
              ))}
            </div>
          </article>

          <aside className="detail-side reveal">
            <Link to="/projects" className="btn btn-dark back-btn"><ArrowLeft size={18} /> Back to Projects</Link>
            <div className="side-card">
              <h4>Project Details</h4>
              <p><strong>Location:</strong> {project.location}</p>
              <p><strong>Category:</strong> {project.category}</p>
              <p><strong>Status:</strong> {project.status || 'Ongoing (placeholder)'}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="related-projects">
        <div className="container">
          <SectionTitle title="Related Projects" />
          <div className="projects-grid">
            {related.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in Supporting This Work?"
        text="Join Green Africa Institute in delivering restoration and resilience on the ground."
        primary={{ label: 'Get Involved', to: '/get-involved' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />
    </>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="section-title reveal">
      <h2>{title}</h2>
      <div className="underline" />
    </div>
  );
}
