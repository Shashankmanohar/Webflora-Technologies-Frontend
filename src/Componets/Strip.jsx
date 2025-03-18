import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import WebfloraLoggo from "../assets/WebfloraLoggo.webp";

const MovingStripe = () => {
  const stripeRef = useRef(null);

  useEffect(() => {
    gsap.set(stripeRef.current, { x: "0%" }); // Prevents initial animation delay
    gsap.to(stripeRef.current, {
      x: "-50%",
      duration: 40,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#070909] py-6 border-none">
      

      {/* MOVING STRIPE (This should NOT contain LCP text) */}
      <div
        ref={stripeRef}
        className="flex space-x-10 min-w-max border-none moving-stripe"
        style={{ willChange: "transform" }} // Improves performance
      >
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="flex items-center text-white md:text-6xl sm:text-5xl text-5xl font-[Barlow_Condensed]"
          >
            <h2>WE BUILD YOU GROW</h2>
            <div className="pl-10 w-33">
              <img
                src={WebfloraLoggo}
                alt="Logo"
                width="80"
                height="40"
                loading="lazy"
                fetchpriority="low"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingStripe;
