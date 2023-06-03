import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Find Your Dream Home' subtitle='Find new & featured property with amazing deals.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
           
          


        <div className="btn1">
       
        <span> 
           <button className="btn"> <p className="pp">Update</p> </button>    </span>
            
        </div>
            
         
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
