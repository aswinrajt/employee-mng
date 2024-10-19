import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getEmployeeApi } from '../services/allApis';
import { deleteEmployee } from '../services/allApis';
import { useEffect } from 'react';
import Edit from './Edit';
import { toast } from 'react-toastify';
import { Row,Col } from 'react-bootstrap';


function View() {
  const [data,setData]=useState([])

  useEffect(()=>{
    getData()
    
  },[data])


 


  const getData=async()=>{
    const res=await getEmployeeApi()
    console.log(res)
    if(res.status==200){
      setData(res.data)
    }
    else{
      console.log(res)
    }
  }


  const handleDelete=async(id)=>{
    const res=await deleteEmployee(id)
    if(res.status==200){
      console.log(res.data)
      toast.success('Employee deleted!!')
      getData()

    }
    else{
      console.log(res)
      toast.error("Something went wrong!!")

    }
  }



  return (
    <>

    {
      data?.length>0?
<>
{
  data?.map(item=>(

    <Card style={{ width: '18rem' }} className='text-center mx-4'>
    <Card.Img variant="top" src="https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png" />
    <Card.Body>
      <Card.Title>{item.firstname}{item.lastname}</Card.Title>
      <Card.Text><p>Age:{item.age}</p></Card.Text>

          <p>{item.qualification}</p>
          <p>{item.email}</p>

     <div className='d-flex justify-content-between'>
             <Edit data={item}/>
          <Button variant="primary" onClick={()=>handleDelete(item._id)}>Delete <i className="fa-solid fa-trash" style={{color: "#ff7070",}} /></Button>
     </div>
    </Card.Body>
  </Card>




  ))
}
  


</>
:
 <h4 className='text-center text-danger'>No employees added!!</h4>

    }
  


  </>
  )
}

export default View