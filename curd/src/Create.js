import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Create() {
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
  })
  console.log(values);
  const navigate=useNavigate();
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/users',values)
    .then(res=>{
      navigate('/')
    })
    .catch(err=> {
      console.log(err)
    })
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" placeholder="Name" name='name' required
              onChange={e=>setValues({...values,[e.target.name]:e.target.value})}/>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control"  placeholder="Email" name='email' required
              onChange={e=>setValues({...values,[e.target.name]:e.target.value})}/>
            </div>
            <div className="form-group mb-5">
              <label htmlFor="phone">Body</label>
              <input type="text" className="form-control"  placeholder="Phone" name='body' required
              onChange={e=>setValues({...values,[e.target.name]:e.target.value})}/>
            </div>
            <div className='w-100'>
            <button type="submit" className="btn btn-success ms-4">Submit</button>
            <Link to="/" className='btn btn-primary ms-4'>Back</Link>
            </div>
      </form>
    </div>
    </div>
  )
}

export default Create