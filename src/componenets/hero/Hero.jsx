import React from 'react'
import "./hero.css"
import Title from '../title/Title'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
            <div className="row">
              <Title subtitle="WELCOME TO Grow Parallely" title="Best Online Education"/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <div className="button">
                    <button className="primary-btn">
                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>

                    <button>
                        VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero
