import React from 'react'
import './Project.css'
function Card(props) {
    return(
      <div className='allCards'>
        <div className="card">
          <img src={props.img} />
          <div className="card-body">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <button className='github'>Github</button>
          </div>
        </div>
      </div>
    )
  }
function Project() {
  return (
    <>
   
    <div className='cards'>
      <Card
       img='https://picsum.photos/id/54/400/300'
       title='What I learned from my visit to The Upside Down'
       author='Nancy Wheeler' />
   </div>     
   </>
  )
}

export default Project