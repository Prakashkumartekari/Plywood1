import React from 'react'
import image1 from "../../assets/Process-Step-1.png"
import image2 from "../../assets/Process-Step-2.png"
import image3 from "../../assets/Process-Step-3.png"
import image4 from "../../assets/Process-Step-4.png"
import image5 from "../../assets/Process-Step-5.png"
import image6 from "../../assets/Process-Step-6.png"
import image7 from "../../assets/Process-Step-7.png"
import image8 from "../../assets/Process-Step-8.png"
import image9 from "../../assets/Process-Step-9.png"
import image10 from "../../assets/Process-Step-10.png"
import "../css/steps.css"
const StepsData=[
          {
          Image:image1,
          Text:""
},  {
          Image:image2,
          Text:""
},  {
          Image:image3,
          Text:""
},  {
          Image:image4,
          Text:""
},  {
          Image:image5,
          Text:""
},  {
          Image:image6,
          Text:""
},  {
          Image:image7,
          Text:""
},  {
          Image:image8,
          Text:""
},  {
          Image:image9,
          Text:""
},  {
          Image:image10,
          Text:""
},
]
const Steps = () => {
          return (
         
                              <div className="Steps">
                                        <h2>Processing Steps</h2>
                                        <div className="StepsCardWrap">
                                                  {StepsData.map((data,i)=>(
                                                            <div className="stepsCard" key={i}>
                                                                      <img src={data.Image} alt={i} />
                                                            </div>
                                                  ))}
                                        </div>
                              </div>
                 
          )
}

export default Steps
