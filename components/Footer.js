export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-6">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Nagaland Lottery Results. All rights reserved.</p>
        <p className="text-sm mt-2">
          Disclaimer: This is not the official Nagaland State Lotteries website.
          Please verify the results with the official government gazette.
        </p>
      </div>
    </footer>
  );
}
