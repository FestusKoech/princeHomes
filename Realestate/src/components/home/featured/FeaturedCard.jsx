import React from "react"
import { featured } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h3>{items.name}</h3>
           <div className="hr1">
        
           </div>
            <div className="span">
            <p className="p"> {items.total}</p>
           
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard


