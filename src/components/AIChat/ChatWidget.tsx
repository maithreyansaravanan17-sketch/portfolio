"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-cyan-600 text-white shadow-lg flex items-center justify-center hover:bg-cyan-500 transition-colors relative group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}

        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800 text-zinc-100 text-xs py-1 px-3 rounded-lg whitespace-nowrap pointer-events-none border border-zinc-700">
            Ask My AI Assistant
          </span>
        )}
      </motion.button>
    </div >
  );
}
