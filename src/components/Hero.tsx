"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Typography, Badge } from "@/components/ui/core";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
      {/* Background Visual Element */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
        </div>
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-4xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="accent" className="mb-6">
            {siteConfig.availability}
          </Badge>
          <Typography.H1 className="mb-6 leading-[1.1]">
            Building Intelligent Systems <br />
            <span className="text-zinc-500">for the Real World.</span>
          </Typography.H1>
          <Typography.P className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {siteConfig.description}
          </Typography.P>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group px-8 py-4 bg-zinc-100 text-zinc-900 font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              View My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-zinc-900 text-zinc-100 font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          {siteConfig.socials.github && (
            <a href={siteConfig.socials.github} className="text-zinc-500 hover:text-zinc-100 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.79 3.633 17.79c-1.087.744-1.084.744-1.084.744c0 0-1.023-.084-1.023-1.246 0-0 .907-.655 2.186-.655 1.574 0 2.096 1.152 2.096 1.152.892 1.54 2.341 1.085 2.91.832.092-.666.354-1.12C11.366 16.3 12.454 15.8 13.522 15.8c1.12 0 2.13.544 2.5 1.36.354.666.63.832.832 1.152.21.446.516.832.832 1.152 1.186.113 2.186-.655 2.186-.655 1.023.164 1.023-1.246 1.023-1.246 0-1.04-.333-1.613-1.12-1.613-1.574 0-2.096 1.152-2.096 1.152-.892 1.54-2.341 1.085-2.91.832-.092-.666-.354-1.12-1.12-1.12C12.454 15.8 11.366 16.3 10.366 16.3l-.1-.1C10.266 16.2 10.266 16.2 10.266 16.2C10.266 16.2 10.266 16.2 10.266 16.2c0 0 0 0 0 0z"/></svg>
              </div >
            </a>
          )}
          {siteConfig.socials.linkedin && (
            <a href={siteConfig.socials.linkedin} className="text-zinc-500 hover:text-zinc-100 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.235c1.456-.465 3.07-.7P17 11.1v-1.235h-3v-1.1h3v-1.1h-3v-1.1h3v-1.1h-3v-1.1h3v-11h3v11z"/></svg>
              </div >
            </a>
          )}
          {siteConfig.socials.email && (
            <a href={`mailto:${siteConfig.socials.email}`} className="text-zinc-500 hover:text-zinc-100 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
