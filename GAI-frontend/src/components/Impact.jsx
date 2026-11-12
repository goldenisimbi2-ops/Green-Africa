import { TreePine, Users, Mountain, HeartHandshake } from 'lucide-react';
import './Impact.css';

// NOTE: These are illustrative placeholder figures, not officially verified GAI
// statistics. Replace the values below with official figures when available.
const stats = [
  { icon: TreePine, value: '0', label: 'Trees Supported' },
  { icon: Users, value: '0', label: 'Communities Engaged' },
  { icon: Mountain, value: '0', label: 'Hectares Restored' },
  { icon: HeartHandshake, value: '0', label: 'People Reached' },
];

export default function Impact() {
  return (
    <section className="impact">
      <div className="container">
        <div className="impact-head">
          <h2>Our Impact</h2>
          <p>Creating a greener, more resilient Africa for future generations.</p>
        </div>
        <div className="stats-grid">
          {stats.map(({ icon: Icon, value, label }) => (
            <div className="stat" key={label}>
              <span className="stat-icon"><Icon size={22} /></span>
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
