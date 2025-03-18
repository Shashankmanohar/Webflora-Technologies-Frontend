import React from 'react'
import Navbar from '../Componets/Navbar';
import ServicesInfo from '../Componets/ServicesInfo';
import GetInTouch from '../Componets/GetInTouch';
import Footer from "../Componets/Footer";
import { Helmet } from 'react-helmet-async';

export default function Services() {
  return (
    <>
      <Helmet>
      <title>Our Services | WebFlora Technologies</title>
        <meta name="description" content="Explore our web development, SEO, and software development services designed to grow your business." />
        <meta name="keywords" content="website development, SEO, digital marketing, software solutions, Smart Attendance System, Bussiness Website, Shashank Manohar, Amitesh Kumar" />
        <meta property="og:title" content="Our Services | WebFlora Technologies" />
        <meta property="og:description" content="We offer top-quality web development,Smart Attendance System, Bussiness Website SEO, and software solutions for businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webfloratechnologies.com/services" />
      </Helmet>
      <Navbar/>
      <ServicesInfo/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}
