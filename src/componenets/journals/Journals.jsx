import React from 'react'
import "./journals.css"
import JournalsCard from './JournalsCard'
import Heroback from '../heroBack/Heroback'
import Footer from '../footer/Footer'
import JournalSlider from './JournalSlider'

const Journals = () => {
  return (
    <div>
        <Heroback title="Journals"/>
      <JournalsCard/>
      {/* <JournalSlider/> */}
    </div>
  )
}

export default Journals
