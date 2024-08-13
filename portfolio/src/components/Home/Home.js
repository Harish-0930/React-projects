import React from 'react';
import { CiMobile2 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import './Home.css';
function Home() {
  return (
    <div className='containerHome'>
      <div class="homeProfile">
        <img src="\images\pic.jpg" alt=""/>
        <h2>Hey there! I am Harish</h2>
        <p>Aspiring It Professional and Job Seeker</p>
        <div className="Icons">
       <a href="#" > <IoIosMail className='icon'/></a>
       <a href="#"> <CiMobile2 className='icon'/></a>
       <a href="#"> <FaLinkedin className='icon' /></a>
       <a href="#"> <FaGithub className='icon'/></a>
        </div>
      </div>
    </div>
  )
}

export default Home