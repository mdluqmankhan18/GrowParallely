import React from "react";
import "./testimonial.css";
import Title from "../title/Title";
import { testimonal } from "../../data";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import about from "../images/about.jpg";
import about1 from "../images/about1.jpg";
import about2 from "../images/1.jpg";
import about3 from "../images/2.jpg";

const Testimonial = () => {
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
      <section className="testimonal padding">
        <div className="container">
          <Title subtitle="TESTIMONIAL" title="We care about our customers" />
          <Slider {...settings}>
          {testimonal.map((val)=>{
            return(

            <div className="content">
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            </div>
             )
            })}

            {/* <div className="content">
              <div className="items shadow">
                <div className="box flex">
                  <div className="img">
                    <img src={about} />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>Margfggg</h2>
                    <span>Marketing Manager</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic commodi vel aut quae, facilis dolorum nesciunt corrupti aperiam officiis?</p>
              </div>
            </div>
            */}

            
          
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

// const Testimonial = () => {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };
//   return (
//     <div>
//         <h2> Multiple items </h2>
//         <Slider {...settings}>
//           <div className='card'>
//             <img src={about} alt='' />
//           </div>
//           {/* <div className='container'>
//             <img src={about} alt='' />
//           </div>
//           <div className='container'>
//             <img src={about} alt='' />
//           </div>
//           <div className='container'>
//             <img src={about} alt='' />
//           </div> */}

//         </Slider>
//       </div>
//   )
// }

// export default Testimonial
