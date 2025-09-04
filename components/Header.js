import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800">
          <Link href="/">Nagaland Lottery Results</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
            <li><Link href="/archive" className="text-gray-700 hover:text-blue-600">Archive</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
