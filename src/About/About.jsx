import React from 'react'
import Navbar from '../Componets/Navbar';
import Abouts from '../Componets/Abouts';
import GetInTouch from '../Componets/GetInTouch';
import Footer from "../Componets/Footer";
import { Helmet } from 'react-helmet-async';
export default function About() {
  return (
    <>
      <Helmet>
      <title>About Us | WebFlora Technologies</title>
        <meta name="description" content="Learn more about WebFlora Technologies, our team, mission, and expertise in website development and SEO." />
        <meta name="keywords" content="About WebFlora, WebFlora Technologies, our team, web agency, Shashank Manohar, Amitesh Kumar" />
        <meta property="og:title" content="About Us | WebFlora Technologies" />
        <meta property="og:description" content="Get to know WebFlora Technologies and our expertise in web development and SEO." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webfloratechnologies.com/about" />
      </Helmet>
      <Navbar/>
      <Abouts/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}
