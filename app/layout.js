import "./globals.css";

export const metadata = {
  title: "Nagaland Lottery Results",
  description: "Check the latest Nagaland State Lottery results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
