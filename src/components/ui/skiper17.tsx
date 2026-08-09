import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

export interface CardData {
  id: number | string;
  image?: string;
  alt?: string;
  [key: string]: unknown;
}

export interface StickyCard002Props<T extends CardData = CardData> {
  cards?: T[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
  renderCard?: (card: T, index: number) => React.ReactNode;
  children?: React.ReactNode;
}

const StickyCard002 = <T extends CardData = CardData>({
  cards,
  className,
  containerClassName,
  imageClassName,
  renderCard,
  children,
}: StickyCard002Props<T>) => {
  const container = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const elements = cardRefs.current.filter(
        (el): el is HTMLDivElement => el !== null,
      );
      const totalCards = elements.length;
      if (totalCards === 0) return;

      // Setup initial state:
      // - Card 0 visible at y:0%, all others hidden at y:100%
      // - z-index ascending (later cards sit ON TOP when they slide up)
      // - Only card 0 is interactive
      for (let i = 0; i < totalCards; i++) {
        gsap.set(elements[i], {
          y: i === 0 ? "0%" : "100%",
          scale: 1,
          rotation: 0,
          opacity: 1,
          zIndex: i + 1,
        });
        elements[i].style.pointerEvents = i === 0 ? "auto" : "none";
      }

      activeIndexRef.current = 0;

      // Helper: toggle pointer-events so only the active card is clickable
      const setActiveCard = (index: number) => {
        if (index === activeIndexRef.current) return;
        activeIndexRef.current = index;
        for (let i = 0; i < totalCards; i++) {
          elements[i].style.pointerEvents = i === index ? "auto" : "none";
        }
      };

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${window.innerHeight * 1.2 * (totalCards - 1)}`,
          pin: true,
          scrub: 0.6,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            // Each card transition occupies 1/(totalCards-1) of the progress
            const segment = 1 / (totalCards - 1);
            let active = 0;
            for (let i = 0; i < totalCards - 1; i++) {
              // Once we're past the halfway point of a segment,
              // the next card is the active one
              if (progress > (i + 0.5) * segment) {
                active = i + 1;
              }
            }
            setActiveCard(active);
          },
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = elements[i];
        const nextCard = elements[i + 1];
        const position = i;

        // Current card shrinks, rotates, fades
        scrollTimeline.to(
          currentCard,
          {
            scale: 0.88,
            rotation: 3,
            opacity: 0.5,
            duration: 1,
            ease: "none",
          },
          position,
        );

        // Next card slides up from below
        scrollTimeline.to(
          nextCard,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container },
  );

  const childArray = children ? React.Children.toArray(children) : null;
  const items = (childArray ?? cards ?? []) as (React.ReactNode | T)[];

  return (
    <div
      className={cn(
        "relative h-screen w-full flex items-center justify-center",
        className,
      )}
      ref={container}
    >
      <div className="sticky-cards relative flex h-[88vh] w-full items-center justify-center overflow-hidden p-2 sm:p-4 lg:p-6">
        <div
          className={cn(
            "relative h-full w-full max-w-7xl overflow-hidden rounded-3xl",
            containerClassName,
          )}
        >
          {items.map((item, i) => {
            const isChild = !!childArray;
            const card = item as T;
            return (
              <div
                key={isChild ? i : card.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute inset-0 h-full w-full will-change-transform"
                style={{
                  zIndex: i + 1,
                  pointerEvents: i === 0 ? "auto" : "none",
                }}
              >
                {isChild
                  ? (item as React.ReactNode)
                  : renderCard
                    ? renderCard(card, i)
                    : (
                        <img
                          src={card.image}
                          alt={card.alt || ""}
                          className={cn(
                            "rounded-4xl absolute h-full w-full object-cover",
                            imageClassName,
                          )}
                        />
                      )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Skiper17 = () => {
  const defaultCards = [
    { id: 1, image: "/images/lummi/img14.png" },
    { id: 2, image: "/images/lummi/img15.png" },
    { id: 3, image: "/images/lummi/img29.png" },
    { id: 4, image: "/images/lummi/img21.png" },
    { id: 5, image: "/images/lummi/img27.png" },
  ];

  return (
    <ReactLenis root>
      <div className="h-full w-full">
        <StickyCard002 cards={defaultCards} />
      </div>
    </ReactLenis>
  );
};

export { Skiper17, StickyCard002 };
