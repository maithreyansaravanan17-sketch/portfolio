"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section, Typography } from "@/components/ui/core";
import { Badge } from "@/components/ui/core";
import { Cpu, Zap, Box } from "lucide-react";

const values = [
  {
    title: "Cross-Disciplinary",
    description: "Bridging the gap between high-level software logic and low-level hardware circuitry. I speak both Python and C++.",
    icon: <Cpu className="w-6 h-6 text-accent" />,
  },
  {
    title: "Rapid Prototyping",
    description: "From a sketch on a napkin to a working ESP32 prototype. I focus on building fast to learn faster.",
    icon: <Zap className="w-6 h-6 text-accent" />,
  },
  {
    title: "AI Integration",
    description: "Moving beyond prompts to integrate local LLMs and Computer Vision into practical, physical systems.",
    icon: <Box className="w-6 h-6 text-accent" />,
  },
];

export default function Collaboration() {
  return (
    <Section id="collaboration">
      <div className="text-center mb-16">
        <Typography.H2>Why Work With Me</Typography.H2>
        <Typography.P className="max-w-2xl mx-auto">
          I bring a mix of curiosity, practical engineering, and a relentless drive to see things working in the real world.
        </Typography.P>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {values.map((value, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 hover:border-accent/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {value.icon}
            </div>
            <h3 className="text-zinc-100 font-bold text-xl mb-3">{value.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative p-12 rounded-3xl border border-accent/20 bg-accent/5 overflow-hidden text-center">
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4">Open for collaborations</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            I welcome AI & Robotics projects, student-led innovation, open-source contributions, and future internships.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-accent text-background font-black text-xs tracking-[0.2em] uppercase rounded-none hover:bg-white transition-all"
          >
            Let's Build Something
          </a>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </div>
    </Section>
  );
}
