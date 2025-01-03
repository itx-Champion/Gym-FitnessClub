import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/common/Navbar';

export const metadata = {
  title: 'Fitness Club',
  description: 'Un site moderne pour votre salle de sport',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
