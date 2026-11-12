import './PageHero.css';

export default function PageHero({ title, subtitle, img, alt }) {
  return (
    <section
      className="page-hero"
      style={img ? { backgroundImage: `linear-gradient(rgba(16,60,32,0.75), rgba(16,60,32,0.75)), url('${img}')` } : undefined}
    >
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
