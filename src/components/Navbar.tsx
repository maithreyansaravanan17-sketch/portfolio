"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "JOURNEY", href: "#journey" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between backdrop-blur-sm bg-background/50">
      <a
        href="#home"
        className="text-lg font-display font-bold tracking-tight text-text-primary hover:text-accent transition-colors"
      >
        MAITHREYAN
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-xs font-medium tracking-widest uppercase text-text-muted hover:text-accent transition-colors"
          >
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          className="px-5 py-2 bg-accent text-background font-black text-[10px] tracking-widest uppercase rounded-none hover:bg-white transition-all"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-border p-10 flex flex-col gap-6 text-center"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-medium text-text-primary hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
