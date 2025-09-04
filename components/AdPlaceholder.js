export default function AdPlaceholder({ className = '' }) {
  return (
    <div
      className={`bg-gray-200 border border-gray-300 text-center py-10 my-4 ${className}`}
    >
      <p className="text-gray-500">Ad Placeholder</p>
    </div>
  );
}
