import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-30 sm:w-40 md:w-52.5"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D icon"
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-25 sm:w-35 md:w-45"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-30 sm:w-40 md:w-52.5"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D icon"
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-32.5 sm:w-42.5 md:w-55"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group"
          className="w-full h-auto"
        />
      </FadeIn>

      <div className="z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-3xl">
          <AnimatedText
            text="Frontend Developer and UI/UX Designer with 7+ years of design experience and 3+ years of hands-on frontend development. I specialize in bridging the gap between beautiful design and robust code — turning ideas into clean, responsive, and user-friendly web applications."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />

          <FadeIn delay={0.2} y={20}>
            <div className="flex flex-col gap-6 text-center">
              <p
                className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-2xl"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)" }}
              >
                My journey started with a deep curiosity for how people interact with digital products. I began as a UI/UX Designer, spending years mastering wireframing, prototyping, and design systems. Over time, I wanted to bring my own designs to life — which naturally pulled me into frontend development with React, Next.js, and TypeScript.
              </p>
              <p
                className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-2xl"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)" }}
              >
                I thrive on building products where design and engineering meet — whether it's crafting a seamless ride-booking experience, designing SaaS dashboards, or building AI-powered web apps. My design philosophy centers on user research, consistency, and collaboration with cross-functional teams.
              </p>
              <p
                className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-2xl"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)" }}
              >
                When I'm not coding or designing, you'll find me exploring the latest design trends, experimenting with 3D web aesthetics, contributing to open-source projects, or enjoying a good cricket match. I believe creativity flows best when you stay curious — both on and off screen.
              </p>
            </div>
          </FadeIn>

          <ContactButton />
        </div>
      </div>
    </section>
  );
}
