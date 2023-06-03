import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
     

      <footer>
        <div className='container'>
         

          {footer.map((val) => (
            <div>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023. Built and Deployed by Festus Koech.</span>
      </div>
    </>
  )
}

export default Footer
