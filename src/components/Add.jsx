import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addEmployeeApi } from '../services/allApis';


function Add() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [employee,setEmployee]= useState({
      firstname:"",lastname:"",age:"",qualification:"",email:""
  })

  const handleAddEmployee=async()=>{
    console.log(employee)
    const{firstname,lastname,age,qualification,email}=employee
    if(!firstname || !lastname || !age ||!qualification ||!email){
        toast.warning("enter valid input!!")

    }
    else{
      const res=await addEmployeeApi(employee)
      console.log(res)
      if(res.status==200){
          toast.success("Employee added!!")
          handleClose()  
          setEmployee({
            firstname:"",lastname:"",age:"",qualification:"",email:""

          })       
      }
      else{
          toast.error("Project Adding Failed!!!")
      }

    }
  }
    
  return (
    <>
    


    
    <Button variant="primary" onClick={handleShow}>
    ADD EMPLOYEEE <i className="fa-solid fa-user-plus" style={{color: "#ffffff",}} />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input type="text" onChange={(e)=>setEmployee({...employee,firstname:e.target.value})}  className="form-control" placeholder='First Name'/>
         <input type="text" onChange={(e)=>setEmployee({...employee,lastname:e.target.value})}  className="form-control" placeholder='Last Name'/>
         <input type="text" onChange={(e)=>setEmployee({...employee,age:e.target.value})}  className="form-control" placeholder='Age'/>
         <input type="text" onChange={(e)=>setEmployee({...employee,qualification:e.target.value})}  className="form-control" placeholder='Qualification'/>
         <input type="text" onChange={(e)=>setEmployee({...employee,email:e.target.value})}  className="form-control" placeholder='E-mail'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddEmployee}>Add</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Add