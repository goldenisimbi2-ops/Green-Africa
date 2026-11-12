import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { NewsCard } from './Cards';
import { newsArticles } from '../data';

export default function News() {
  return (
    <section className="news" id="news">
      <div className="container">
        <SectionTitle
          title="News & Stories"
          subtitle="Updates from the field and stories from the communities we work with."
        />
        <div className="news-grid">
          {newsArticles.slice(0, 3).map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <Link to="/news" className="btn btn-dark">View All News <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
