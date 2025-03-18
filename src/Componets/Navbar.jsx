import React, { useState, useLayoutEffect, useRef } from "react";
import WebfloraLogo from "../../src/assets/WebfloraLoggo.webp";
import { TbMenu2 } from "react-icons/tb";
import Webflora from "../../src/assets/Webflora.webp";
import { RiCloseLargeFill } from "react-icons/ri";
import gsap from "gsap";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navFullRef = useRef(null);
  const navItemsRef = useRef([]);

  // ✅ Set initial hidden state for mobile navbar
  useLayoutEffect(() => {
    if (!navFullRef.current) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      gsap.set(navFullRef.current, { x: "100%", opacity: 0 });
    }
  }, []);

  // ✅ Animate mobile menu on toggle
  useLayoutEffect(() => {
    if (!navFullRef.current) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      if (menu) {
        gsap.to(navFullRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.from(navItemsRef.current, {
          opacity: 0,
          x: 100,
          stagger: 0.2,
          duration: 0.5,
        });
      } else {
        gsap.to(navFullRef.current, {
          x: "100%",
          opacity: 0,
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    }
  }, [menu]);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className=" w-screen fixed top-0 left-0 right-0 bg-[#070909]/40 z-50 backdrop-blur-md">
      <nav className="w-full">
        {/* ✅ Desktop Navbar (Unchanged) */}
        <ul className="hidden md:flex text-white text-2xl px-6 flex justify-around items-center h-20">
          <li className="relative font-[Barlow_Condensed] tracking-[2px] group overflow-hidden h-12 flex items-center">
            <a href="/Services" className="relative w-32 h-full flex justify-center items-center overflow-hidden">
              <span className="absolute w-full text-center transition-all duration-300 translate-y-0 opacity-100 group-hover:-translate-y-full group-hover:opacity-0">
                SERVICES
              </span>
              <span className="absolute w-full text-center transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                SERVICES
              </span>
            </a>
          </li>
          <li className="relative group font-[Barlow_Condensed] tracking-[2px] overflow-hidden h-12 flex items-center">
            <a href="/About" className="relative w-32 h-full flex justify-center items-center overflow-hidden">
              <span className="absolute w-full text-center transition-all duration-300 translate-y-0 opacity-100 group-hover:-translate-y-full group-hover:opacity-0">
                ABOUT
              </span>
              <span className="absolute w-full text-center transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                ABOUT
              </span>
            </a>
          </li>
          <li className="relative group font-[Barlow_Condensed] tracking-[2px] overflow-hidden h-12 flex items-center">
            <a href="/" className="relative w-32 h-full flex justify-center items-center overflow-hidden">
              <span className="absolute w-full text-center transition-all duration-300 translate-y-0 opacity-100 group-hover:-translate-y-full group-hover:opacity-0">
                <img src={Webflora} alt="logo" className="w-150 h-7"  loading="lazy" />
              </span>
              <img src={WebfloraLogo} alt="Webflora Logo" loading="lazy" className="absolute w-17 h-auto transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </a>
          </li>
          <li className="relative group font-[Barlow_Condensed] tracking-[2px] overflow-hidden h-12 flex items-center">
            <a href="/Contact" className="relative w-32 h-full flex justify-center items-center overflow-hidden">
              <span className="absolute w-full text-center transition-all duration-300 translate-y-0 opacity-100 group-hover:-translate-y-full group-hover:opacity-0">
                CONTACT
              </span>
              <span className="absolute w-full text-center transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                CONTACT
              </span>
            </a>
          </li>
          <li className="relative group font-[Barlow_Condensed] tracking-[2px] overflow-hidden h-12 flex items-center">
            <a href="/Project" className="relative w-32 h-full flex justify-center items-center overflow-hidden">
              <span className="absolute w-full text-center transition-all duration-300 translate-y-0 opacity-100 group-hover:-translate-y-full group-hover:opacity-0">
                PROJECT
              </span>
              <span className="absolute w-full text-center transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                PROJECT
              </span>
            </a>
          </li>
        </ul>

        {/* ✅ Mobile Navbar */}
        

        <div className="md:hidden flex justify-between items-center px-5 h-16">
  <a href="/" className="z-50">
    <img src={WebfloraLogo} alt="Webflora Logo"  width="70" 
  height="40" loading="lazy" />
  </a>
  <button 
    onClick={handleMenu} 
    className="text-white z-50" 
    aria-label={menu ? "Close menu" : "Open menu"}
  >
    {menu ? <RiCloseLargeFill className="w-10 h-8" /> : <TbMenu2 className="w-10 h-8" />}
  </button>
</div>

{/* ✅ Mobile Menu */}
<div
  ref={navFullRef}
  className="fixed top-0 right-0 w-full h-screen bg-[#070909] text-white flex flex-col items-center pt-20 md:hidden z-40 opacity-0"
>
  {["Home", "Services", "About", "Contact", "Project"].map((item, index) => (
    <div key={item} ref={(el) => (navItemsRef.current[index] = el)} className="w-sm h-15">
      <a 
        href={`/${item === "Home" ? "" : item}`} 
        className="text-3xl px-15 py-4 font-[Barlow_Condensed] tracking-[2px]" 
        onClick={handleMenu}
        aria-label={`Go to ${item}`}
      >
        {item.toUpperCase()}
      </a>
    </div>
  ))}
</div>

      </nav>
    </div>
  );
}
