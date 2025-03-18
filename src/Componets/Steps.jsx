import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Steps() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeupLeft = useRef([]);
  const fadeupRight = useRef([]);

  useEffect(() => {
    [fadeupLeft, fadeupRight].forEach((fadeRef) => {
      fadeRef.current.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 4 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const steps = [
    { number: "01", title: "Understanding Your Needs", subtitle: "DO WE MATCH?", details: ["We start by discussing your vision and business goals.", "Identify essential features and functionalities for your website.", "Conduct research on competitors and market trends."] },
    { number: "02", title: "Planning & Wireframing", subtitle: "WE NEED A PLAN", details: ["Create a blueprint of your website (wireframes & sitemaps).", "Structure the user experience (UX) for smooth navigation.", "Define content strategy and branding elements."] },
    { number: "03", title: "Designing Your Website", subtitle: "SOME MAGIC", details: ["Craft visually appealing designs aligned with your brand.", "Focus on user-friendly interfaces and responsiveness.", "Get feedback and make necessary revisions."] },
    { number: "04", title: "Development & Testing", subtitle: "MORE MAGIC", details: ["Convert designs into a fully functional website.", "Optimize for speed, performance, and SEO.", "Conduct rigorous testing for bugs and compatibility."] },
    { number: "05", title: "Launch & Maintenance", subtitle: "READY TO GO", details: ["Deploy the website on a secure server.", "Monitor performance and fix any post-launch issues.", "Provide ongoing maintenance and updates."] }
  ];

  return (
    <section className="w-screen h-auto bg-[#070909] flex flex-col items-center py-10">
      <hr className="w-full border-t-5 border-[#0B0C57] mt-5 animate-pulse shadow-[0_0_20px_#0B0C57]" />
      <h1 className="text-white md:text-3xl text-2xl font-[Barlow_Condensed] mt-[10vh] text-center">THE PROCESS</h1>
      <h1 className="text-white md:text-8xl text-6xl font-[Barlow_Condensed] uppercase mt-5 text-center">Your Website</h1>
      <h1 className="text-white md:text-6xl text-5xl font-[Caveat] mt-5 text-center">in 5 steps.</h1>

      {/* Mobile View */}

      <div className="flex justify-start w-full items-start lg:hidden px-4">
        <div className="w-1 flex flex-col items-center mt-20 sm:pl-10">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-center w-8 h-8 bg-[#0B0C57] text-white font-bold rounded-full shadow-[0_0_15px_#0B0C57]">
                {step.number}
              </div>
              {index < steps.length - 1 && <div className="w-1 h-75 sm:h-80 bg-[#0B0C57] shadow-md"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="w-full flex flex-col items-center pl-5">
          {steps.map((step, index) => (
            <div key={step.number} ref={(el) => (fadeupLeft.current[index] = el)} className="flex flex-col items-center w-full mt-20 sm:mt-30">
              <div className="w-full max-w-md py-6 px-4 border-[#0B0C57]/30 border-2 rounded-lg bg-[#0B0C57]/30 backdrop-blur-sm text-white">
                <div className="text-lg font-bold">{step.number} - {step.title}</div>
                <p className="text-md text-[#0000fe]">{step.subtitle}</p>
                <ul className="mt-2 text-md">
                  {step.details.map((detail, i) => (
                    <li key={i}>- {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop View */}
      <div className="hidden h-[180vh] lg:flex flex-row justify-center w-full mt-10">
        {/* Left Column */}
        <div className="w-1/2 flex flex-col items-end pr-10">
          {steps.filter((_, index) => index % 2 === 0).map((step, index) => (
            <div key={step.number} ref={(el) => (fadeupLeft.current[index] = el)} className="flex flex-col items-end mb-100">
              <div className="w-[500px] py-10 px-5 border-[#0B0C57]/30 border-2 rounded-lg bg-[#0B0C57]/30 backdrop-blur-sm text-white">
                <div className="text-xl font-bold">{step.number} - {step.title}</div>
                <p className="text-lg text-[#0000fe]">{step.subtitle}</p>
                <ul className="mt-2 text-lg">
                  {step.details.map((detail, i) => <li key={i}>- {detail}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Center Timeline */}
        <div className="w-1 flex flex-col items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-center w-10 h-10 bg-[#0B0C57] text-white font-bold rounded-full shadow-[0_0_15px_#0B0C57]">
                {step.number}
              </div>
              {index < steps.length - 1 && <div className="w-1 h-90 bg-[#0B0C57] shadow-md"></div>}
            </React.Fragment>
          ))}
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex flex-col items-start pl-10">
          {steps.filter((_, index) => index % 2 !== 0).map((step, index) => (
            <div key={step.number} ref={(el) => (fadeupRight.current[index] = el)} className="flex flex-col mt-90">
              <div className="w-[500px] py-10 px-5 border-[#0B0C57]/30 border-2 rounded-lg bg-[#0B0C57]/30 backdrop-blur-sm text-white">
                <div className="text-xl font-bold">{step.number} - {step.title}</div>
                <p className="text-lg text-[#0000fe]">{step.subtitle}</p>
                <ul className="mt-2 text-lg">
                  {step.details.map((detail, i) => <li key={i}>- {detail}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
