import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin } from 'lucide-react';

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-img">
        <img src={project.img} alt={project.alt} loading="lazy" />
        <div className="project-badges">
          <span className="project-category">{project.category}</span>
          {project.status && <span className="project-status">{project.status}</span>}
        </div>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-location"><MapPin size={15} /> {project.location}</p>
        <p>{project.overview.split('.')[0]}.</p>
        <div className="project-footer">
          <Link to={`/projects/${project.id}`} className="card-link">View Project <ArrowRight size={15} /></Link>
        </div>
      </div>
    </article>
  );
}

export function NewsCard({ article }) {
  return (
    <article className="news-card">
      <div className="news-img">
        <img src={article.img} alt={article.alt} loading="lazy" />
      </div>
      <div className="news-body">
        <p className="news-meta">
          <span>{article.date}</span>
          <span className="news-meta-dot"></span>
          <span>{article.category}</span>
        </p>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="news-footer">
          {article.pdfUrl && (
            <a href={article.pdfUrl} target="_blank" rel="noreferrer" className="card-link" style={{ marginRight: '16px' }}>
              <Download size={15} /> PDF
            </a>
          )}
          <Link to={`/news/${article.id}`} className="card-link">Read More <ArrowRight size={15} /></Link>
        </div>
      </div>
    </article>
  );
}
