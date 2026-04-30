import { FadeIn } from "./FadeIn";
import { ContactButton } from "./ContactButton";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 10vw, 120px)" }}
            >
              Let&apos;s work<br />together
            </h2>

            <p
              className="text-[#D7E2EA]/70 font-light max-w-lg leading-relaxed"
              style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)" }}
            >
              Have a project in mind or just want to say hello? I&apos;d love to hear from you. Let&apos;s create something extraordinary.
            </p>

            <ContactButton />
          </div>
        </FadeIn>

        <div className="mt-24 sm:mt-32 md:mt-40 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#D7E2EA]/40 text-sm font-light">
          <span>&copy; {new Date().getFullYear()} Jack. All rights reserved.</span>
          <div className="flex gap-6 uppercase tracking-widest text-xs">
            <a href="#about" className="hover:text-white/80 transition-colors">About</a>
            <a href="#services" className="hover:text-white/80 transition-colors">Services</a>
            <a href="#projects" className="hover:text-white/80 transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
