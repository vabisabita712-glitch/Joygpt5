import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';

export const config = {
  amp: true,
};

export default function ArchivePage() {
  const pastResults = [
    { date: '2024-09-03', link: '/results/2024-09-03' },
    { date: '2024-09-02', link: '/results/2024-09-02' },
    { date: '2024-09-01', link: '/results/2024-09-01' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Archived Results
        </h2>

        <AdPlaceholder />

        <div className="bg-white p-6 shadow-md rounded-lg">
          <ul className="space-y-4">
            {pastResults.map(result => (
              <li key={result.date} className="text-xl">
                <a href={result.link} className="text-blue-600 hover:underline">
                  Results for {result.date}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <AdPlaceholder />

      </main>
      <Footer />
    </div>
  );
}
