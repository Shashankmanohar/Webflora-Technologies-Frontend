import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ServicesInfo() {
    const textref = useRef(null);
    const ServicesRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect(); // Prevents repeated animation
                }
            },
            { threshold: 0.2 }
        );
        if (textref.current) observer.observe(textref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (animate) {
            requestAnimationFrame(() => {
                gsap.fromTo(
                    textref.current,
                    { y: -100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
                );
                gsap.fromTo(
                    ServicesRef.current,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
                );
            });
        }
    }, [animate]);
    

    const services = [
        {
            title: "Web Development",
            description: "We build high-quality, scalable, and responsive websites that enhance user experience and business growth.",
            features: [
                "Custom Website Development (Static & Dynamic)",
                "E-commerce Solutions (Shopify, WooCommerce, Magento)",
                "CMS Development (WordPress, Joomla, Drupal)",
                "Web App Development (React, Angular, Vue, Laravel)",
                "Website Maintenance & Security",
            ],
            button: "Get a Free Quote",
        },
        {
            title: "Web Design",
            description: "A well-designed website isn’t just about looks—it’s about creating a seamless user experience.",
            features: [
                "Modern & Responsive Web Design",
                "UI/UX Design for Better User Experience",
                "Landing Pages Optimized for Conversions",
                "Branding & Graphic Design (Logos, Banners)",
                "Wireframing & Prototyping (Figma, Adobe XD)",
            ],
            button: "Let’s Design",
        },
        {
            title: "Social Media Marketing (SMM)",
            description: "Boost your online presence with our strategic social media marketing services.",
            features: [
                "Social Media Account Management (FB, IG, LinkedIn, Twitter)",
                "Paid Ad Campaigns (Google Ads, Facebook & Instagram Ads)",
                "Creative Content & Engaging Posts",
                "Influencer Marketing & Brand Collaborations",
                "Social Media Analytics & Performance Tracking",
            ],
            button: "Grow Your Socials",
        },
        {
            title: "Search Engine Optimization (SEO)",
            description: "Rank higher on Google and drive more organic traffic to your website with our data-driven SEO strategies.",
            features: [
                "On-Page SEO (Keyword Research, Content Optimization)",
                "Off-Page SEO (Link Building, Guest Posting)",
                "Technical SEO (Speed, Mobile Optimization, Security)",
                "Local SEO (Google My Business, Local Citations)",
                "SEO Audits & Competitor Analysis",
            ],
            button: "Boost My SEO",
        },
        {
            title: "Software Development",
            description: "From business software to AI-driven automation, we develop custom solutions tailored to your needs.",
            features: [
                "Custom Software Development (Enterprise & SaaS)",
                "Mobile App Development (iOS & Android)",
                "ERP & CRM Development",
                "API Development & Integration",
                "AI & Automation Solutions",
            ],
            button: "Let’s Talk",
        },
    ];

    return (
        <div className="w-screen bg-[#070909] flex flex-col items-center py-20">
            <div ref={textref} className="lg:w-2/5 w-2/3 uppercase font-[Barlow_Condensed] text-center text-white text-4xl md:text-6xl lg:text-8xl mb-10">
                <h1>Discover</h1>
                <h1>Our Services</h1>
            </div>
            <div className="w-11/12">
                <div ref={ServicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-blue-900/50 to-[#070909] p-8 w-full h-auto md:h-130 lg:h-96 rounded-2xl shadow-md hover:shadow-lg transition-all"
                        >
                            <h1 className="text-2xl font-semibold text-white mb-4">{service.title}</h1>
                            <h2 className="text-white text-sm md:text-lg mb-4" style={{ opacity: 1 }}>{service.description}</h2>

                            <ul className="text-white/90 text-sm mb-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 mb-2">✅ {feature}</li>
                                ))}
                            </ul>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg group-hover:bg-blue-700 transition-all">
                                {service.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
