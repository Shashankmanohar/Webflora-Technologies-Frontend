import React from 'react'
import Navbar from '../Componets/Navbar';
import Projects from '../Componets/Projects';
import GetInTouch from '../Componets/GetInTouch';
import Footer from "../Componets/Footer";
import { Helmet } from 'react-helmet-async';
export default function Project() {
  return (
    <>
      <Helmet>
      <title>Our Projects | WebFlora Technologies</title>
        <meta name="description" content="See our portfolio of web development, SEO, and software development projects delivered to happy clients." />
        <meta name="keywords" content="web development portfolio, SEO case studies, software projects,Smart Attendance System, Bussiness Website, Shashank Manohar, Amitesh Kumar" />
        <meta property="og:title" content="Our Projects | WebFlora Technologies" />
        <meta property="og:description" content="Check out our past projects in web design, SEO, Smart Attendance System, Bussiness Website and software development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webfloratechnologies.com/projects" />
      </Helmet>
    <Navbar/>
    <Projects/>
    <GetInTouch/>
    <Footer/>
    </>
  )
}
