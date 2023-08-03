import React from 'react'
import Heroback from '../heroBack/Heroback'
import CoursesCard from './CoursesCard'
import "./course.css"
import Footer from '../footer/Footer'

const CourseHome = () => {
  return (
    <div>
      <Heroback title="Explore Courses" />
      <div className="section blog padding">
      <CoursesCard/>
      {/* <div className="footer">
      <Footer/>
      </div> */}

      <Footer/>
      
      </div>
      
    </div>
  )
}

export default CourseHome
