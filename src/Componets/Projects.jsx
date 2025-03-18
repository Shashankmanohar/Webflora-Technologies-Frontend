import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import image1 from "../assets/ec.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import Aichatbot from "../assets/Aichatbot.webp";

export default function Projects() {
    const textref = useRef(null);
    const ProjectRef = useRef(null);
    const cursorRef = useRef(null);

    // Animate text on mount
    useEffect(() => {
        gsap.fromTo(
            textref.current,
            { y: -150, opacity: 0 },
            { y: 0, opacity: 1, duration: 2.5, ease: "power3.out" }
        );
    }, []);

    // Animate project cards
    useEffect(() => {
        gsap.fromTo(
            ProjectRef.current,
            { y: 150, opacity: 0 },
            { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
        );
    }, []);

    // Custom Cursor Animation
    useEffect(() => {
        const cursorSize = 40;
        const handleMouseMove = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX - cursorSize / 2,
                y: e.clientY - cursorSize / 2,
                duration: 1.5,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const projects = [
        {
            title: "E-Commerce Website",
            description: "A high-performance e-commerce platform with seamless UI/UX and secure payment integration.",
            technologies: ["React", "Tailwind", "Stripe API"],
            image: image1,
            link: "#",
        },
        {
            title: "SEO & Marketing Campaign",
            description: "Optimized website and launched an ROI-driven marketing campaign for brand growth.",
            technologies: ["SEO", "Google Ads", "Content Marketing"],
            image: image2,
            link: "#",
        },
        {
            title: "Smart Attendance System",
            description: "Developed an AI-powered face recognition attendance system for automated tracking.",
            technologies: ["Python", "OpenCV", "TensorFlow"],
            image: image3,
            link: "#",
        },
        {
            title: "AI Chatbot Integration",
            description: "Built a conversational AI chatbot for customer support automation.",
            technologies: ["Dialogflow", "Node.js", "React"],
            image: Aichatbot,
            link: "#",
        },
    ];

    return (
        <div className="relative w-screen bg-[#070909] flex flex-col items-center py-16">
            {/* Custom Cursor */}
            <div
                ref={cursorRef}
                className="hidden lg:flex fixed w-[40px] h-[40px] bg-[#181818] leading-2 rounded-full flex justify-center items-center p-4 text-white text-[10px] pointer-events-none z-50"
                style={{ top: 0, left: 0 }}
            ></div>

            {/* Section Title */}
            <div
                ref={textref}
                className="w-2/3 mt-4 text-center font-[Barlow_Condensed] text-white text-4xl md:text-6xl lg:text-7xl mb-10 uppercase"
            >
                <h1>Check Our Works With</h1>
                <h1>Real Results</h1>
            </div>

            {/* Project Cards */}
            <div className="w-11/12">
                <div ref={ProjectRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#181818] p-6 w-full h-auto rounded-2xl shadow-md hover:shadow-lg transition-all bg-gradient-to-br from-[#0b0c5b80] to-[#070909]"
                            onMouseEnter={() => {
                                cursorRef.current.innerText = "View";
                                gsap.to(cursorRef.current, { scale: 3, backgroundColor: "rgba(146, 146, 146, 0.15)" });
                            }}
                            onMouseLeave={() => {
                                cursorRef.current.innerHTML = "";
                                gsap.to(cursorRef.current, { scale: 1, backgroundColor: "white" });
                            }}
                        >
                            {/* ✅ Optimized Image with Responsive `srcSet` */}
                            <picture>
                                <source srcSet={`${project.image}?w=800`} media="(min-width: 1024px)" />
                                <source srcSet={`${project.image}?w=600`} media="(min-width: 768px)" />
                                <source srcSet={`${project.image}?w=400`} media="(max-width: 767px)" />
                                <img
                                    src={`${project.image}?w=800`}  // Fallback image
                                    alt={project.title}
                                    className="w-full h-[14rem] object-cover rounded-xl mb-4"
                                    loading={index === 0 ? "eager" : "lazy"} // First image loads eagerly
                                    width="800"
                                    height="224"
                                />
                            </picture>

                            {/* Project Info */}
                            <h1 className="text-2xl font-semibold text-white mb-2">{project.title}</h1>
                            <p className="text-white/70 mb-4">{project.description}</p>

                            {/* Technologies Used */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
