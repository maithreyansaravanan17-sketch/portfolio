import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/AIChat/ChatWidget";

export const metadata: Metadata = {
  title: "Maithreyan | Young Developer | AI & Robotics Enthusiast",
  description: "I build software, explore artificial intelligence, experiment with robotics, and turn ideas into practical prototypes. Based in India.",
  openGraph: {
    title: "Maithreyan | AI & Robotics Enthusiast",
    description: "Exploring the intersection of AI, robotics, and embedded systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-zinc-950">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
