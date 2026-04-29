export default function Card({ children }) {
  return (
    <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/30 hover:bg-gray-900 transition">
      {children}
    </div>
  );
}