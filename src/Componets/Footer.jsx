import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const element = footerRef.current;

    // GSAP Animation
    const animation = gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    // Cleanup function to prevent memory leaks
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      className="w-screen lg:h-[100vh] md:h-[100vh] sm:h-[80vh] h-[110vh] bg-[#070909] relative flex flex-col items-center justify-end"
      style={{ boxShadow: "0px 0px 100px rgba(11, 12, 91, 0.6)" }}
    >
      {/* Radial Gradient Background */}
      <div
        ref={footerRef}
        className="absolute w-full lg:h-[80vh] h-[90vh] top-0 flex justify-center items-center"
        style={{
          background: "radial-gradient(circle at center bottom, rgba(11, 12, 91, 0.5) 10%, rgba(7, 9, 9, 1) 40%)",
        }}
      >
        <div className="md:w-1/3 w-2/3 h-full flex flex-col justify-center items-center text-center">
          <p className="text-[#999999] text-2xl md:text-3xl italic">Reach out anytime</p>
          <h2 className="text-5xl text-[#e6e6e6] md:text-7xl mt-3">
            Let's Stay <span className="font-[Gabriela] md:text-7xl text-4xl">Connected</span>
          </h2>
          <div className="w-full m-3">
            <p className="text-[#999999] md:text-[25px] text-[20px]">
              Got questions or want to collaborate? Feel free to reach out—I'm open to new projects or just a casual chat!
            </p>
          </div>

          {/* Social Media Links */}
          <h2 className="text-[#e6e6e6] text-2xl mt-5">Follow Us</h2>
          <div className="flex space-x-10 mt-5">
  <a href="https://www.linkedin.com/in/webflora-technologies-3686a434b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#999999", fontSize: "50px" }} />
  </a>

  <a href="https://www.instagram.com/webflora.technologies/profilecard/?igsh=aW5lNnk1Z2g1ZXRq" 
     target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <FontAwesomeIcon icon={faInstagram} style={{ color: "#999999", fontSize: "50px" }} />
  </a>

  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
    <FontAwesomeIcon icon={faYoutube} style={{ color: "#999999", fontSize: "50px" }} />
  </a>
</div>


          {/* Contact Details */}
          <p className="text-[#ffffff] mt-5 text-xl">webfloratechnologies@gmail.com</p>
          <p className="text-[#ffffff] mt-2 text-xl">+917808923375</p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full  h-[5vh] text-white text-center pb-6">
        <p className="text-[#999999] text-sm">© {new Date().getFullYear()} WebFlora Technologies. All rights reserved.</p>
      </div>
    </div>
  );
}
