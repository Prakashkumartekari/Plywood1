import React,{useEffect} from 'react'
import image1 from "../../assets/icon1.png";
import image2 from "../../assets/icon-2.png";
import image3 from "../../assets/icon-3.png";
import image7 from "../../assets/pre-laminated-plywood-board-500x500.jpg"
import image4 from "../../assets/logo3.png";
import "../css/about.css"
const About = () => {
  useEffect(() => {
   window.scrollTo(0,0)
  }, [])
const aboutPageData=[
  {
    image:image1,
    title:"Product Integrity",
    text:"To maintain our product quality, we only use carefully selected mature timber from the sustainable, natural forests of northeast India. Our raw material is treated to withstand moisture, extreme weather conditions and insect infestation. All of our products are manufactured with strict adherence to the standards sanctioned by the BIS."
}, 
{
    image:image2,
    title:"Adaptability",
    text:"We place significant emphasis on adapting to our customers’ preferences and changing demands. Our products are manufactured in a range of thicknesses under a diverse set of sub-brands, each catering to a specific quality and price requirement. We constantly refer to customer and channel partner feedback, especially for the selection of our annual range of diverse laminate designs and textures.."
},
 {
    image:image3,
    title:"Reliability",
    text:"Our state-of-the-art factories have in-house testing facilities and rigorous teams entrusted with conducting regular quality checks at all stages of the manufacturing process. Our commitment to quality has enabled us to offer the National Guarantee on all our products, with our premium range offering up to a 300% money back or replacement guarantee on manufacturing defects/insect infestation"
},
{
    image:image4,
    title:"Authenticity",
    text:"We have taken several measures to empower our end consumer to distinguish our product from a counterfeit. Our products are marked with hologram stickers, Uniqolabels, that can be scanned on a mobile app to identify the product’s authenticity with a simple three-step process. Stakeholders across our retail channel have been educated in recognizing a genuine National product from a duplicate, ensuring that our customer expectations are met when they choose Mahashakti"
},
]
          return (
                    <>
    <div className="about__section">
              <div className="about_title">
                        <h1>About Us</h1>
              </div>
              <div className="about_wrap">
                        <div className="about__image">
                                  <img src={image7} alt="about"/>
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
    <div className="aboutPage">
      <h4>Values</h4>
      <div className="aboutPage__cardContainer">
      {aboutPageData.map((product,i)=>(
        <div className="aboutPage__card" key={product.title}>
          <img src={product.image} alt={product.title}/>
          <h4>{product.title}</h4>
          <p>{product.text}</p>
          </div> 
          ))}
      </div>
    </div>
    </>
          )
}

export default About
