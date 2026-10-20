import React from "react";
import { cn } from "@/lib/utils";

export const ChatMessage = ({ message, role }: { message: string; role: "user" | "ai" }) => {
  return (
    <div className={cn("flex w-full mb-4", role === "user" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] p-3 rounded-2xl text-sm",
          role === "user"
            ? "bg-cyan-600 text-white rounded-br-none"
            : "bg-zinc-800 text-zinc-200 rounded-bl-none border border-zinc-700"
        )}
      >
        {message}
      </div>
    </div>
  );
};
