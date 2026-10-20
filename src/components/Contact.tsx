"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section, Typography } from "@/components/ui/core";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="text-center">
      <div className="max-w-2xl mx-auto">
        <Typography.H2 className="mb-6">Get In Touch</Typography.H2>
        <Typography.P className="text-lg mb-12">
          I'm always open to discussing new projects, creative ideas or opportunities
          to be part of your visions.
        </Typography.P>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Mail className="w-8 h-8" />
            </div >
            <div>
              <p className="text-zinc-500 text-sm mb-2 uppercase tracking-widest font-medium">Email Me At</p>
              <a
                href={`mailto:${siteConfig.socials.email}`}
                className="text-2xl md:text-3xl font-bold text-zinc-100 hover:text-cyan-400 transition-colors"
              >
                {siteConfig.socials.email || "hello@example.com"}
              </a>
            </div >
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="mt-4 px-8 py-4 bg-zinc-100 text-zinc-900 font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              Send a Message
              <Send className="w-4 h-4" />
            </a>
          </div >
        </motion.div>
      </div >
    </Section>
  );
}
