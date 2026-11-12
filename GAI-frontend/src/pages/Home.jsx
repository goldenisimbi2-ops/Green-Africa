import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Impact from '../components/Impact';
import About from '../components/About';
import Work from '../components/Work';
import Innovation from '../components/Innovation';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="home-video" style={{ padding: '60px 20px', background: '#f5f7f5' }}>
        <div className="container" style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: 20 }}>Discover Our Work</h2>
          <video
            src="/home-video.mp4"
            controls
            playsInline
            style={{ width: '100%', maxHeight: 560, borderRadius: 12, background: '#000' }}
          />
        </div>
      </section>
      <WhatWeDo />
      <Impact />
      <About />
      <Work />
      <Innovation />
      <CTASection />
    </>
  );
}
