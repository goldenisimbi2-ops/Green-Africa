import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection({
  title = 'Together, We Can Restore Nature and Build Resilient Communities.',
  text = 'Join Green Africa Institute in creating healthier ecosystems, stronger communities and a more resilient future for Rwanda and Africa.',
  primary = { label: 'Get Involved', to: '/get-involved' },
  secondary = { label: 'Contact Us', to: '/contact' },
}) {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="cta-buttons">
          <Link to={primary.to} className="btn btn-primary">{primary.label} <ArrowRight size={18} /></Link>
          {secondary && (
            <Link to={secondary.to} className="btn btn-outline"><Mail size={18} /> {secondary.label}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
