export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 mt-2">{subtitle}</p>
      )}
    </div>
  );
}