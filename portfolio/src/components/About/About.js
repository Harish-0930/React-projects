import React from 'react';
import { CgCalendarDates } from "react-icons/cg";
import './About.css';
import { edu, intern } from './data';
function About() {
  return (
  <>
  <div className='containerAbout'>
    <div class="pictureAbout">
      <img src="\images\pic.jpg" alt=""/>
    </div>
    <div className='contentAbout'>
      <h2>Objective</h2>
      <p>
      Aspiring to work in a challenging role in a reputable organization to expand my learnings, knowledge,
      and skills thereby contributing to the organization and society through innovative leadership imbued
      with ethical values. I am hard-working, diligent, and dedicated - all qualities I put forward in everything
      I do.
      </p>
    </div>
  </div>
  <section class="education-and-internship" id="education">
        <div class="edu-intern-container">
            <div class="education-heading">
                <div><h1 style={{textAlign:'center'}}>Education</h1></div>
            </div>
            <div class="education-area">
                <div class="time-line">
                {
                        edu.map((item)=>(
                    <div class="time-line-item">

                          <ul>
                          <li>{item.degree}</li>
                          <li>{item.college}</li>
                          <CgCalendarDates /><span>{item.year}</span>
                      </ul>
                      </div>
                        ))
                      } 
                  </div>
                </div>
              </div>
        <div class="edu-intern-container">
            <div class="intern-heading">
                <div><h1 style={{textAlign:'center'}}>Internship</h1></div>
            </div>
            <div class="intern-area">
              <div class="time-line">
              {
                intern.map((item)=>(
                  
                  <div class="intern-time-line-item">
                      <div class="domain">{item.domain}</div>
                      <ul>
                         <li>{item.desc}</li>
                         <CgCalendarDates /><span>{item.date}</span>
                      </ul>
                  </div>
              
                ))
              }

              </div>

            </div>
        </div>
    </section>
  </>
  )
}

export default About