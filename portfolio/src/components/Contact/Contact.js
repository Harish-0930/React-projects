import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Contact</h2>
        <form className='contactContainer'>
          
          <ul className="noBullet">
            <li>
              <label htmlFor="Name"></label>
              <input type="text" class="inputFields"  placeholder="Name"/>
            </li>
            <li>
              <label htmlFor="Email"></label>
              <input type="email" class="inputFields"  placeholder="email"/>
            </li>
            <li>
              <label htmlFor="subject"></label>
              <input type="text" class="inputFields" placeholder="Subject"/>
            </li>
            <li>
              <label htmlFor="message"></label>
              <textarea class="inputFields" placeholder="Message" rows="10"></textarea>
            </li>
            <li id="center-btn">
              <input type="submit" className="submit-btn"value="Submit"/>
            </li>
          </ul>
        </form>
      </div>
  )
}

export default Contact