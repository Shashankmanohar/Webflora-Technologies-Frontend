import React, { useEffect, useRef,useMemo } from "react";
import gsap from "gsap";

export default function Banner() {
  const pageRef = useRef(null);
  const textRef1 = useRef({});
  const textRef2 = useRef({});
  const ctxRef = useRef(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      gsap.set(pageRef.current, { autoAlpha: 1 });
      gsap.fromTo(
        pageRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
      );
    });

    return () => ctxRef.current.revert(); // Cleanup animations
  }, []);

  const handleMouseEnter = (ref, index) => {
    const el = ref.current[index];
    if (!el) return;
    el.style.willChange = "transform";
    gsap.to(el, { scale: 1.5, duration: 0.3, ease: "power3.out" });
  };

  const handleMouseLeave = (ref, index) => {
    const el = ref.current[index];
    if (!el) return;
    gsap.to(el, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
      onComplete: () => (el.style.willChange = "auto"),
    });
  };

  const renderText = (text, ref) =>
    text.split("").map((char, ind) => (
      <span
        key={ind}
        ref={(el) => (ref.current[ind] = el)}
        onMouseEnter={() => handleMouseEnter(ref, ind)}
        onMouseLeave={() => handleMouseLeave(ref, ind)}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
    const textContent = useMemo(
      () =>
        "We design responsive websites that boost engagement and growth, specializing in web development, e-commerce, SEO, and UI/UX.",
      []
    );

  return (
    <div className="bg-black max-w-full z-[-51]">
      <div
        ref={pageRef}
        className="md:h-screen h-[75vh] max-w-100% flex justify-center items-center flex-col font-[Barlow_Condensed]"
        style={{
          background:
            "radial-gradient(closest-side at 50% 45%, rgba(11, 12, 91, 1), rgba(7, 9, 9, 1))",
          opacity: 1,
        }}
        loading="lazy"
      >
        
        <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-[32px] text-white uppercase">
          {renderText("We Build Websites", textRef1)}
        </h1>

        <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-[32px] text-white uppercase">
          {renderText("That Build Your Business", textRef2)}
        </h1>

        
      </div>
    </div>
  );
}
