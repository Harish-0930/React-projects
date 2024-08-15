import React from 'react'
import './Project.css'
import { data } from './data'
function Card() {
    return(
   
          

      <div className='allCards'>
        {
          data.map(item=>(

          
        <div className="card">
          <img src={item.pic} alt=""/>
          <div className="card-body">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}><button className='github'>Github</button></a>
          </div>
        </div>
      ))
    }
      </div>

    )
  }

  export default Card