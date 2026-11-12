import { FileText, Microscope, BookOpen, GraduationCap, Download, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { resources } from '../data';
import './ResourcesPage.css';

const icons = { FileText, Microscope, BookOpen, GraduationCap, Download };

export default function Resources() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Knowledge and tools for a greener and more resilient future."
      />
      <section className="resources-page">
        <div className="container">
          <div className="section-title reveal">
            <h2>Resource Center</h2>
            <div className="underline" />
            <p>
              Placeholder resource cards — connect real PDF documents by setting the
              <code> href </code> field for each item in the site data file.
            </p>
          </div>
          <div className="resources-grid">
            {resources.map(({ icon: IconName, category, title, text, href }) => {
              const Icon = icons[IconName] || FileText;
              return (
                <article className="card resource-card reveal" key={title}>
                  <span className="card-icon"><Icon size={26} /></span>
                  <p className="resource-category">{category}</p>
                  <h3>{title}</h3>
                  <p className="resource-text">{text}</p>
                  {href ? (
                    <a href={href} className="card-link" target="_blank" rel="noreferrer">
                      Download / View <ArrowRight size={15} />
                    </a>
                  ) : (
                    <span className="card-link disabled" aria-disabled="true">Coming Soon</span>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection
        title="Looking for Something Specific?"
        text="Reach out to our team and we'll point you to the right materials."
        primary={{ label: 'Contact Us', to: '/contact' }}
        secondary={{ label: 'Get Involved', to: '/get-involved' }}
      />
    </>
  );
}
