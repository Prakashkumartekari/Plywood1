import React from 'react'
import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/plywood.png"
import image5 from "../../assets/blockboard.png"
import image6 from "../../assets/plain-flush-door-500x500.jpg"
import image7 from "../../assets/about.jpg"
import image8 from "../../assets/pre-laminated-plywood-board-500x500.jpg"
import car from "../../assets/plywood-factory-industry.jpg"

import { Link } from 'react-router-dom'
import BrandCard from './BrandCard'

const data=[
{
text:`We only use naturally and sustainably grown timber from the
Dipterocarpacae and Shorea Assamica species (comprising
Gurjan, Hollong & Makai)...`,
title:"Careful selection of timber", 
image:image1
},
{
text:`Peeling the logs like one would sharpen a pencil allows us not only
better yields and more economical use of timber...`,
title:"Peeling",
image:image2},
{
text:`The peeled veneers are cut to remove knots and gaps, and separated
into aesthetically pleasing face veneer and structurally
sound core veneer....`,
title:"Separation into face and core",
image:image3
},
]
const data2=[
          {
                    image:image4,
                    title:"Plywood"
          } ,
          {
                    image:image5,
                    title:"Blockboard"
          },
           {
                    image:image6,
                    title:"Flush Door"
          },
          {
                    image:image8,
                    title:"Laminate"
          }
]
const Home = () => {
      
          return (
                  <>
                   <div className="carousel_type">
                    <div className="carousel_img">
                              <img src={car} alt="carousel" />
                              <div className="carousel__text">
                                      <div>
                                        <p>
                                                  India's Priemier Manufacturer of Plywood, Block Boards, Flush
                                                  Doors & 
                                                  Laminates
                                        </p>
                                      </div>
                                      <div className="carousel_button">
                                       <Link to="/product" className="carousel_Link">Explore</Link>
                                      </div>
                              </div>
                    </div>
          </div>
          {/* <!-- About us --> */}        
          <div className="about__section">
                    <div className="about_title">
                              <h1>About Us</h1>
                    </div>
                    <div className="about_wrap">
                              <div className="about__image">
                                        <img src={image7} alt="" />
                              </div>
                              <div className="about__text">
                                        <p><strong>Mahashakti Plywood Industries Limited</strong>, India’s premier manufacturer of
                                                  plywood,
                                                  block boards and flush doors, is synonymous with exceptional quality
                                                  of products and unparalleled service to its distributors, dealers and
                                                  customers alike.<br/><br/>

                                                  Over six decades later, Mahashakti has come to represent a trusted
                                                  brand
                                                  with immaculate product integrity and market goodwill. Today, the
                                                  company has a rock-solid foundation of state-of-the-art factories and
                                                  a devoted nationwide network of offices, distributors, dealers and
                                                  channel partners.</p>
                              </div>
                    </div>
          </div>
          {/* <!-- About us End --> */}


          {/* <!-- Made up With --> */}
          <section>
                    <div className="made__section">
                              <div className="made__title">
                                        <h1>How it's Made</h1>
                              </div>
                              <div className="made__card__wrap">
                            
                              {data.map((item,i)=> (        
                                <div className="made__card" key={i}>
                                <img src={item.image} alt={item.title}/>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                              </div>
                              
                              ))}
          
                              </div>
                              <div className="made__button">
                                        <Link to="/steps" className="stepsLink">Learn More</Link>
                              </div>
                    </div>
          </section>
     
        
                    <div className="ourproduct__section">
                              <h4>Our Product's</h4>
                              <div className="product__card">
                                        
                              {data2.map((product,i)=>(
                                       <div className="card" key={i}>
                                       <div className="product_img">
                                                 <img src={product.image} alt={product.title} />
                                       </div>
                                       <h3>{product.title}</h3>
                                       </div>
                                       
                              ))}
                              </div>
                    </div>
         

         
          <section>
                    <div className="brand__section">
                              <h2>Brand's</h2>
                         <BrandCard/>
                    </div>
          </section>
                  </>
          )
}

export default Home
