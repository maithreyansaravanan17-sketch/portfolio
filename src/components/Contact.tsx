"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section, Typography } from "@/components/ui/core";
import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unknown error occurred");
    }
  };

  return (
    <Section id="contact" className="text-center">
      <div className="max-w-2xl mx-auto">
        <Typography.H2 className="mb-6">Get In Touch</Typography.H2>
        <Typography.P className="text-lg mb-12">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities
          to be part of your visions.
        </Typography.P>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 text-left"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2">Message Sent!</h3>
              <p className="text-zinc-400 mb-8">I&apos;ll get back to you as soon as possible.</p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-2 border border-zinc-700 text-zinc-100 rounded-full hover:bg-zinc-800 transition-all text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-zinc-500">Name</label>
                  <input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-zinc-500">Email</label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 focus:outline-none focus:border-accent transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-zinc-500">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status === "error" && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs mb-6">
                  {errorMessage}
                </div>
              )}

              <button
                disabled={status === "sending"}
                className={cn(
                  "w-full py-4 bg-accent text-background font-black text-xs tracking-[0.2em] uppercase rounded-none transition-all flex items-center justify-center gap-3",
                  status === "sending" ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
                )}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
