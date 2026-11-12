import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { ProjectCard } from '../components/Cards';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data';
import './ProjectsPage.css';

export default function Projects() {
  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Turning environmental action into lasting impact."
      />
      <section className="projects-page">
        <div className="container">
          <SectionTitle
            title="Projects Across Rwanda"
            subtitle="Sample project listings — replace with official GAI projects when available."
          />
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Interested in Partnering on a Project?"
        text="We work with communities, institutions and organizations to deliver restoration and conservation results."
        primary={{ label: 'Get Involved', to: '/get-involved' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />
    </>
  );
}
