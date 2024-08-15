import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <div className='footerContainer'>
        <h2><Link to="/" className="title">
             Harish
        </Link></h2>
        <div className='NavLinks'>
            <ul className=''>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="about">About</NavLink>
            </li>
            <li>
            <NavLink to="projects">Projects</NavLink>
            </li>
            <li>
            <NavLink to="contact">Contact</NavLink>
            </li>
        </ul>
        </div>
        <div className='mediaLinks'>
        <ul className=''>
            <li>
            <a href="mailto:munagalaharish45@gmail.com">Mail</a>
            </li>
            <li>
            <a href="telto:+91 8790725505">Phone</a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/munagala-harish-80a746257">LinkedIn</a>
            </li>
            <li>
            <a href="https://github.com/Harish-0930/">GitHub</a>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer