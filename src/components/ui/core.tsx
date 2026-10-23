import React from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, children, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-24 px-6 md:px-12 max-w-7xl mx-auto w-full", className)}
    >
      {children}
    </section>
  );
};

export const Badge = ({ children, variant = "default", className }: { children: React.ReactNode; variant?: "default" | "outline" | "accent"; className?: string }) => {
  const variants = {
    default: "bg-zinc-800 text-zinc-300 border-zinc-700",
    outline: "bg-transparent text-zinc-400 border-zinc-700",
    accent: "bg-accent/10 text-accent border-accent/20",
  };

  return (
    <span className={cn(
      "px-2 py-0.5 text-xs font-medium border rounded-full inline-flex items-center",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

export const Typography = {
  H1: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h1 className={cn("text-4xl md:text-6xl font-display font-bold tracking-tighter text-zinc-100", className)}>{children}</h1>
  ),
  H2: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={cn("text-3xl md:text-4xl font-display font-bold tracking-tighter text-zinc-100 mb-4", className)}>{children}</h2>
  ),
  P: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <p className={cn("text-zinc-400 leading-relaxed", className)}>{children}</p>
  ),
};
