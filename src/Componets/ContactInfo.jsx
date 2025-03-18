import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";

export default function ContactInfo() {
  const textref = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    requestIdleCallback(() => {
      gsap.fromTo(
        textref.current,
        { y: -150, opacity: 0 },
        { y: 0, opacity: 1, duration: 2.5, ease: "power3.out" }
      );
    });
  }, []);

  useEffect(() => {
    requestIdleCallback(() => {
      gsap.fromTo(
        contactRef.current,
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
      );
    });
  }, []);

  return (
    <div className="w-screen md:h-[130vh] lg:h-[130vh] bg-[#070909] flex flex-col justify-center items-center p-4">
      <div className="lg:w-1/2 w-full lg:h-[100vh] h-[20vh] flex justify-center items-center">
        <h2
          ref={textref}
          className="text-white md:text-7xl text-3xl font-[Barlow_Condensed] uppercase mt-6 text-center"
        >
          Let's Work Together
        </h2>
      </div>
      <div
        ref={contactRef}
        className="w-screen md:w-[90vw] lg:h-[100vh] md:h-[90vh] h-auto bg-[#181818] rounded-4xl mt-9 flex flex-col justify-center items-center p-6"
      >
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1 rounded-3xl p-6 bg-[#242424] text-white">
              <h2 className="text-xl">Contact Number:</h2>
              <p className="text-2xl hover:text-[#0000fe] transition duration-300 hover:underline cursor-pointer">
                +917808923375
              </p>
            </div>
            <div className="flex-1 rounded-3xl p-6 bg-[#242424] text-white">
              <h2 className="text-xl">Address:</h2>
              <p className="text-2xl uppercase hover:text-[#0000fe] transition duration-300 hover:underline cursor-pointer">
                IOC Colony, Kumhrar
              </p>
              <p className="text-2xl hover:text-[#0000fe] transition duration-300 hover:underline cursor-pointer">
                Patna, 800026
              </p>
            </div>
            <div className="flex-1 md:w-16 rounded-3xl p-6 bg-[#242424] text-white">
              <h2 className="text-xl">Email:</h2>
             <p className="text-xl hover:text-[#0000fe] transition duration-300 hover:underline cursor-pointer break-all">
                webfloratechnologies@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1 rounded-3xl p-6 bg-[#242424] text-white">
              <h2 className="text-xl">Opening Hours:</h2>
              <p className="text-lg uppercase hover:text-[#0000fe] transition duration-300 hover:underline cursor-pointer">
                Mon to Fri: 9.00am - 8.30pm
              </p>
              <p className="text-lg uppercase hover:text-[#0000fe] transition duration-300 hover:underline cursor-pointer">
                Sat: 10.00am - 6.30pm
              </p>
              <p className="text-lg uppercase hover:text-[#0000fe] transition duration-300 hover:underline cursor-pointer">
                Sun: Closed
              </p>
            </div>
            <div className="flex-1 rounded-3xl p-6 bg-[#242424] text-white flex flex-col items-center">
              <h2 className="text-xl mb-4">Follow us:</h2>
              <div className="flex gap-6">
                <a 
                  href="https://www.linkedin.com" 
                  className="hover:text-[#0000fe] text-white text-[40px]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                  title="Follow us on LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a 
                  href="https://www.instagram.com/webflora.technologies/profilecard/?igsh=aW5lNnk1Z2g1ZXRq" 
                  className="hover:text-[#0000fe] text-white text-[40px]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  title="Follow us on Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a 
                  href="https://www.youtube.com" 
                  className="hover:text-[#0000fe] text-white text-[40px]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Subscribe to our YouTube channel"
                  title="Subscribe to our YouTube channel"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full rounded-3xl overflow-hidden">
            <iframe 
              className="w-full h-[40vh] rounded-3xl border-0" 
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.169068,25.597339,85.179068,25.607339&layer=mapnik"
              title="OpenStreetMap showing location"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
