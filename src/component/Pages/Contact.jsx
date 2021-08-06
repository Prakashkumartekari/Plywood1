import React, { useEffect, useState } from 'react'
import "../css/contact.css"

const Contact = () => {
  const [alert, setAlert] = useState(false)
  const [form, setForm] = useState({
    name:"",
    contact:"",
    email:"",
    message:""

  })
  useEffect(() => {
    window.scrollTo(0,0)
   }, [])

const submit=(e)=>{
  e.preventDefault()
  setForm({  name:"",
  contact:"",
  email:"",
  message:""},
  setAlert(true))
}

useEffect(() => {
  setTimeout(() => {
    setAlert(false)
  }, 3000);
}, [form])
   const handleSubmit= e=> setForm({...form, [e.target.name]:e.target.value})
   
          return ( 
            <>
            {alert &&
            <div className="alertBox">
              <div className="text">
                <h5>Your Enquiry Submitted Successfully!!<br/>
                We Contact You Soon.
                </h5>
              </div>
            </div>
}
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
                  <label htmlFor="name">Name</label>
                  <input onChange={handleSubmit} type="text" id="name" placeholder="Enter your name" name="name" value={form.name}/>
                  <label htmlFor="contact">Contact No</label>
                  <input onChange={handleSubmit} type="text" id="contact" placeholder="Enter contact no" name="contact" value={form.contact}/>
                   <label htmlFor="email">Email</label>
                  <input onChange={handleSubmit} type="text" id="email" placeholder="Enter Your Email" name="email" value={form.email}/>
                  <textarea onChange={handleSubmit} name="message" cols="30" rows="7" placeholder="Type Some Message" value={form.message}/>
                  <div className="button">
                    <button type="button" onClick={submit}>send</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
        </>
          )
}

export default Contact
