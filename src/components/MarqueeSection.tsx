import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import p1 from "../assets/projects/1.webp";
import p2 from "../assets/projects/2.webp";
import p3 from "../assets/projects/3.webp";
import p4 from "../assets/projects/4.webp";
import p5 from "../assets/projects/5.webp";
import p6 from "../assets/projects/6.webp";
import p7 from "../assets/projects/7.webp";
import p8 from "../assets/projects/8.webp";
import p9 from "../assets/projects/9.webp";
import p10 from "../assets/projects/10.webp";
import p11 from "../assets/projects/11.webp";
import p12 from "../assets/projects/12.webp";
import p13 from "../assets/projects/13.webp";
import p14 from "../assets/projects/14.webp";
import p15 from "../assets/projects/15.webp";
import p16 from "../assets/projects/16.webp";
import p17 from "../assets/projects/17.webp";
import p18 from "../assets/projects/18.webp";
import p19 from "../assets/projects/19.webp";

const firstRow = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
const secondRow = [p11, p12, p13, p14, p15, p16, p17, p18, p19];

type ReelMetrics = {
  viewport: number;
  firstRow: number;
  secondRow: number;
};

function ImageRow({
  images,
  rowRef,
  x,
  position,
}: {
  images: string[];
  rowRef: React.RefObject<HTMLDivElement | null>;
  x: MotionValue<number>;
  position: "top" | "bottom";
}) {
  return (
    <motion.div
      ref={rowRef}
      className={`marquee-track marquee-track--${position}`}
      style={{ x }}
    >
      {images.map((src, index) => (
        <figure className="marquee-card" key={src}>
          <img
            src={src}
            alt=""
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
        </figure>
      ))}
    </motion.div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [metrics, setMetrics] = useState<ReelMetrics>({
    viewport: 0,
    firstRow: 0,
    secondRow: 0,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 82,
    damping: 26,
    mass: 0.42,
  });
  const reelProgress = useTransform(smoothProgress, (progress) => {
    if (progress <= 0.85) return (progress / 0.85) * 0.8;
    const closingProgress = (progress - 0.85) / 0.15;
    return 0.8 + 0.2 * Math.pow(closingProgress, 4);
  });

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const firstTrack = firstRowRef.current;
    const secondTrack = secondRowRef.current;
    if (!viewport || !firstTrack || !secondTrack) return;

    const measure = () => {
      setMetrics({
        viewport: viewport.clientWidth,
        firstRow: firstTrack.scrollWidth,
        secondRow: secondTrack.scrollWidth,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(firstTrack);
    observer.observe(secondTrack);
    return () => observer.disconnect();
  }, []);

  const firstRowX = useTransform(
    reelProgress,
    [0, 1],
    [metrics.viewport * 0.92, -metrics.firstRow + metrics.viewport * 0.82],
  );
  const secondRowX = useTransform(
    reelProgress,
    [0, 1],
    [metrics.viewport * 1.14, -metrics.secondRow + metrics.viewport * 0.82],
  );
  return (
    <section
      ref={sectionRef}
      className="project-marquee"
      data-reduced-motion={shouldReduceMotion ? "true" : undefined}
      aria-hidden="true"
    >
      <div ref={viewportRef} className="project-marquee__sticky">
        <div className="project-marquee__wash project-marquee__wash--violet" />
        <div className="project-marquee__wash project-marquee__wash--cyan" />

        <div className="project-marquee__meta">
          <p>Selected interface work</p>
          <p>Scroll to explore</p>
        </div>

        <div className="project-marquee__reel">
          <div className="marquee-row">
            <ImageRow images={firstRow} rowRef={firstRowRef} x={firstRowX} position="top" />
          </div>
          <div className="marquee-row">
            <ImageRow images={secondRow} rowRef={secondRowRef} x={secondRowX} position="bottom" />
          </div>
        </div>

      </div>
    </section>
  );
}
