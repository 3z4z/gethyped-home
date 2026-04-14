import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import SkewButton from "./ui/skew-button/SkewButton";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function ExpertiseSection() {
  const containerRef = useRef(null);
  const expertiseData = [
    {
      title: "Social strategy",
      headline: "Slimme strategie. Sterke start.",
      text: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
      button: "Meer over social strategie",
    },
    {
      title: "Social strategy",
      headline: "Slimme strategie. Sterke start.",
      text: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
      button: "Meer over social strategie",
    },

    {
      title: "Social strategy",
      headline: "Slimme strategie. Sterke start.",
      text: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
      button: "Meer over social strategie",
    },

    {
      title: "Social strategy",
      headline: "Slimme strategie. Sterke start.",
      text: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
      button: "Meer over social strategie",
    },
  ];

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      cards.forEach((card, i) => {
        gsap.set(card, { perspective: 2000 });
        // Pin every card as it hits the top
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          end: "bottom+=1000px top",
        });
        const nextCard = cards[i + 1];
        // Optional: Add a slight scale or darkening effect to the card underneath
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.8,
            translateY: -100,
            rotateZ: i % 2 !== 0 ? 3 : -3,
            rotateX: i % 2 !== 0 ? 45 : -45,
            rotateY: i % 2 !== 0 ? 0 : -0,
            scrollTrigger: {
              trigger: cards[i + 1], // Trigger when the NEXT card starts moving in
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
          gsap.to(card, {
            opacity: 0,
            perspective: "reserve-3d",
            immediateRender: false,
            scrollTrigger: {
              trigger: nextCard,
              start: "top 20%", // Almost at the top
              end: "top 0%",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {expertiseData.map((exp, i) => (
        <section
          key={i}
          className="card h-screen w-full flex items-center justify-center"
        >
          <div
            className={`text-6xl font-bold w-full h-[calc(100%-5rem)] p-16 rounded-[2.5rem] flex flex-col justify-between ${i === 0 ? "bg-white" : i === 1 ? "bg-secondary" : i === 2 ? "bg-success" : i === 3 ? "bg-info" : "bg-base-content"}`}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-4">
                <span className="badge badge-lg">Expertise</span>
                <h2 className="text-9xl font-semibold tracking-tight">
                  {exp.title}
                </h2>
              </div>
              <p
                className={`text-9xl font-semibold ${i === 0 ? "" : "text-base-100"} opacity-15`}
              >
                0{i + 1}
              </p>
            </div>
            <div className="flex justify-between items-baseline">
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
            </div>
          </div>
        </section>
      ))}
      <div className="h-screen flex items-center justify-center" />
    </div>
  );
}
