"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  typingSpeed?: number;
  pauseAfterTyping?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  typingSpeed = 150,
  pauseAfterTyping = 1000,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [phase, setPhase] = useState<"typing" | "pause" | "clearing">("typing");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    switch (phase) {
      case "typing":
        if (i < text.length) {
          timer = setTimeout(() => {
            setDisplayedText((prev) => prev + text.charAt(i));
            setI(i + 1);
          }, typingSpeed);
        } else {
          timer = setTimeout(() => setPhase("pause"), pauseAfterTyping);
        }
        break;

      case "pause":
        timer = setTimeout(() => setPhase("clearing"), pauseAfterTyping);
        break;

      case "clearing":
        if (i > 0) {
          timer = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
            setI(i - 1);
          }, typingSpeed);
        } else {
          setPhase("typing");
        }
        break;
    }

    return () => clearTimeout(timer);
  }, [i, phase, text, typingSpeed, pauseAfterTyping]);

  return (
    <motion.h1
      className={cn(
        " text-neptune-800 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display text-pretty font-semibold tracking-[-0.05em] drop-shadow-sm",className)}>
      <span className="inline-block">{displayedText} <motion.span
        className="cursor-blink"
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      >
        |      
      </motion.span></span>

    </motion.h1>
  );
}
