import React from 'react'
import Navbar from '../Componets/Navbar';
import ContactInfo from '../Componets/ContactInfo';
import GetInTouch from '../Componets/GetInTouch';
import Footer from '../Componets/Footer';
import { Helmet } from 'react-helmet-async';


export default function Contact() {
  return (
   <>
    <Helmet>
    <title>Contact Us | WebFlora Technologies</title>
        <meta name="description" content="Get in touch with WebFlora Technologies for web development, SEO, and software solutions." />
        <meta name="keywords" content="contact WebFlora, web development support, Smart Attendance System, Bussiness Website, SEO consultation,Shashank Manohar, Amitesh Kumar" />
        <meta property="og:title" content="Contact Us | WebFlora Technologies" />
        <meta property="og:description" content="Reach out to WebFlora Technologies for expert website and SEO services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webfloratechnologies.com/contact" />
    </Helmet>
    <Navbar/>
    <ContactInfo/>
    <GetInTouch/>
    <Footer/>
   </>
  )
}
