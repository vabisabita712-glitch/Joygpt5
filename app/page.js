import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResultsTable from '@/components/ResultsTable';
import AdPlaceholder from '@/components/AdPlaceholder';

// This is required for AMP pages
export const config = {
  amp: true,
};

export default function HomePage() {
  const todayResults = [
    { time: '1:00 PM', drawName: 'Dear Morning', number: '84A 12345' },
    { time: '6:00 PM', drawName: 'Dear Evening', number: '91B 67890' },
    { time: '8:00 PM', drawName: 'Dear Night', number: '32C 54321' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Today's Results - {new Date().toLocaleDateString()}
        </h2>

        <AdPlaceholder />

        <ResultsTable results={todayResults} />

        <AdPlaceholder />

      </main>
      <Footer />
    </div>
  );
}
