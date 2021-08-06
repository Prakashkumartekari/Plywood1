import React from 'react'
import "../css/contact.css"

const Contact = () => {
          return ( 
           <div className="contactPage">
          <div className="contactPage__card">
              <div className="contactleft">
                <h2>Contact Us</h2>
                <div className="location"><p><i className="fas fa-map-marker-alt" style={{color: "gray",marginRight: "5px"}}></i>Yamuna Nagar</p>
                <p><i className="fas fa-mobile-alt"></i> +91 7015500526</p>
                </div>
              </div>
              <div className="contactright">
                <h2>Get in Touch</h2>
                <form>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name"/>
                  <label for="contact">Contact No</label>
                  <input type="text" id="contact" placeholder="Enter contact no"/>
                   <label for="email">Email</label>
                  <input type="text" id="email" placeholder="Enter Your Email"/>
                  <textarea name="message" id="" cols="30" rows="7" placeholder="Type Some Message"/>
                  <div className="button">
                    <button type="button">send</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
          )
}

export default Contact
