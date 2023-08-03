import React from 'react'
import Title from '../title/Title'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./journals.css";
import { journal } from '../../data';

const JournalSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
          ]
      };
  return (
    <div>
        <section className="journals">
        <div className="container">
        <Title subtitle='Latest From The Journals' title='Our Journals' />
       
        <Slider {...settings}>
        {journal.map((item) =>{
                return(
                  
                    <div className="item shadow">
                        <div className="img">
                            <img src={item.cover} alt='' />
                        </div>
                        <div className="cardtext flexSB">
                            <div className="admin flexSB">
                                <div className="icons"><i class="fa fa-user " aria-hidden="true"></i></div>
                                <div className="text">{item.type}</div>
                            </div>
                            <div className="admin flexSB">
                                <div className="icons"> <i class="fa fa-calendar" aria-hidden="true"></i></div>
                               <div className="text">{item.date}</div>
                            </div>
                            <div className="admin flexSB">
                                <div className="icons"> <i class="fa fa-comments " aria-hidden="true"></i></div>
                               <div className="text">{item.com}</div>
                            </div>
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>

                        

                    </div>
                
                )
            })}

        </Slider>
        </div>

        </section>
     
      
    </div>
  )
}

export default JournalSlider
