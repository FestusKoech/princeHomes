import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background '>
        <div className='container '>
          <Heading title='Get in touch with our agents.' />

          <div className=' border2 grid4 mtop'>
            {team.map((val, index) => (
              <div className='box1 ' key={index}>
                <button className='btn3a'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  {/* <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul> */}
                 
       
      
          <button className="btn3"> <p className="pM">Call</p> </button>   
           
       </div>
            
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
