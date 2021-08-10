import React from 'react'
const data = [
          {
                    first: "first"
          },
          {
                    first: "second"
          },
          {
                    first: "third"
          },
          {
                    first: "fourth"
          },
]
const BrandCard = () => {
          return (
                    <div style={{ display: "flex", justifyContent: "center",flexWrap:"wrap", margin:"1rem auto"}}>
                              {data.map((card, i) => (
                                        <div className="card" key={i}>
                                                  <h2>Company<br/>{card.first}<br />Brand</h2>
                                        </div>
                              ))}
                    </div>
          )
}

export default BrandCard
