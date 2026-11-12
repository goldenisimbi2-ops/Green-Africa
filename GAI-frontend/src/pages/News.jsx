import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { NewsCard } from '../components/Cards';
import SectionTitle from '../components/SectionTitle';
import { newsArticles } from '../data';

export default function News() {
  return (
    <>
      <PageHero
        title="News & Stories"
        subtitle="Updates, insights and stories from environmental action."
      />
      <section style={{ background: 'var(--white)' }}>
        <div className="container">
          <SectionTitle
            title="Latest Stories"
            subtitle="Sample articles — replace with real published GAI news when available."
          />
          <div className="news-grid">
            {newsArticles.map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Have a Story to Share?"
        text="We'd love to hear about environmental action in your community."
        primary={{ label: 'Contact Us', to: '/contact' }}
        secondary={{ label: 'Get Involved', to: '/get-involved' }}
      />
    </>
  );
}
