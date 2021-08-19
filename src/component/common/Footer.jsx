import React from 'react'
import image from "../../assets/anycompany2.png"
import {Link} from "react-router-dom"
const Footer = () => {
          return (
                   <>
                    <div className="footer_section">
                              <div className="footerWrap">
                            <div className="footer1">
                                      <div className="footerBrand">
                                                <div className="logo">
                                                     <a href="index.html"> <img src={image} alt="footlogo" /></a>
                                                </div>
                                                <p>India’s premier manufacturer of plywood, block boards and flush doors, is synonymous with exceptional quality of products and unparalleled service to its distributors, dealers and customers alike.</p>
                                      </div>
                                      <Link to="/about" className="footer1button">Learn More</Link>

                                     
                            </div>
                            <div className="footer2">
                                        <p>Navigation</p>
                              <div className="footerlinks">
                                        <ul>
                                          <li><Link className="footerLink" to="/">Home</Link></li>
                                          <li><Link className="footerLink" to="/about">About Us</Link></li>
                                          <li><Link className="footerLink" to="/product">Product</Link></li>
                                          <li><Link className="footerLink" to="/brands">Brands</Link></li>
                                          <li><Link className="footerLink" to="/contact">Contact</Link></li>
                                        </ul>
                              </div>
                            </div>
                            <div className="footer3">
                                      <div className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55210.7687380168!2d77.23519245426587!3d30.1321679035268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef99b8b19ea25%3A0xfc76e2b1f391902!2sYamuna%20Nagar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1627977278458!5m2!1sen!2sin" style={{border:0}} allowFullScreen={true} loading="lazy" title="map"></iframe>
                                      </div>
                            </div>
                    </div>
                 
                    </div>
                     <div className="copright">
                     <p>All Copyrights  ©  Are Reserved to Webinfologic.</p>
                     </div>
                    </>
                              )
}

 export default Footer
