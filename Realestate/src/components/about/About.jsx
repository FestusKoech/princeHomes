import React from "react"
//import Back from "../common/Back"
import Heading from "../common/Heading"
import Contact from "../contact/Contact"

import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
       
        <div className='container flex '>
          <div className='left row'>
            <Heading title='About Our Agency' subtitle='We are located in Karen, Nairobi.' />

            <p>We offer housing services by reducing house finding hassle. Explore our website and find a house that satisfies your needs</p>
            
          
            <p>You can reach us via:</p>
            <p>Phone: (+254) 723488909</p>
            <p>Email: koechfestus88@gmail.com</p>
            <a href="https://festuskoech.netflify.app"><u>Festus Koech</u></a>
            
           
          </div>
          <div className='right row'  >
            <Contact/>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
