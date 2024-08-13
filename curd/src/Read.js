import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
function Read() {

  const [data,setData]=useState([]);
  const {id} =useParams();
  useEffect(()=>{
      axios.get('http://localhost:3000/users/'+id)
      .then(res=> setData(res.data))
      .catch(err=>console.log(err))
  },[])
  return (
    <div>
<div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>

      <div className='w-50 bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1 className='text-center border-bottom'>User Details</h1>
        <form>
            <div className="form-group mb-4">
              <h5>Name:</h5><span><p>{data.name}</p></span>
            </div>
            <div className="form-group mb-4">
            <h5>Email:</h5><span><p>{data.email}</p></span>
            </div>
            <div className="form-group mb-5">
            <h5>Phone:</h5><span><p>{data.phone}</p></span>
            </div>
            <div className='w-100'>
            <Link to={`/update/${id}`} className="btn btn-success ms-4">Edit</Link>
            <Link to="/" className='btn btn-primary ms-4'>Back</Link>
            </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Read