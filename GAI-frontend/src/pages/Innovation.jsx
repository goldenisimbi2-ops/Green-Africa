import { Link } from 'react-router-dom';
import { ArrowRight, Drone, Smartphone, Brain, Sprout } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { innovations } from '../data';
import './InnovationPage.css';

const icons = { Drone, Smartphone, Brain, Sprout };

export default function InnovationPage() {
  return (
    <>
      <PageHero
        title="Innovation"
        subtitle="Pioneering new approaches to restore ecosystems and strengthen community resilience."
      />

      <section className="innovation-page">
        <div className="container">
          <div className="innovation-intro">
            <p>
              At Green Africa Institute, innovation is about combining traditional ecological knowledge
              with modern technology to create more effective, scalable solutions for environmental
              restoration and climate resilience.
            </p>
          </div>

          <div className="innovation-features">
            {innovations.map((item) => {
              const Icon = icons[item.icon];
              return (
                <article className="feature-card" key={item.id}>
                  <span className="feature-icon"><Icon size={32} /></span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="innovation-cta">
            <h2>Partner With Us</h2>
            <p>
              We collaborate with tech companies, research institutions, and communities to develop
              and deploy innovative solutions. Join us in shaping the future of conservation.
            </p>
            <Link to="/get-involved" className="btn btn-primary">
              Get Involved <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Innovate With Us?"
        text="Explore partnership opportunities or learn how you can support our innovative approaches."
        primary={{ label: 'Partner With Us', to: '/get-involved' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />
    </>
  );
}
