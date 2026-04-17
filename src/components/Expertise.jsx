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

        if (!isLast) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false,
            end: "bottom+=600px top",
          });
        }

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
    <div
      id="expertise"
      ref={containerRef}
      className="lg:px-10 md:px-8 sm:px-6 px-4"
    >
      {expertiseData.map((exp, i) => (
        <section
          key={i}
          className="card h-screen w-full flex items-center justify-center"
        >
          <div
            className={`font-bold w-full max-h-[calc(100%-5rem)] h-full lg:p-16 md:p-12 sm:p-8 p-5 rounded-[2.5rem] flex flex-col justify-between ${
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
            <ResponsiveWrapper
              className={
                "flex h-full flex-col sm:justify-between justify-start"
              }
            >
              <div className="flex justify-between items-center max-sm:pb-5">
                <div className="flex flex-col gap-4">
                  <span className="font-medium sm:py-2.25 sm:px-3 px-2 py-1.5 rounded-lg md:text-2xl sm:text-xl xs:text-lg text-sm bg-base-100 w-max">
                    Expertise
                  </span>
                  <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold tracking-tight">
                    {exp.title}
                  </h2>
                </div>
                <p
                  className={`max-lg:absolute max-lg:top-16 max-lg:right-8 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold ${
                    i === 0 ? "opacity-15" : "opacity-35 text-base-100"
                  }`}
                >
                  0{i + 1}
                </p>
              </div>

              <div className="flex justify-between sm:items-end items-start max-sm:flex-col-reverse max-sm:gap-5 max-sm:flex-1">
                <div className="flex flex-col lg:gap-6 gap-2.5 max-w-lg">
                  <h3 className="font-semibold lg:text-[2rem] sm:text-3xl xs:text-2xl text-xl tracking-tight">
                    {exp.headline}
                  </h3>
                  <p className="line-clamp-4 font-medium lg:text-2xl sm:text-xl xs:text-lg text-base lg:leading-6.5 sm:leading-5.5 xs:leading-5 leading-4.5">
                    {exp.text}
                  </p>
                  <SkewButton
                    title={exp.button}
                    icon={<FaArrowRight />}
                    style={i === 0 ? "primary" : "base"}
                  />
                </div>

                <TiltCard
                  radius="lg:rounded-[2.5rem] rounded-2xl"
                  inset="inset-1 md:inset-2 lg:inset-3"
                  className={`${
                    i === 0 ? "bg-primary" : "bg-base-100"
                  } sm:rotate-5 -rotate-3 aspect-3/4 lg:max-w-96 md:max-w-72 sm:max-w-56 max-w-42 h-max`}
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
