import React, { useEffect } from "react";
import Layout from "./components/layout/Layout";
import ScrollTop from "./components/ScrollTop";
import AboutUsSection from "./pages/About";
import Testimonial from "./pages/Testimonial";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "./pages/Services";
import LatestCases from "./pages/LatestCases";
import Whatsapp from "./components/Whatsapp";
import Call from "./components/Call";

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <>
    <Layout>
      <ScrollTop/>
      <Call/>
      <Whatsapp/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/testimonial" element={<Testimonial/>}/>
     <Route path="/gallery" element={<Gallery/>}/> 
     <Route path="/contact" element={<Contact/>}/> 
     <Route path="/about" element={<AboutUsSection/>}/> 
     <Route path="/services" element={<Services/>}/>
     <Route path="/latest_case" element={<LatestCases/>}/>
      </Routes>
    </Layout>
    </>

  );
}

export default App;












