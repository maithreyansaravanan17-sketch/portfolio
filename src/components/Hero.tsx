"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 py-20 overflow-hidden bg-background">
      {/* Technical Annotations */}
      <div className="absolute top-24 left-6 md:left-12 text-[10px] font-mono text-zinc-600 tracking-widest uppercase z-10 hidden md:block">
        INDIVIDUAL DEVELOPER / DIGITAL BUILDER <br />
        BASED IN INDIA / ONLINE EVERYWHERE
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-[clamp(3.5rem,20vw,18rem)] font-display font-black leading-[0.8] tracking-tighter text-text-primary uppercase italic">
              I build ideas <br />
              into intelligent <br />
              experiences.
            </h1>

            {/* Lime Block Accent */}
            <div className="absolute top-1/2 left-0 w-24 h-4 bg-accent -z-10 opacity-80" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 max-w-xl"
          >
            <p className="text-xl md:text-2xl font-medium text-zinc-400 leading-tight mb-10 uppercase italic tracking-tight">
              I turn impossible-sounding ideas into working digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <a
                href="#projects"
                className="group px-8 py-4 bg-accent text-background font-black text-xs tracking-[0.2em] uppercase rounded-none hover:bg-white transition-all flex items-center gap-3"
              >
                Explore the Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="px-8 py-4 border border-border text-text-primary font-black text-xs tracking-[0.2em] uppercase rounded-none hover:bg-text-primary hover:text-background transition-all"
              >
                Who's building this?
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-display font-black text-zinc-900/40 select-none pointer-events-none leading-none italic whitespace-nowrap text-outline">
            INTELLIGENCE
          </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-12 bg-zinc-800 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </div>
    </section>
  );
}
