import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <footer className="py-12 text-center border-t border-zinc-900">
        <p className="text-zinc-500 text-sm">
          © 2026 {siteConfig.name}. Built with Next.js & Tailwind.
        </p>
      </footer>
    </main>
  );
}
