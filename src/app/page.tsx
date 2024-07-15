// Package Imports
import { Toaster } from 'react-hot-toast';

// Component Imports
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <Toaster />
    </main>
  );
}
