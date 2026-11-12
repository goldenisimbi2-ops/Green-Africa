import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Handshake, HeartHandshake, HelpingHand, MessagesSquare, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import './GetInvolvedPage.css';
import api from '../api';

const options = [
  {
    id: 'partner',
    icon: Handshake,
    title: 'Partner With Us',
    text: 'We collaborate with NGOs, government institutions, researchers, development organizations and private organizations to deliver restoration and conservation projects.',
    cta: 'Become a Partner',
  },
  {
    id: 'support',
    icon: HeartHandshake,
    title: 'Support Our Work',
    text: 'Support environmental restoration and community conservation — from tree planting programs to environmental education for young people.',
    cta: 'Support GAI',
  },
  {
    id: 'volunteer',
    icon: HelpingHand,
    title: 'Volunteer',
    text: 'Give your time and skills to restoration activities, community events, research support or communications. Express your interest below.',
    cta: 'Volunteer With Us',
  },
  {
    id: 'collaborate',
    icon: MessagesSquare,
    title: 'Collaborate',
    text: 'Organizations and researchers interested in joint environmental projects are welcome to start a conversation with our team.',
    cta: 'Start a Conversation',
  },
];

export default function GetInvolved() {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const location = useLocation();

  // Scroll to #partner / #volunteer / #support anchors from footer links
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [location.hash]);

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email.';
    if (!form.interest) errs.interest = 'Please select an option.';
    setErrors(errs);
    if (Object.keys(errs).length > 0) { setStatus('error'); return; }
    try {
      await api.involvement(form);
      setStatus('success');
      setForm({ name: '', email: '', interest: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        title="Get Involved"
        subtitle="Together, we can restore nature, strengthen communities and build a resilient future."
      />

      <section className="involved-page">
        <div className="container">
          <div className="options-grid">
            {options.map(({ id, icon: Icon, title, text, cta }) => (
              <article className="card option-card reveal" key={id} id={id}>
                <span className="card-icon"><Icon size={26} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#involvement-form" className="card-link">{cta} ↓</a>
              </article>
            ))}
          </div>

          <form id="involvement-form" className="involved-form reveal" onSubmit={onSubmit} noValidate>
            <h2>Express Your Interest</h2>
            <p>Tell us how you'd like to be involved and our team will get back to you.</p>
            {status === 'success' && (
              <div className="form-msg success" role="status">
                Thank you for your interest! Your submission has been received.
              </div>
            )}
            {status === 'error' && (
              <div className="form-msg error" role="alert">Please correct the highlighted fields.</div>
            )}
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="i-name">Full Name *</label>
                <input id="i-name" type="text" value={form.name} onChange={update('name')} aria-invalid={!!errors.name} />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="i-email">Email Address *</label>
                <input id="i-email" type="email" value={form.email} onChange={update('email')} aria-invalid={!!errors.email} />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="i-interest">I want to... *</label>
              <select id="i-interest" value={form.interest} onChange={update('interest')} aria-invalid={!!errors.interest}>
                <option value="">Select an option</option>
                <option value="partner">Partner with GAI</option>
                <option value="support">Support GAI's work</option>
                <option value="volunteer">Volunteer</option>
                <option value="collaborate">Collaborate on research/projects</option>
              </select>
              {errors.interest && <span className="field-error">{errors.interest}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="i-message">Message</label>
              <textarea id="i-message" rows="5" value={form.message} onChange={update('message')} />
            </div>
            <button type="submit" className="btn btn-primary"><Send size={18} /> Submit Interest</button>
          </form>
        </div>
      </section>
    </>
  );
}
