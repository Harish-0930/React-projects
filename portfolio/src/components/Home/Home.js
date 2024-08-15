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
       <a href="mailto:munagalaharish45@gmail.com" > <IoIosMail className='icon'/></a>
       <a href="telto:+91 8790725505"> <CiMobile2 className='icon'/></a>
       <a href="https://www.linkedin.com/in/munagala-harish-80a746257"> <FaLinkedin className='icon' /></a>
       <a href="https://github.com/Harish-0930/"> <FaGithub className='icon'/></a>
        </div>
      </div>
    </div>
  )
}

export default Home