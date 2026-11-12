import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Leaf, Users, ShieldCheck, BookOpen, Handshake, Mountain } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import gaiLogo from '../assets/gai-logo.jpg';
import './AboutPage.css';

const focus = [
  'Ecosystem restoration across forests, wetlands and watersheds',
  'Building climate resilience through nature-based solutions',
  'Community-led conservation and sustainable livelihoods',
  'Environmental research and Indigenous knowledge',
  'Education and training for young environmental stewards',
  'Partnerships with government, NGOs and researchers',
];

const values = [
  { icon: Leaf, title: 'Sustainability', text: 'Solutions that protect ecosystems for the long term while meeting today\u2019s needs.' },
  { icon: Users, title: 'Community', text: 'Communities at the center of every decision, action and benefit.' },
  { icon: ShieldCheck, title: 'Integrity', text: 'Honest, transparent work that earns the trust of partners and communities.' },
  { icon: BookOpen, title: 'Knowledge', text: 'Learning from science and from local and Indigenous knowledge alike.' },
  { icon: Handshake, title: 'Collaboration', text: 'Working with others multiplies what any one organization can achieve.' },
  { icon: Mountain, title: 'Resilience', text: 'Building communities and ecosystems that can withstand a changing climate.' },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Green Africa Institute"
        subtitle="Protecting nature. Strengthening communities. Building resilience."
        img="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="about-page">
        <div className="container about-inner">
          <div className="about-image reveal">
            <img
              src="about.jpg"
              alt="Green forest landscape in Rwanda"
              loading="lazy"
            />
          </div>
          <div className="about-text reveal">
            <img src={gaiLogo} alt="Green Africa Institute" className="about-logo" />
            <h2>Who We Are</h2>
            <div className="underline" />
            <p className="lead">
              At Green Africa Institute (GAI), we turn climate and environmental challenges into practical, community-led solutions. Our work focuses on protecting nature, restoring ecosystems, strengthening climate resilience, and empowering communities across Africa.
            </p>
            <ul>
              {focus.map((f) => (
                <li key={f}><CheckCircle2 size={18} /> {f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container mv-grid">
          <div className="mv-card reveal">
            <h3>Our Mission</h3>
            <div className="underline" />
            <p>
              To build a greener, more resilient Africa by empowering communities, restoring ecosystems, advancing environmental research, and turning climate knowledge into practical local action.
            </p>
          </div>
          <div className="mv-card reveal">
            <h3>Our Vision</h3>
            <div className="underline" />
            <p>
              A greener, healthier and climate-resilient Africa where communities
              actively steward and benefit from nature.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-title reveal">
            <h2>Our Values</h2>
            <div className="underline" />
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <article className="card value-card reveal" key={title}>
                <span className="card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="values-cta reveal">
            <Link to="/get-involved" className="btn btn-dark">Work With Us <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="container founder-inner">
          <div className="founder-image">
            <img
              src="claude1.jpeg"
              alt="Tuyizere Jean Claude, Founder & CEO of Green Africa Institute"
              loading="lazy"
            />
            <div className="founder-badge">
              <h4>Tuyizere Jean Claude</h4>
              <p>Founder & CEO</p>
            </div>
          </div>
          <div className="founder-text">
            <h2>A Message From Our Founder</h2>
            <div className="underline" />
            <p className="founder-quote">
              "Tuyizere Jean Claude is a climate Change Specialist and activist, environmental conservation researcher,
              and the Founder & CEO of Green Africa Institute (GAI)."
            </p>
            <p>
              Born and raised in a village, Jean Claude experienced from an early age the close relationship between rural communities and nature. During his childhood, life in his community was largely sustained through traditional agriculture, which provided families with food and income to meet their basic needs. Communities also relied on plants and other natural resources around them for traditional medicines and everyday needs.
            </p>
            <p>
              However, as the years passed, he witnessed significant changes in his community. Climate change increasingly affected agricultural production and, consequently, the livelihoods and food security of families. In the beginning, many people did not understand what was happening or why their environment and agricultural systems were changing. Limited access to environmental information and formal education made it difficult for many community members to understand the broader climate crisis or access information through modern technologies.
            </p>
            <p>
              These early experiences shaped Jean Claude&apos;s passion for environmental protection.
            </p>
            <p>
              While in Grade 7, driven by his interest in protecting the environment, he established his first environmental club at school. However, without sufficient guidance and mentorship, he was unable to achieve the goals he had envisioned. Later, in Grade 10, after changing schools, he established another environmental club. This became an important turning point in his journey.
            </p>
            <p>
              At his new school, he met a mentor—the school manager—who shared a strong passion for environmental protection. His mentor taught him valuable lessons about environmental conservation and, most importantly, gave him the opportunity, freedom, and encouragement to put his ideas into practice.
            </p>
            <p>
              That experience strengthened his determination to continue working for the environment.
            </p>
            <p>
              After completing high school, Jean Claude made a personal commitment to use the education and knowledge he had gained to become a voice for his community. Having experienced firsthand how climate change can affect rural livelihoods, he came to understand that climate change is not simply a global scientific issue—it is a reality that directly affects families, food production, livelihoods, and the natural resources on which communities depend.
            </p>
            <p>
              His journey therefore became rooted in a simple but powerful conviction: communities that are experiencing the consequences of environmental and climate challenges should have a voice in shaping the solutions.
            </p>
            <p>
              He became particularly committed to amplifying the voices of people in local and underserved communities who often have limited access to information, resources, technology, and decision-making spaces. He believes that these communities should not only be viewed as vulnerable to climate change, but also recognized as important holders of knowledge, experience, and solutions.
            </p>
            <p>
              His work is further shaped by experience in climate change activism in the United Arab Emirates (UAE) and environmental conservation research across Africa. His research has particularly focused on understanding how Indigenous peoples and local communities contribute to the protection, conservation, and sustainable management of their natural environments.
            </p>
            <p>
              Through his research and field engagement, Jean Claude has explored the knowledge, practices, and experiences of communities whose livelihoods and cultures are closely connected to nature. He believes that Indigenous and local knowledge is an important part of addressing today&apos;s environmental and climate challenges and should be recognized, respected, and integrated into conservation efforts.
            </p>
            <p>
              As Founder and CEO of Green Africa Institute, Jean Claude brings together his personal experiences, environmental activism, research, and community engagement to build community-centered approaches to climate change adaptation, ecosystem restoration, environmental conservation, research, and climate education.
            </p>
            <p>
              His vision is to help create a future where communities are empowered to become active leaders in protecting nature, strengthening their resilience, and responding to climate change across Africa.
            </p>
            <p>
              For Jean Claude, this work is more than a professional journey. It is rooted in the community where he grew up, the environmental changes he witnessed, the mentors who encouraged him, and his determination to become a voice for communities whose experiences are often unheard.
            </p>
            <p className="founder-quote">
              “Our Nature, Our Life.”
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
