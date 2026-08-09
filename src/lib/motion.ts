import type { Transition, Variants } from "framer-motion";

export const motionEase = [0.16, 1, 0.3, 1] as const;

export const motionTransition: Transition = {
  duration: 0.7,
  ease: motionEase,
};

export const motionTransitionFast: Transition = {
  duration: 0.28,
  ease: motionEase,
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const reducedReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
