import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
function Update() {
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
  })
  const {id} =useParams();
  const navigate=useNavigate();
  useEffect(()=>{
      axios.get('http://localhost:3000/users/'+id)
      .then(res=> setValues(res.data))
      .catch(err=>console.log(err))
  },[])
  const handleUpdate=(event)=>{
    event.preventDefault();
    axios.put('http://localhost:3000/users/'+id,values)
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
        <h1 className='text-center'>Update user details</h1>
        <form onSubmit={handleUpdate}>
            <div className="form-group mb-4">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" placeholder="Name" name='name' required
              value={values.name}
              onChange={e=>setValues({...values,[e.target.name]:e.target.value})}/>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control"  placeholder="Email" name='email' required
              value={values.email}
              onChange={e=>setValues({...values,[e.target.name]:e.target.value})}/>
            </div>
            <div className="form-group mb-5">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control"  placeholder="Phone" name='phone' required
              value={values.phone}
              onChange={e=>setValues({...values,[e.target.name]:e.target.value})}/>
            </div>
            <div className='w-100'>
            <button type="submit" className="btn btn-success ms-4">Save</button>
            <Link to="/" className='btn btn-primary ms-4'>Back</Link>
            </div>
      </form>
    </div>
    </div>
  )
}

export default Update