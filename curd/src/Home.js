import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {


  const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res=> setData(res.data))
        .catch(err=>console.log(err))
    },[])

    const handleDelete=(id)=>{
      axios.delete('http://localhost:3000/users/'+id)
      .then(res=>{
       window.location.reload();
      }).catch(err=>console.log(err))
  
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
      <h2>List Of Users</h2>
      <div  className='w-75 rounded shadow p-4'>
        <div className='d-flex justify-content-end'>
        <Link to='/create' className='btn btn-success'>  Add +</Link>
        </div>
      <table className="table">
        <thead className='table'>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          
          data.map((d,i)=>(
            <tr key={i}>
                <td>{i}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td><Link to={`/read/${d.id}`} className='btn btn-primary'>Read</Link></td>
                <td><Link to={`/update/${d.id}`} className='btn btn-info'>Edit</Link> </td>
                <td><button className='btn btn-danger' onClick={e=>handleDelete(d.id)}>Delete</button> </td>


            </tr>

          ))
}
</tbody>
</table>
    </div>
    </div>

  )

}

export default Home