import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Download, Tag, User } from 'lucide-react';
import { newsArticles } from '../data';
import { NewsCard } from '../components/Cards';
import './NewsDetail.css';

export default function NewsDetail() {
  const { id } = useParams();
  const article = newsArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <section style={{ padding: '180px 0 100px', textAlign: 'center' }}>
        <div className="container">
          <h1>Article Not Found</h1>
          <p>This article does not exist or has been removed.</p>
          <Link to="/news" className="btn btn-dark"><ArrowLeft size={18} /> Back to News & Stories</Link>
        </div>
      </section>
    );
  }

  const related = newsArticles.filter((a) => a.id !== article.id).slice(0, 3);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareLinks = [
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { label: 'X', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}` },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
  ];

  return (
    <>
      <article className="article-page">
        <div className="container article-container">
          <Link to="/news" className="back-link"><ArrowLeft size={16} /> Back to News & Stories</Link>

          <p className="news-meta">
            <span><CalendarDays size={14} /> {article.date}</span>
            <span> • </span>
            <span><Tag size={14} /> {article.category}</span>
          </p>
          <h1>{article.title}</h1>
          <p className="author"><User size={15} /> By {article.author} (placeholder)</p>

          <img className="featured" src={article.img} alt={article.alt} />

          <div className="article-body">
            {article.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>

          {article.pdfUrl && (
            <div style={{ margin: '32px 0', textAlign: 'center' }}>
              <a href={article.pdfUrl} target="_blank" rel="noreferrer" className="btn btn-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Download size={18} /> View / Download Full Report (PDF)
              </a>
            </div>
          )}

          <div className="share">
            <span>Share:</span>
            {shareLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
      </article>

      <section className="related-news">
        <div className="container">
          <div className="section-title reveal">
            <h2>Related Articles</h2>
            <div className="underline" />
          </div>
          <div className="news-grid">
            {related.map((a) => <NewsCard key={a.id} article={a} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/news" className="btn btn-dark">View All News <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
