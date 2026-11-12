import { Link } from 'react-router-dom';
import { ArrowLeft, Sprout } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <span className="nf-icon"><Sprout size={40} /></span>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary"><ArrowLeft size={18} /> Back to Home</Link>
      </div>
    </section>
  );
}
