import React, { useEffect } from 'react'
import BrandCard from './BrandCard'
const Brand = () => {
          useEffect(() => {
                    window.scrollTo(0,0)
                   }, [])
          return (
                    <div style={{margin:"auto",backgroundColor:"#f5f5f5"}}>
                              <h2 style={{padding:"2rem 0",textAlign:"center",fontSize:"3rem"}}>Our Brand's</h2>
                             <BrandCard/>
                    </div>
          )
}

export default Brand
