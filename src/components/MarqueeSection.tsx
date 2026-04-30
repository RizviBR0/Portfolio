import { useEffect, useRef, useState } from "react";
import p1 from "../assets/projects/1.png";
// import p2 from "../assets/projects/2.png";
import p3 from "../assets/projects/3.png";
import p4 from "../assets/projects/4.png";
import p5 from "../assets/projects/5.png";
import p6 from "../assets/projects/6.png";
import p7 from "../assets/projects/7.png";
import p8 from "../assets/projects/8.png";
import p9 from "../assets/projects/9.png";
import p10 from "../assets/projects/10.png";
import p11 from "../assets/projects/11.png";
import p12 from "../assets/projects/12.png";
import p13 from "../assets/projects/13.png";
import p14 from "../assets/projects/14.png";
import p16 from "../assets/projects/16.png";
import p17 from "../assets/projects/17.png";
import p18 from "../assets/projects/18.png";
import p19 from "../assets/projects/19.png";

const row1Images = [p1, p19, p3, p4, p5, p6, p7, p8, p9, p10];

const row2Images = [p11, p12, p13, p14, p16, p17, p18, p19];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const calculatedOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const row1Tripled = [...row1Images, ...row1Images, ...row1Images];
  const row2Tripled = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      <div
        className="flex gap-3 will-change-transform"
        style={{ transform: `translate3d(${offset - 200}px, 0, 0)` }}
      >
        {row1Tripled.map((src, i) => (
          <img
            key={`row1-${i}`}
            src={src}
            alt="Project Preview"
            loading="lazy"
            className="w-105 h-67.5 rounded-2xl object-top object-cover shrink-0"
          />
        ))}
      </div>

      <div
        className="flex gap-3 will-change-transform"
        style={{ transform: `translate3d(${-(offset - 200)}px, 0, 0)` }}
      >
        {row2Tripled.map((src, i) => (
          <img
            key={`row2-${i}`}
            src={src}
            alt="Project Preview"
            loading="lazy"
            className="w-105 h-67.5 rounded-2xl object-top object-cover shrink-0"
          />
        ))}
      </div>
    </section>
  );
}
