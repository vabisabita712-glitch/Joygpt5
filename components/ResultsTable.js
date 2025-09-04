export default function ResultsTable({ results }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="py-3 px-4 text-left text-lg md:text-xl">Time</th>
            <th className="py-3 px-4 text-left text-lg md:text-xl">Draw Name</th>
            <th className="py-3 px-4 text-left text-lg md:text-xl">Winning Number</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-4 px-4 text-lg md:text-2xl font-semibold">{result.time}</td>
              <td className="py-4 px-4 text-lg md:text-2xl font-semibold">{result.drawName}</td>
              <td className="py-4 px-4 text-2xl md:text-4xl font-bold text-red-600 tracking-wider">{result.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
