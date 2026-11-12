import { useState } from 'react';
import { MapPin, Mail, Phone, Building2, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import './ContactPage.css';
import api from '../api';

// Editable placeholder contact details
const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Gicumbi' },
  { icon: Mail, label: 'Email', value: 'greenafricainstitute@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+250 780 767 464' },
  { icon: Building2, label: 'Office', value: 'Gicumbi, Rwanda' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: null });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your full name.';
    if (!form.email.trim()) errs.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.';
    if (form.phone && !/^[+\d\s()-]{7,}$/.test(form.phone)) errs.phone = 'Please enter a valid phone number.';
    if (!form.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
    return errs;
  };

  // NOTE: Frontend-only for now. Connect this to a backend/email API endpoint later.
  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus('error');
      return;
    }
    try {
      await api.contact(form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        title="Contact Green Africa Institute"
        subtitle="Have a question, partnership idea or environmental initiative? We'd love to hear from you."
      />
      <section className="contact-page">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <h2>Get in Touch</h2>
            <div className="underline" />
            <p>
              Whether you want to collaborate on a project, ask about our work or
              explore partnership opportunities, our team is ready to connect.
            </p>
            <ul>
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <li key={label}>
                  <span className="info-icon"><Icon size={20} /></span>
                  <div>
                    <strong>{label}</strong>
                    <p>{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
            <h2>Send Us a Message</h2>
            {status === 'success' && (
              <div className="form-msg success" role="status">
                Thank you! Your message has been received successfully.
              </div>
            )}
            {status === 'error' && (
              <div className="form-msg error" role="alert">
                Please correct the highlighted fields and try again.
              </div>
            )}

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="c-name">Full Name *</label>
                <input id="c-name" type="text" value={form.name} onChange={update('name')} aria-invalid={!!errors.name} />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="c-email">Email Address *</label>
                <input id="c-email" type="email" value={form.email} onChange={update('email')} aria-invalid={!!errors.email} />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="c-phone">Phone Number</label>
                <input id="c-phone" type="tel" value={form.phone} onChange={update('phone')} aria-invalid={!!errors.phone} />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="c-subject">Subject *</label>
                <input id="c-subject" type="text" value={form.subject} onChange={update('subject')} aria-invalid={!!errors.subject} />
                {errors.subject && <span className="field-error">{errors.subject}</span>}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="c-message">Message *</label>
              <textarea id="c-message" rows="6" value={form.message} onChange={update('message')} aria-invalid={!!errors.message} />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary"><Send size={18} /> Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
