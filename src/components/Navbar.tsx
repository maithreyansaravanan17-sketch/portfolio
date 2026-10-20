"use client";
import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-zinc-800 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-zinc-100 font-bold tracking-tighter text-xl hover:text-cyan-400 transition-colors">
          {siteConfig.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {item.name}
            </a>
          ))}
          {siteConfig.resume.enabled && (
            <a
              href={siteConfig.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium bg-zinc-100 text-zinc-900 rounded-full hover:bg-zinc-200 transition-all"
            >
              Resume
            </a>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg text-zinc-400 hover:text-zinc-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          {siteConfig.resume.enabled && (
            <a
              href={siteConfig.resume.url}
              className="px-4 py-3 text-center font-medium bg-zinc-100 text-zinc-900 rounded-full"
            >
              Resume
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
