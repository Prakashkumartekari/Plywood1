import React, {  useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/logo3.png"
import Facebook from "../../assets/icon/facebook.png"
import youtube from "../../assets/icon/youtube.png"
import instagram from "../../assets/icon/instagram.png"
import twitter from "../../assets/icon/twitter.png"
import whatsapp from "../../assets/icon/whatsapp.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleClose = (e)=>{
  const notClose = e.target.className
  if(notClose === "mobileNavbar" || notClose === "navLink")  setNav(false)
  }

          return (
                    <>
                     <div className="upper__strip">
                    <div className="upper__mob">
                      <div className="icon">
                         <p> <i className="fas fa-mobile-alt" style={{color:"rgb(156, 154, 154)"}}></i> +91 7015500526</p>
                      </div>
                    </div>
                    <div className="upper__email">
                              <p><i className="fas fa-envelope" style={{color:"rgb(156, 154, 154)"}}></i>  prakashkumar@gmail.com</p>
                    </div>
          </div>
       {nav && 
      <div className="mobileNavbar" onClick={(e)=>handleClose(e)}>
        <div className="mobileNavbar__wrap" > 
        <div className="mobileNavbar__brandContainer">
        <div className="mobileNavbar__brand">
          <img src={logo} alt="brand"  />
        </div>
        </div>
        <ul>
                                       <li> <NavLink exact to="/" activeClassName="active" className="navLink">Home</NavLink></li>
                                      
                                       <li> <NavLink exact to="/about" activeClassName="active" className="navLink">About Us</NavLink></li>
                                       <li> <NavLink exact to="/product" activeClassName="active" className="navLink">Product's</NavLink></li>
                                      <li> <NavLink exact to="/brand" activeClassName="active" className="navLink">Brands</NavLink></li> 
                                       <li><NavLink exact to="/contact" activeClassName="active" className="navLink">Contact</NavLink></li> 
                                        
                              </ul>
                              <div className="social__media">
                                <div className="title">&mdash; Follow Us &mdash;</div>
                                <div className="socialIcon">
                              <a href=" https://wa.me/+917015500526" target="_blank"><img src={whatsapp} alt="whatsapp" /></a>
                              <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={Facebook} alt="facebook" /></a>
                              <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a>
                              <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
                              <a href="https://youtube.com" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube" /></a>
                                </div>
                              </div>
        </div>
      </div>
}

          <div className="custom__navbar">
                    <div className="brandName">
                              <Link to="/" className="navBrand">
                                        <img src={logo} alt="logo1" />

                              </Link>
                             
                    </div>
                    <div className="nav__link">
                              <ul>
                                       <li> <NavLink exact to="/" activeClassName="active" className="navLink" onClick={(e)=>setNav(false)}>Home</NavLink></li>
                                       <li> <NavLink exact to="/about" activeClassName="active" className="navLink" onClick={(e)=>setNav(false)}>About Us</NavLink></li>
                                       <li> <NavLink exact to="/product" activeClassName="active" className="navLink" onClick={()=>setNav(false)}>Product's</NavLink></li>
                                      <li> <NavLink exact to="/brands" activeClassName="active" className="navLink" onClick={()=>setNav(false)}>Brands</NavLink></li> 
                                       <li><NavLink exact to="/contact" activeClassName="active" className="navLink" onClick={()=>setNav(false)}>Contact</NavLink></li> 
                                        
                              </ul>
                    </div>
                    <div className="mobileBar">
                      <button type="button" onClick={(e)=>setNav(true)}><i className="fas fa-2x fa-bars"></i></button>
                    </div>
          </div>
               
                    </>
          )
}

export default Navbar
