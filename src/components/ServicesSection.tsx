import { FadeIn } from "./FadeIn";
import BlurText from "./BlurText";

const services = [
  {
    num: "01",
    title: "AI-Powered Web Application Development",
    desc: "Building intelligent web applications that leverage AI to automate tasks, generate content, or provide data-driven insights.",
  },
  {
    num: "02",
    title: "Custom SaaS & Collaborative Dashboard Design",
    desc: "Designing intuitive dashboards and admin panels that streamline workflows and enhance team productivity.",
  },
  {
    num: "03",
    title: "Modern UI/UX Makeovers (Glassmorphism & 3D Styling)",
    desc: "Transforming interfaces with trending aesthetics—glossy glassmorphism, floating 3D elements, and micro-interactions—to create immersive user experiences.",
  },
  {
    num: "04",
    title: "E-Commerce & Affiliate Platform Development",
    desc: "Building scalable online stores and affiliate networks with seamless user journeys, secure transactions, and performance-driven architecture.",
  },
  {
    num: "05",
    title: "Interactive Prototyping & Developer-Ready Handoffs",
    desc: "Crafting detailed, high-fidelity prototypes that mimic final product behavior, coupled with clean, organized documentation for engineering teams.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            y={30}
            className="flex flex-col sm:flex-row items-start sm:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0 gap-6 sm:gap-10 md:gap-16"
          >
            <div
              className="font-black leading-none shrink-0 text-center"
              style={{
                fontSize: "clamp(3rem, 10vw, 140px)",
                minWidth: "clamp(80px, 14vw, 200px)",
              }}
            >
              {service.num}
            </div>

            <div className="flex flex-col gap-2 sm:gap-4">
              <BlurText
                text={service.title}
                delay={60}
                animateBy="letters"
                direction="top"
                stepDuration={0.3}
                className="font-medium uppercase leading-tight"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              />
              <BlurText
                text={service.desc}
                delay={15}
                animateBy="words"
                direction="bottom"
                stepDuration={0.3}
                className="font-light leading-relaxed max-w-2xl opacity-60"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
