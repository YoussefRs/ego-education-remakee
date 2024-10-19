import React from 'react'
import "./Home.css"
import HomeHero from '../../components/Home/HomeHero'
import HomeAbout from '../../components/Home/HomeAbout'
import HomeFeatures from '../../components/Home/HomeFeatures'
import HomeCourseSlider from '../../components/Home/HomeCourseSlider'
import HomeFeatures_2 from '../../components/Home/HomeFeatures_2'
import HomeLecturers from '../../components/Home/HomeLecturers'
import PartnersSlider from '../../globals/Sliders/PartnersSlider'
import HomeUpcoming from '../../components/Home/HomeUpcoming'

function Home() {
  
  return (
    <div style={{overflowX: "hidden"}}>
        <HomeHero />
        <HomeAbout />
        <HomeFeatures />
        <PartnersSlider />
        <HomeCourseSlider />
        <HomeUpcoming />
        <HomeFeatures_2 />
        <HomeLecturers />
    </div>
  )
}

export default Home