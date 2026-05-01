import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";
import { ResumeButton } from "./ResumeButton";
import MagicRings from "./MagicRings";
import Avatar from "../assets/avatar.webp";

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-between overflow-x-clip relative">
      {/* MagicRings background */}
      <div className="absolute inset-0 z-0">
        <MagicRings
          color="#7621B0"
          colorTwo="#42fcff"
          ringCount={6}
          speed={0.8}
          attenuation={8}
          lineThickness={2}
          baseRadius={0.3}
          radiusStep={0.08}
          scaleRate={0.08}
          opacity={0.6}
          blur={1}
          noiseAmount={0.05}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.15}
          hoverScale={1.1}
          parallax={0.03}
          clickBurst={true}
        />
      </div>

      <FadeIn delay={0} y={-20} as="nav" className="relative z-30">
        <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a
            href="#about"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Contact
          </a>
        </div>
      </FadeIn>

      <div className="grow flex flex-col justify-center relative z-20 pointer-events-none">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m rizvi
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light tracking-wide leading-snug max-w-40 sm:max-w-55 md:max-w-65"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            <span className="font-bold text-xl text-[#ffffff]">Frontend Developer</span>{" "}
            <span className="text-lg text-[#D7E2EA]">&</span>{" "}
            <span className="font-bold text-xl text-[#ffffff]">UI/UX Designer</span> <span className="
            text-lg text-[#D7E2EA]">Driven By
            Crafting Striking, Modern Web Experiences Integrating 3D Aesthetics.</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
          <ResumeButton />
          <ContactButton />
        </FadeIn>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80, clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-70 sm:w-90 md:w-110 lg:w-130 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none"
      >
        <div className="pointer-events-auto">
          <Magnet
            padding={100}
            magnetStrength={10}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img src={Avatar} alt="Rizvi Portrait" className="w-full h-auto" />
          </Magnet>
        </div>
      </motion.div>
    </section>
  );
}
