"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section, Typography, Badge } from "@/components/ui/core";

export default function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography.H2>About Me</Typography.H2>
          <Typography.P className="text-lg mb-6">
            {siteConfig.about.text}
          </Typography.P>
          <div className="grid gap-4">
            {siteConfig.about.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-zinc-300">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square rounded-3xl border border-zinc-800 bg-zinc-900/50 overflow-hidden group"
        >
          <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
            <span className="text-sm font-mono uppercase tracking-widest">Profile Visual</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </Section>
  );
}
