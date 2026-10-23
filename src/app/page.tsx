import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Collaboration from "@/components/Collaboration";
import Contact from "@/components/Contact";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="bg-background text-text-primary min-h-screen selection:bg-accent/30 relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Technical Grid Background */}
      <div className="absolute inset-0 technical-grid pointer-events-none opacity-50" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Collaboration />
        <Contact />

        <footer className="py-12 text-center border-t border-border">
          <p className="text-text-muted text-sm">
            © {2026} {siteConfig.name}. Built with Next.js & Tailwind.
          </p>
        </footer>
      </div>
    </main>
  );
}
