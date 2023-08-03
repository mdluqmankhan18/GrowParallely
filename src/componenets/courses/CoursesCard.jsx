import React from "react";
import { coursesCard } from "../../data";
import "./course.css";
import Title from "../title/Title";

const CoursesCard = () => {
  return (
    <div>
      <section className="coursesCard">
      <Title subtitle='LEARN ANYTHING' title='Our Courses' />
        <div className="container grid2">
        
          {coursesCard.map((item) => {
            return (
              <div className="items shadows">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="text">
                    <div className="courseDate">July 11, 2023</div>
                  <h1>{item.coursesName}</h1>
                  <div className="coursedetails">
                    <div className="lesson">
                      <div className="iconCap">
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                      </div>
                      <div className="textcourse">
                        <div className="vlaue">17</div>
                        <div className="coursetext">lessons</div>
                      </div>
                    </div>
                    {item.courTeacher.map((teach)=>(
                        <div className="lesson">
                        <div className="iconCap">
                          <i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div className="textcourse">
                          {/* <div className="vlaue">50</div> */}
                          <div className="professorname">{teach.name}</div>
                        </div>
                      </div>
                        
                    ))}
                    
                    <div className="lesson">
                      <div className="iconCap">
                        <i class="fa fa-star stars" aria-hidden="true"></i>
                      </div>
                      <div className="textcourse">
                        <div className="value">{item.Rate}</div>
                      </div>
                    </div>
                  </div>
                  <div className="courseprice">
                    <div className="price">{item.priceAll}</div>
                    <div className="buyCourse">
                    <div className="cart"><i class="fa-solid fa-cart-plus"></i></div>
                    <div className="carttext">Buy Course</div> 
                  </div>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CoursesCard;
