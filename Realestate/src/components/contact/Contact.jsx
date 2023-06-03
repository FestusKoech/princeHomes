import React from "react"

import "./contact.css"

const Contact = () => {
  return (
    <>

      <section className='contact mb'>
        
        <div className='container1'>
          <form className='shadow'>
            <h4>For any suggestions, fill in the form:</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button className="btn3">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
