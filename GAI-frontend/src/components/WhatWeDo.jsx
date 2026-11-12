import { Link } from 'react-router-dom';
import { TreePine, Globe2, Users, Microscope, BookOpen, Handshake, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import './WhatWeDo.css';

const items = [
  {
    icon: TreePine,
    title: 'Ecosystem Restoration',
    text: 'Restoring degraded landscapes, forests, wetlands and watersheds through tree planting, agroforestry and soil-erosion control while creating benefits for both people and nature.',
  },
  {
    icon: Globe2,
    title: 'Climate Change Adaptation',
    text: 'Helping communities understand and respond to climate risks through climate-resilient agriculture, ecosystem restoration and nature-based solutions.',
  },
  {
    icon: Users,
    title: 'Community-Based Conservation',
    text: 'Working directly with local communities to protect and manage natural resources, strengthen local ownership and support sustainable livelihoods.',
  },
  {
    icon: Microscope,
    title: 'Environmental Research',
    text: 'Conducting research on climate change, conservation and environmental challenges while documenting local and Indigenous knowledge that contributes to environmental protection.',
  },
  {
    icon: BookOpen,
    title: 'Environmental Education',
    text: 'Training communities, young people and stakeholders on environmental conservation, climate change and practical environmental action.',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    text: 'Working with communities, government institutions, NGOs, researchers and development partners to implement restoration and conservation projects.',
  },
];

export default function WhatWeDo() {
  return (
    <section className="whatwedo" id="what-we-do">
      <div className="container">
        <SectionTitle
          title="What We Do"
          subtitle="At Green Africa Institute (GAI), we turn climate and environmental challenges into practical, community-led solutions. Our work focuses on protecting nature, restoring ecosystems, strengthening climate resilience, and empowering communities across Africa."
        />
        <div className="cards-grid">
          {items.map(({ icon: Icon, title, text }) => (
            <article className="card" key={title}>
              <span className="card-icon"><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link to="/our-work" className="card-link">Learn more <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
