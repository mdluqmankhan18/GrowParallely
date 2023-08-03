import React from 'react'
import Title from '../title/Title'
import "./journals.css";
import { journal } from '../../data';

const JournalsCard = () => {
  return (
    <div>
        <section className="journals padding">
        <Title subtitle='Latest From The Journals' title='Our Journals' />
        <div className="container grid2">
            {journal.map((item) =>{
                return(
                    <div className="items shadow">
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
        </div>
           
        </section>
      
    </div>
  )
}

export default JournalsCard
