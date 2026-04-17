/* eslint-disable no-unused-vars */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import SkewButton from "./ui/skew-button/SkewButton";
import { FaArrowRight } from "react-icons/fa";
import clip1 from "../assets/clips/exp1.mp4";
import clip2 from "../assets/clips/exp2.mp4";
import clip3 from "../assets/clips/exp3.mp4";
import clip4 from "../assets/clips/exp4.mp4";
import TiltCard from "./ui/tilt-card/TiltCard";
import ResponsiveWrapper from "./ResponsiveWrapper";

gsap.registerPlugin(ScrollTrigger);

export default function ExpertiseSection() {
  const containerRef = useRef(null);

  const expertiseData = [
    {
      title: "Social strategy",
      headline: "Smart strategy. Strong start.",
      text: "We dive deep into your brand, target audience, and goals. And we translate data into a clear plan with formats that make a real impact. That way, you know exactly why it works.",
      button: "More about social strategy",
      video: clip1,
    },
    {
      title: "Content Creation",
      headline: "Content that stands out and resonates.",
      text: "We create content that stands out. Sticks. And resonates with your target audience. Creative, fast, and energetic. Always with the goal in mind.",
      button: "More about content creation",
      video: clip2,
    },
    {
      title: "Activation",
      headline: "Visible where and when it counts.",
      text: "The right content deserves to be seen. We distribute the content where your target audience is. This way, your brand reaches the right people, exactly where and when it counts.",
      button: "More about activation",
      video: clip3,
    },
    {
      title: "Data",
      headline: "Insights that make an impact.",
      text: "We dive into the numbers to understand what really works. And fine-tune your content accordingly.",
      button: "More about data",
      video: clip4,
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      cards.forEach((card, i) => {
        const isLast = i === cards.length - 1;
        const nextCard = cards[i + 1];

        gsap.set(card, { perspective: 2000 });

        // ✅ PIN (exclude last)
        if (!isLast) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false,
            end: "bottom+=600px top", // slightly reduced for safer flow
          });
        }

        // ✅ ANIMATIONS (exclude last)
        if (!isLast && nextCard) {
          gsap.to(card, {
            scale: 0.8,
            y: -100,
            rotateZ: i % 2 !== 0 ? 3 : -3,
            rotateX: i % 2 !== 0 ? 45 : -45,
            scrollTrigger: {
              trigger: nextCard,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });

          gsap.to(card, {
            opacity: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: nextCard,
              start: "top 20%",
              end: "top 0%",
              scrub: true,
            },
          });
        }

        // ✅ HARD RESET LAST CARD
        if (isLast) {
          gsap.set(card, {
            clearProps: "all",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="px-10">
      {expertiseData.map((exp, i) => (
        <section
          key={i}
          className="card h-screen w-full flex items-center justify-center"
        >
          <div
            className={`text-6xl font-bold w-full h-[calc(100%-5rem)] p-16 rounded-[2.5rem] flex flex-col justify-between ${
              i === 0
                ? "bg-white"
                : i === 1
                  ? "bg-secondary"
                  : i === 2
                    ? "bg-success"
                    : i === 3
                      ? "bg-info"
                      : "bg-base-content"
            }`}
          >
            <ResponsiveWrapper>
              {/* TOP */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4">
                  <span className="font-medium py-2.25 px-3 rounded-lg text-2xl bg-base-100 w-max">
                    Expertise
                  </span>
                  <h2 className="text-9xl font-semibold tracking-tight">
                    {exp.title}
                  </h2>
                </div>
                <p
                  className={`text-9xl font-semibold ${
                    i === 0 ? "opacity-15" : "opacity-35 text-base-100"
                  }`}
                >
                  0{i + 1}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-6 max-w-lg">
                  <h3 className="font-semibold text-[2rem] tracking-tight">
                    {exp.headline}
                  </h3>
                  <p className="font-medium text-2xl leading-6.5">{exp.text}</p>
                  <SkewButton
                    title={exp.button}
                    icon={<FaArrowRight />}
                    style={i === 0 ? "primary" : "base"}
                  />
                </div>

                <TiltCard
                  radius="rounded-[2.5rem]"
                  className={`${
                    i === 0 ? "bg-primary" : "bg-base-100"
                  } rotate-5 aspect-3/4 max-w-96 h-max`}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={exp.video} type="video/mp4" />
                  </video>
                </TiltCard>
              </div>
            </ResponsiveWrapper>
          </div>
        </section>
      ))}
    </div>
  );
}
