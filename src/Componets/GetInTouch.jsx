import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouch() {
  const textRef = useRef(null);
  const contactRef = useRef(null);
  const gsapContext = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    contact: "",
    businessType: "",
    description: "",
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -150,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(contactRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    });

    gsapContext.current = ctx;

    return () => {
      ctx.revert(); // Cleanup GSAP animations on unmount
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://webflora-technologies-backend-3duf.vercel.app/webflora/form", formData);
      
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setFormData({
        name: "",
        businessName: "",
        email: "",
        contact: "",
        businessType: "",
        description: "",
      });
    } catch (error) {
      toast.error("Form submission failed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Error submitting data", error);
    }
  };

  return (
    <div className="w-screen lg:h-[100vh] md:h-[140vw] h-[130vh] bg-[#070909] flex flex-col lg:flex-row justify-center items-center">
      <ToastContainer /> {/* Toast notifications container */}

      <div className="w-full md:h-full h-3/5 flex lg:flex-row flex-col justify-center items-center">
        {/* Animated Text Section */}
        <div className="lg:w-1/2 w-full md:h-1/3 h-1/2 flex flex-col justify-center items-center">
          <div ref={textRef} className="flex flex-col items-center justify-center">
            <h1 className="text-white lg:text-[250px] md:text-[200px] text-[170px] lg:mt-[-50px]">Let's</h1>
            <h1 className="text-[#0000fe]/70 lg:text-[250px] md:text-[200px] text-[170px] lg:mt-[-240px] mt-[-170px] ml-[80px]">
              Talk!
            </h1>
          </div>
        </div>

        {/* Contact Form */}
        <div ref={contactRef} className="lg:w-1/2 w-full md:h- flex flex-col justify-center items-center mt-5">
          <form onSubmit={handleSubmit} className="w-full h-full flex flex-col md:justify-center items-center mt-5">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="md:w-3/4 w-4/5 h-[50px] text-white px-7 py-3 text-lg mb-7 bg-[#212121] rounded-lg outline-[#070909]"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="md:w-3/4 w-4/5 h-[50px] text-white px-8 py-3 text-lg mb-7 bg-[#212121] rounded-lg outline-[#070909]"
            />
            <input
              type="number"
              name="contact"
              placeholder="Enter Your Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="md:w-3/4 w-4/5 h-[50px] text-white px-8 py-3 text-lg mb-7 bg-[#212121] rounded-lg outline-[#070909]"
            />
            <input
              type="text"
              name="businessName"
              placeholder="Enter Business Name"
              value={formData.businessName}
              onChange={handleChange}
              className="md:w-3/4 w-4/5 h-[50px] text-white px-8 py-3 text-lg mb-7 bg-[#212121] rounded-lg outline-[#070909]"
            />
            <input
              type="text"
              name="businessType"
              placeholder="Enter Your Business Type"
              value={formData.businessType}
              onChange={handleChange}
              className="md:w-3/4 w-4/5 h-[50px] text-white px-8 py-3 text-lg mb-7 bg-[#212121] rounded-lg outline-[#070909]"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="md:w-3/4 w-4/5 h-[100px] p-3 mb-7 text-white border rounded-lg bg-[#212121] outline-[#070909]"
              required
            />
            <button
              type="submit"
              className="bg-[#0000fe]/70 text-white md:w-3/4 text:lg w-4/5 mb-12 px-4 transition duration-300 hover:bg-white hover:text-black py-2 cursor-pointer rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
