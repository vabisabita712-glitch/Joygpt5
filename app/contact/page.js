import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';

export const config = {
  amp: true,
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>

        <AdPlaceholder />

        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <p className="text-lg text-gray-700">
            For any inquiries, please email us at:
          </p>
          <a href="mailto:contact@example.com" className="text-xl text-blue-600 hover:underline">
            contact@example.com
          </a>
        </div>

        <AdPlaceholder />

      </main>
      <Footer />
    </div>
  );
}
