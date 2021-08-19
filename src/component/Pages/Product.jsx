import React, { useEffect } from 'react'
import image1 from "../../assets/plywood.png"
import image2 from "../../assets/blockboard.png"
import image3 from "../../assets/plain-flush-door-500x500.png"
import image4 from "../../assets/pre-laminated-plywood-board-500x500.png"
import "../css/product.css"
const productData=[
          {
          image:image1,
          title:"Plywood",
          text:"is arguably the most versatile and durable building material available, and an essential commodity in both interior applications and exterior construction. ABCD Plywood has been a pioneering force in the manufacture of plywood for over six decades, setting benchmarks that have become accepted as the gold standard across the country. Over time, we have perfected the manufacture of plywood to provide National with a distinct advantage at every step. Our plywood is synonymous with quality, durability and reliability."
          }, 
           {
          image:image2,
          title:"Block Board",
          text:` , comprising a core of strips of hardwood within a hardwood frame sandwiched between two or more layers of veneers on either side, are known for their extraordinary strength, dimensional stability and durability. With their immense load bearing capacity, lightweight nature and low bendability, block boards are perfect for furniture building as in tables, shelves, cabinets and benches, and in vertical applications such as wardrobes, doors, panels, partitions, etc.
          <br>
      Manufactured using similarly rigorous standards and processes as our plywood, our block boards are available in two grades - BWP and MR, in thicknesses ranging from 16 to 32mm.`
          },  
          {
          image:image3,
          title:"Flush Doors",
          text:"is arguably the most versatile and durable building material available, and an essential commodity in both interior applications and exterior construction. ABCD Plywood has been a pioneering force in the manufacture of plywood for over six decades, setting benchmarks that have become accepted as the gold standard across the country. Over time, we have perfected the manufacture of plywood to provide National with a distinct advantage at every step. Our plywood is synonymous with quality, durability and reliability."
          },  {
          image:image4,
          title:"Laminates",
          text:"We manufacture world class laminates with thousands of designs, textures, colours and finishes. The company expanded into the manufacture of laminates in 1994, with the establishment of our state-of-the-art facility in Hosur, Tamil Nadu, and have since been providing our customers with diverse, dependable and decorative High-Pressure Laminates (HPL)"
          }, 
         
]
const Product = () => {
  useEffect(() => {
    window.scrollTo(0,0)
   }, [])
          return (
                    <div className="productPage">
                    <h2>Our Product's</h2>
                    <div className="productPage__CardContainer">
                    {productData.map((item,i)=>(
                      <div className="productPage__card" key={i}>
                        <div className="left"> 
                          <img src={item.image} alt=""/>
                        </div>
                        <div className="right">
                          <h3>{item.title}</h3>
                          <p><strong>{item.title}</strong>{item.text}</p>
                        </div>
                        </div>
                       
                      ))}
                      </div>
                      </div>
                 
                     
          )
}

export default Product
