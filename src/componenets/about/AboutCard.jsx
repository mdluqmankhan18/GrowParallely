import React from 'react'
import Title from '../title/Title'
import Image from "../images/about1.jpg"
import { homeAbout } from '../../data'
import AboutWrapper from './AboutWrapper'
import "./about.css"

const AboutCard = () => {
    return (
      <>
        <section className='aboutHome'>
          <div className='container flexSB'>
            <div className='left row'>
              <img src={Image} alt='' />
            </div>
            <div className='right row'>
              <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
              <div className='items'>
                {homeAbout.map((val) => {
                  return (
                    <div className='item flexSB'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div className='text'>
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        <AboutWrapper />
      </>
    )
  }
  
  export default AboutCard