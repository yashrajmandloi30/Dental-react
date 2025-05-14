
import React from 'react'
import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import GalleryComponent from '../components/GalleryComponent'
import AboutUsSection from '../components/AboutUsSection'
import ChooseUsSection from '../components/ChooseUsSection'
import ExpertiseDentalServices from '../components/ExpertiseDentalServices'
import Testimonial from '../components/TestimonialComponent'

const Home = () => {
  return (
   <>
 
      <Carousel />
      
        <Banner />
        <AboutUsSection/>
        <ChooseUsSection/>
        <ExpertiseDentalServices/>
        <GalleryComponent/>
        <Testimonial/>
      
    

   </> 
  
  )
}

export default Home
