"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section, Typography, Badge } from "@/components/ui/core";
import { ExternalLink, X } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof siteConfig.projects[0] | null>(null);

  return (
    <Section id="projects">
      <Typography.H2 className="text-center mb-16">Featured Projects</Typography.H2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <Badge variant="accent">{project.category}</Badge>
              <Badge variant="outline">{project.status}</Badge>
            </div >
            <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm line-clamp-3">
              {project.concept}
            </p>
            <div className="mt-6 flex items-center text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
              Explore Project <ExternalLink className="w-3 h-3 ml-1" />
            </div >
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="accent">{selectedProject.category}</Badge>
                <Badge variant="outline">{selectedProject.status}</Badge>
              </div >

              <Typography.H2 className="mb-6">{selectedProject.title}</Typography.H2>
              <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                {selectedProject.purpose}
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-zinc-100 font-semibold mb-2">Problem Statement</h4>
                    <p className="text-zinc-400 text-sm">{selectedProject.details.problem}</p>
                  </div >
                  <div>
                    <h4 className="text-zinc-100 font-semibold mb-2">Proposed Solution</h4>
                    <p className="text-zinc-400 text-sm">{selectedProject.details.solution}</p>
                  </div >
                  <div>
                    <h4 className="text-zinc-100 font-semibold mb-2">System Architecture</h4>
                    <p className="text-zinc-400 text-sm">{selectedProject.details.architecture}</p>
                  </div >
                </div >
                <div className="space-y-8">
                  <div>
                    <h4 className="text-zinc-100 font-semibold mb-2">Hardware</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details.hardware.map(item => (
                        <Badge key={item} variant="outline">{item}</Badge>
                      ))}
                    </div >
                  </div >
                  <div>
                    <h4 className="text-zinc-100 font-semibold mb-2">Software</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details.software.map(item => (
                        <Badge key={item} variant="outline">{item}</Badge>
                      ))}
                    </div >
                  </div >
                  <div>
                    <h4 className="text-zinc-100 font-semibold mb-2">Lessons Learned</h4>
                    <p className="text-zinc-400 text-sm">{selectedProject.details.lessons}</p>
                  </div >
                </div >
              </div >

              <div className="mt-12 pt-8 border-t border-zinc-800 flex gap-4">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    className="px-6 py-2 bg-zinc-100 text-zinc-900 rounded-full font-medium text-sm hover:bg-zinc-200 transition-all"
                  >
                    GitHub Repository
                  </a>
                )}
                {selectedProject.links.demo && (
                  <a
                    href={selectedProject.links.demo}
                    className="px-6 py-2 border border-zinc-700 text-zinc-100 rounded-full font-medium text-sm hover:bg-zinc-800 transition-all"
                  >
                    Live Demo
                  </a>
                )}
              </div >
            </motion.div>
          </div >
        )}
      </AnimatePresence>
    </Section>
  );
}
