import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Marquee } from "./ui/Marquee";

type Testimonial = {
  quote: string;
  role: string;
  context: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Sabbir caught gaps in the booking flow before they reached development. The final screens covered scheduling, live tracking, and cancellations clearly, so implementation needed far less back-and-forth.",
    role: "Product lead",
    context: "Mobility platform",
  },
  {
    quote:
      "He did not stop at the happy path. Empty states, errors, and handoff details were already considered, which made the build much easier for the rest of the team.",
    role: "Frontend engineer",
    context: "Remote product team",
  },
  {
    quote:
      "We started with a rough product idea and a scattered list of requirements. Sabbir turned it into a flow we could review, test, and build without losing the original intent.",
    role: "Founder",
    context: "Early-stage SaaS",
  },
  {
    quote:
      "Sabbir was reliable across both design and frontend. When a technical constraint appeared, he adjusted the interaction quickly and kept the experience consistent.",
    role: "Studio director",
    context: "Digital product studio",
  },
  {
    quote:
      "The product felt noticeably easier to use after his pass. The hierarchy was clearer, the responsive states held up, and we had fewer questions during QA.",
    role: "Operations lead",
    context: "On-demand services",
  },
  {
    quote:
      "He communicates early when something is unclear and follows through on the small details. That made the entire remote collaboration feel straightforward.",
    role: "Design lead",
    context: "Distributed studio team",
  },
];

const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3);

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="testimonial-card">
      <blockquote>
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption>
        <span>{testimonial.role}</span>
        <span aria-hidden="true">/</span>
        <span>{testimonial.context}</span>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.48,
  });

  const leftCurtainX = useTransform(progress, [0, 0.42], ["0%", "-102%"]);
  const rightCurtainX = useTransform(progress, [0, 0.42], ["0%", "102%"]);
  const contentScale = useTransform(progress, [0, 0.38], [0.93, 1]);
  const contentOpacity = useTransform(progress, [0.02, 0.3], [0.35, 1]);
  const headingY = useTransform(progress, [0, 1], [46, -24]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="testimonials-section"
      aria-labelledby="testimonials-title"
      data-reduced-motion={shouldReduceMotion ? "true" : undefined}
    >
      <div className="testimonials-stage">
        <motion.div
          className="testimonials-stage__content"
          style={
            shouldReduceMotion
              ? undefined
              : { scale: contentScale, opacity: contentOpacity }
          }
        >
          <motion.header
            className="testimonials-heading"
            style={shouldReduceMotion ? undefined : { y: headingY }}
          >
            <p className="eyebrow justify-center">Client feedback</p>
            <h2 id="testimonials-title">What clients say</h2>
          </motion.header>

          {shouldReduceMotion ? (
            <div className="testimonials-static-grid">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={`${testimonial.role}-${testimonial.context}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ) : (
            <div className="testimonials-reels">
              <div className="testimonials-row testimonials-row--forward">
                <div>
                  <Marquee pauseOnHover repeat={4} className="testimonials-marquee">
                    {firstRow.map((testimonial) => (
                      <TestimonialCard
                        key={`${testimonial.role}-${testimonial.context}`}
                        testimonial={testimonial}
                      />
                    ))}
                  </Marquee>
                </div>
              </div>

              <div className="testimonials-row testimonials-row--reverse">
                <div>
                  <Marquee
                    reverse
                    pauseOnHover
                    repeat={4}
                    className="testimonials-marquee testimonials-marquee--reverse"
                  >
                    {secondRow.map((testimonial) => (
                      <TestimonialCard
                        key={`${testimonial.role}-${testimonial.context}`}
                        testimonial={testimonial}
                      />
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {shouldReduceMotion ? null : (
          <div className="testimonials-curtain" aria-hidden="true">
            <motion.div
              className="testimonials-curtain__panel testimonials-curtain__panel--left"
              style={{ x: leftCurtainX }}
            >
              <span>What clients say</span>
            </motion.div>
            <motion.div
              className="testimonials-curtain__panel testimonials-curtain__panel--right"
              style={{ x: rightCurtainX }}
            >
              <span>What clients say</span>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
