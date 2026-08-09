import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { motionEase } from "../lib/motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: shouldReduceMotion ? 0 : x,
        y: shouldReduceMotion ? 0 : y,
        scale: shouldReduceMotion ? 1 : 0.985,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -9%", amount: 0.08 }}
      transition={{
        delay: shouldReduceMotion ? 0 : delay,
        duration: shouldReduceMotion ? 0.01 : Math.max(duration, 0.78),
        ease: motionEase,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
