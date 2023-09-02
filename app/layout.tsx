import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghanchi Sandesh",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
   
          <div className="relative w-full">
            <Navbar />
          </div>
          {children}
          <div className="relative footer w-full m-auto">
            <Footer />
          </div>
    
      </body>
    </html>
  );
}
