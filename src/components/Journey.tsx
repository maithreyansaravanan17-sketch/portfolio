"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section, Typography } from "@/components/ui/core";
import { Badge } from "@/components/ui/core";

interface Milestone {
  year: string;
  title: string;
  description: string;
  category: string;
}

const milestones: Milestone[] = [
  {
    year: "2023",
    title: "Foundations in Electronics",
    description: "Started experimenting with Arduino and basic circuitry, building a curiosity for how software interacts with the physical world.",
    category: "Learning",
  },
  {
    year: "2024",
    title: "Smart E-Bin Implementation",
    description: "Developed a touchless waste bin using ultrasonic sensors and servos, focusing on practical automation and hygiene.",
    category: "Project",
  },
  {
    year: "2024",
    title: "AI Exploration",
    description: "Delved into Large Language Models and Computer Vision, implementing local AI tools via Ollama.",
    category: "AI",
  },
  {
    year: "2025",
    title: "PlantPulse Concept",
    description: "Designed a system for early plant-stress detection using environmental sensors and data analysis pipelines.",
    category: "Research",
  },
  {
    year: "Present",
    title: "Dhanvantri Robotics",
    description: "Building an intelligent healthcare robot combining vital-sign monitoring with robotic mobility.",
    category: "Robotics",
  },
];

export default function Journey() {
  return (
    <Section id="journey">
      <Typography.H2 className="text-center mb-16">Learning Journey</Typography.H2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />

        <div className="space-y-12">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              {/* Date/Year */}
              <div className="hidden md:block w-1/2 px-8 text-right" style={{ textAlign: idx % 2 === 0 ? "left" : "right" }}>
                <span className="font-mono text-accent font-bold text-xl">{milestone.year}</span>
              </div>

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(184,245,106,0.5)] -translate-x-1/2 z-10" />

              {/* Content */}
              <div className="w-full md:w-1/2 pl-12 md:px-8">
                <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-accent/30 transition-colors group">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{milestone.category}</Badge>
                    <span className="md:hidden font-mono text-accent text-sm font-bold">{milestone.year}</span>
                  </div>
                  <h3 className="text-zinc-100 font-bold text-lg mb-2 group-hover:text-accent transition-colors">{milestone.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
