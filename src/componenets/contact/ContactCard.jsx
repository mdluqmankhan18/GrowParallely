import React from "react";
import "./contact.css"

const ContactCard = () => {
  const maplocation =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.3659545403!2d-6.410508418814405!3d53.32441163083432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!5e0!3m2!1sen!2sie!4v1689261764476!5m2!1sen!2sie";
  return (
    <div>
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={maplocation}></iframe>
          </div>
          <div className="right row">
            <h1>Contact US</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, sunt? Est incidunt atque officiis excepturi tempora
              eius earum eum soluta.
            </p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>
            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactCard;
