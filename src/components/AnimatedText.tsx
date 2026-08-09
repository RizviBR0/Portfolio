import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function AnimatedChar({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === " " ? "\u00A0" : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={`relative flex flex-wrap ${className}`} style={style}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = start + 1 / characters.length;

        return (
          <AnimatedChar
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}
