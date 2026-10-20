"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section, Typography } from "@/components/ui/core";
import { Badge } from "@/components/ui/core";

export default function Skills() {
  return (
    <Section id="skills">
      <Typography.H2 className="text-center mb-16">Technical Skills</Typography.H2>

      <div className="grid md:grid-cols-3 gap-8">
        {siteConfig.skills.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40"
          >
            <h3 className="text-zinc-100 font-bold text-xl mb-6">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, sIdx) => (
                <div key={sIdx} className="flex flex-col gap-1">
                  <Badge variant="outline" className="py-1 px-3 text-sm">
                    {skill.name}
                  </Badge>
                  <span className="text-[10px] text-zinc-500 ml-2 uppercase tracking-wider font-medium">
                    {skill.level}
                  </span>
                </div >
              ))}
            </div >
          </motion.div>
        ))}
      </div >
    </Section>
  );
}
