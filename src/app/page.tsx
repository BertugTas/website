"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// Three.js / R3F scene — lazy-loaded off the critical render path (Fix C-5)
const NeuralBackground3D = dynamic(
  () => import("@/components/NeuralBackground3D"),
  { ssr: false, loading: () => null }
);

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground3D />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
