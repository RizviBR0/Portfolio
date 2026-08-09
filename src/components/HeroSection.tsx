import { ArrowDownRight, Download } from "lucide-react";
import { lazy, Suspense, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Avatar from "../assets/avatar.webp";
import { motionEase } from "../lib/motion";
import { profileLinks } from "../data/siteData";

const MagicRings = lazy(() => import("./MagicRings"));

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const portraitX = useMotionValue(0);
  const portraitY = useMotionValue(0);
  const magneticX = useSpring(portraitX, { stiffness: 120, damping: 19, mass: 0.7 });
  const magneticY = useSpring(portraitY, { stiffness: 120, damping: 19, mass: 0.7 });

  useEffect(() => {
    if (shouldReduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      portraitX.set(0);
      portraitY.set(0);
      return;
    }

    const resetPortrait = () => {
      portraitX.set(0);
      portraitY.set(0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const hero = heroRef.current;
      const portrait = portraitRef.current;
      if (!hero || !portrait || event.pointerType !== "mouse") return;

      const heroRect = hero.getBoundingClientRect();
      const isInsideHero =
        event.clientX >= heroRect.left &&
        event.clientX <= heroRect.right &&
        event.clientY >= heroRect.top &&
        event.clientY <= heroRect.bottom;

      if (!isInsideHero) {
        resetPortrait();
        return;
      }

      const portraitRect = portrait.getBoundingClientRect();
      const centerX = portraitRect.left + portraitRect.width / 2;
      const centerY = portraitRect.top + portraitRect.height * 0.46;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);
      const magneticRadius = Math.max(300, portraitRect.width * 0.82);
      const influence = Math.max(0, 1 - distance / magneticRadius);

      portraitX.set(Math.max(-20, Math.min(20, deltaX * 0.075 * influence)));
      portraitY.set(Math.max(-14, Math.min(14, deltaY * 0.06 * influence)));
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", resetPortrait);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", resetPortrait);
    };
  }, [portraitX, portraitY, shouldReduceMotion]);

  return (
    <section ref={heroRef} className="hero-section" aria-labelledby="hero-title">
      <div className="hero-rings" aria-hidden="true">
        <Suspense fallback={<div className="hero-rings__fallback" />}>
          <MagicRings
          color="#8B35D1"
          colorTwo="#42FCFF"
          ringCount={6}
          speed={0.65}
          attenuation={8}
          lineThickness={2}
          baseRadius={0.3}
          radiusStep={0.08}
          scaleRate={0.08}
          opacity={0.58}
          blur={1}
          noiseAmount={0.035}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={!shouldReduceMotion}
          mouseInfluence={0.12}
          hoverScale={1.06}
          parallax={0.025}
          clickBurst={!shouldReduceMotion}
          />
        </Suspense>
      </div>

      <div className="hero-display-stage" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.14, duration: 0.9, ease: motionEase }}
          className="hero-display"
        >
          HI, I&apos;M RIZVI
        </motion.div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.36, duration: 0.76, ease: motionEase }}
        >
          <h1 id="hero-title">Product Engineer &amp; Full-Stack Developer</h1>
          <p className="hero-summary">
            I design and build accessible SaaS and web products with React,
            Next.js, TypeScript, and thoughtful UI/UX.
          </p>
        </motion.div>

        <motion.div
          className="hero-actions"
          aria-label="Portfolio actions"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.48, duration: 0.72, ease: motionEase }}
        >
          <a
            href={profileLinks.resume}
            download="Sabbir-Rizvi-Resume.pdf"
            className="button button--tertiary"
            aria-label="Download Sabbir Rizvi's resume as a PDF"
          >
            DOWNLOAD RESUME
            <Download aria-hidden="true" size={16} />
          </a>
          <a href="#contact" className="button button--secondary">
            Contact me
          </a>
          <a href="#projects" className="button button--primary">
            View projects
            <ArrowDownRight aria-hidden="true" size={18} />
          </a>
        </motion.div>
      </div>

      <div
        ref={portraitRef}
        className="hero-portrait"
        aria-hidden="true"
      >
        <motion.div
          className="hero-portrait__entrance"
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 80,
            clipPath: shouldReduceMotion ? "none" : "inset(100% 0% 0% 0%)",
          }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.58, duration: 1.15, ease: motionEase }}
        >
          <motion.div
            className="hero-portrait__magnet"
            style={{ x: magneticX, y: magneticY }}
          >
            <motion.img
              src={Avatar}
              alt=""
              loading="eager"
              fetchPriority="high"
              draggable={false}
              animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-edge" aria-hidden="true" />
    </section>
  );
}
