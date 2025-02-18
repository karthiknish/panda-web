import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Panda Puzzle | Educational Toys & Products",
  description:
    "Discover age-appropriate educational toys and sensory products for children aged 3-10 years. Supporting child development through play and learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
