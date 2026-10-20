import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/AIChat/ChatWidget";

export const metadata: Metadata = {
  title: "Maithreyan | Student Developer",
  description: "Portfolio of Maithreyan, an AI & Robotics enthusiast",
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
