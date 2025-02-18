import type { Metadata } from "next";
import "./globals.css"; // Ensure this imports your custom font styles
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cn } from './lib/utils';

export const metadata: Metadata = {
  title: "Co-Existence with AI",
  description: "AI Ethics Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen grainy antialiased')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}