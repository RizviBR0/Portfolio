import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TiltCard({ children, className = "", style = {} }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values to track cursor position inside the card area
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Create rotation values (max 10 degrees tilt to prevent excessive clipping)
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Cursor position relative to center of the card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Normalize coordinates to ranges between -0.5 and 0.5
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    // Reset rotation smoothly
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          ...style
        }}
        className={`w-full h-full transition-all duration-200 ease-out ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
