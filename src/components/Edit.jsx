import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { updateEmployee } from '../services/allApis';
import { toast } from 'react-toastify';

function Edit({data}) {

    const [show, setShow] = useState(false);

    const[edit,setEdit]=useState(data)

    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true)




    const handleUpdate=async()=>{
      const res=await updateEmployee(edit._id,edit)
      console.log(res)
      if(res.status==200){
        toast.success("Employee updated!")
        handleClose()
      }
    }


    




  return (
    <>


<Button variant="primary" onClick={handleShow}>
Edit <i className="fa-solid fa-pen-to-square" style={{color: "#d6e5ff",}} />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input type="text" value={edit?.firstname} onChange={(e)=>setEdit({...edit,firstname:e.target.value})}  className="form-control pb-2" placeholder='First Name'/>
         <input type="text" value={edit?.lastname} onChange={(e)=>setEdit({...edit,lastname:e.target.value})}  className="form-control" placeholder='Last Name'/>
         <input type="text" value={edit?.age} onChange={(e)=>setEdit({...edit,age:e.target.value})}  className="form-control" placeholder='Age'/>
         <input type="text" value={edit?.qualification} onChange={(e)=>setEdit({...edit,qualification:e.target.value})}  className="form-control" placeholder='Qualification'/>
         <input type="text" value={edit?.email} onChange={(e)=>setEdit({...edit,email:e.target.value})}  className="form-control" placeholder='E-mail'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>UPDATE</Button>
        </Modal.Footer>
      </Modal>
    
    
    
    
    </>
  )
}

export default Edit

