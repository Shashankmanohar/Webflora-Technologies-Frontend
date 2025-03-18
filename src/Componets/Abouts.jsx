import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Aboutimg from "../assets/Aboutimg.webp";

const SectionTitle = ({ text }) => (
  <div className="px-6 py-3 bg-[#232323] rounded-2xl text-[#0000fe] font-bold">
    {text}
  </div>
);

const AboutTextBlock = ({ children }) => (
  <div className="w-5/6 p-6 rounded-2xl text-[#848484] text-2xl tracking-[1px] text-center">
    {children}
  </div>
);

const Abouts = () => {
  const textRef = useRef(null);
  const aboutImgRef = useRef(null);

  useLayoutEffect(() => {
    gsap
      .timeline()
      .fromTo(
        textRef.current,
        { y: -150, opacity: 0 },
        { y: 0, opacity: 1, duration: 4.5, delay: 0.2, ease: "power3.out" }
      )
      .fromTo(
        aboutImgRef.current,
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 4.5, ease: "power3.out" },
        "<"
      );
  }, []);

  return (
    <div className="relative w-screen bg-[#070909] flex flex-col items-center py-16 px-4">
      {/* Background Image Section */}
      <div ref={aboutImgRef} className="relative w-full flex justify-center mt-8">
        <img
          src={Aboutimg}
          srcSet={`${Aboutimg} 600w, ${Aboutimg} 1200w, ${Aboutimg} 1800w`}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="About Us"
          loading="lazy"
          className="w-[90%] md:w-[90%] lg:w-6/7 h-[40vh] md:h-[40vh] lg:h-[50vh] object-cover opacity-60 rounded-2xl"
        />
        {/* Overlay Text */}
        <div
          ref={textRef}
          className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-[Barlow_Condensed] uppercase"
        >
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white font-bold">
            Hey There! Welcome to
          </h1>
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-[#0000fe] font-bold mt-2">
            Webflora Technologies!
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full flex flex-col items-center mt-[90px]">
        <div className="w-3/4 flex flex-col items-center text-center space-y-4">
          <SectionTitle text="WHO WE ARE" />
          <h1 className="text-white text-4xl">ABOUT OUR COMPANY</h1>
        </div>

        {/* Content Block */}
        <div className="flex flex-col items-center w-full mt-20 space-y-6">
          <AboutTextBlock>
            <h2>
              <span className="text-white">Let’s Build Something Amazing Together!</span> We’re a powerhouse of creative minds, tech enthusiasts, and
              marketing strategists turning ideas into reality. At{" "}
              <span className="text-white">Webflora Technologies</span>, we
              craft stunning websites, powerful software solutions, and
              game-changing SEO & social media strategies. Whether it’s
              designing pixel-perfect websites, developing cutting-edge
              software, or boosting your brand’s online presence, we bring{" "}
              <span className="text-[#0000fe]">innovation, passion, and expertise</span> to every project. Digital success isn’t just our job –{" "}
              <span className="text-white">it’s our obsession!</span>
            </h2>
          </AboutTextBlock>

          <div className="w-5/6 flex flex-col space-y-4">
            <div className="w-full p-6 rounded-2xl text-white hover:text-[#0000fe] text-2xl bg-[#232323] text-center">
              Our Missions
            </div>
            <div className="w-full p-6 rounded-2xl text-white hover:text-[#0000fe] text-2xl bg-[#232323] text-center">
              Our Vision
            </div>
          </div>
        </div>

        {/* Founder & Co-Founder Section */}
        <div className="w-full flex flex-col items-center mt-16 text-white text-2xl text-center">
          <h2 className="text-3xl font-bold text-[#0000fe]">Meet Our Founders</h2>
          <div className="mt-6">
            <h1>
              Founder:{" "}
              <span className="text-white font-semibold">Shashank Manohar</span> - MERN Stack Developer, Software Developer, SEO Expert
            </h1>
            <h1>
              Co-Founder:{" "}
              <span className="text-white font-semibold">Amitesh Kumar</span> - Web Developer, Web Designer, AI Engineer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
