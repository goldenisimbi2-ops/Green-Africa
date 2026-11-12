export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="underline" />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
