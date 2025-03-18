import React from "react";
import Navbar from "../Componets/Navbar";
import Banner from "../Componets/Banner";
import Strip from "../Componets/Strip";
import Steps from "../Componets/Steps";
import GetInTouch from "../Componets/GetInTouch";
import Footer from "../Componets/Footer";
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div className="m-0 p-0 box-border overflow-hidden"> {/* Prevent page stretching */}
      <Helmet>
      <title>WebFlora Technologies | Web Development & SEO</title>
        <meta name="description" content="WebFlora Technologies offers expert web design, SEO, and software development to grow your business." />
        <meta name="keywords" content="web development, SEO services, digital marketing, software development, UI/UX design, Smart Attendance System, Bussiness Website, Shashank Manohar, Amitesh Kumar" />
        <meta property="og:title" content="WebFlora Technologies | Web Development & SEO" />
        <meta property="og:description" content="Professional web design, SEO, Smart Attendance System, Bussiness Website and software solutions for businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webfloratechnologies.com" />
      </Helmet>
      <Navbar />
      <Banner />
      <Strip />
      <Steps/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}
