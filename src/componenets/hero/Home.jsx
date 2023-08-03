import React from 'react'
import "./hero.css"
import Hero from './Hero'
import AboutCard from '../about/AboutCard'
import CoursesCard from '../courses/CoursesCard'
import Testimonial from '../testimonial/Testimonial'
import JournalsCard from '../journals/JournalsCard'
import ContactCard from '../contact/ContactCard'
import Footer from '../footer/Footer'
import JournalSlider from '../journals/JournalSlider'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutCard />
      <CoursesCard />
      <Testimonial />
      <JournalSlider/>
      <ContactCard />
      <Footer/>
      
    </div>
  )
}

export default Home
