

import React from 'react'
import  HeroSection  from '../newComponent/HeroSection'
import ServicesSection from '../newComponent/ServicesSection'
import PracticeSection from '../newComponent/PracticeSection'
import DentalTeam from '../newComponent/DentalTeam'
// import Carousel from '../components/Carousel'
// import Banner from '../components/Banner'
// import GalleryComponent from '../components/GalleryComponent'
// import AboutUsSection from '../components/AboutUsSection'
// import ChooseUsSection from '../components/ChooseUsSection'
// import ExpertiseDentalServices from '../components/ExpertiseDentalServices'
import Testimonial from '../components/TestimonialComponent'

const Home = () => {
  return (
   <div className='mt-4'>
      <HeroSection/>
      <ServicesSection/>
      <PracticeSection/>
      <DentalTeam/>
       <Testimonial/>
      {/* <Carousel />
      
        <Banner />
        <AboutUsSection/>
        <ChooseUsSection/>
        <ExpertiseDentalServices/>
        <GalleryComponent/>
        */}
      
    

   </div> 
  
  )
}

export default Home
