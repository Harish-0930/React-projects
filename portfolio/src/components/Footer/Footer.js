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
            <a href="home">Mail</a>
            </li>
            <li>
            <a href="about">Phone</a>
            </li>
            <li>
            <a href="projects">LinkedIn</a>
            </li>
            <li>
            <a href="contact">GitHub</a>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer