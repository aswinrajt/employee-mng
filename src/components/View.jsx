import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getEmployeeApi, deleteEmployee } from '../services/allApis';
import Edit from './Edit';
import { toast } from 'react-toastify';
import { Row, Col } from 'react-bootstrap'; // Import Row and Col

function View() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []); // Remove data from dependency array to avoid infinite loop

  const getData = async () => {
    const res = await getEmployeeApi();
    console.log(res);
    if (res.status === 200) {
      setData(res.data);
    } else {
      console.log(res);
    }
  };

  const handleDelete = async (id) => {
    const res = await deleteEmployee(id);
    if (res.status === 200) {
      console.log(res.data);
      toast.success('Employee deleted!!');
      getData();
    } else {
      console.log(res);
      toast.error("Something went wrong!!");
    }
  };

  return (
    <>
      {data?.length > 0 ? (
        <Row className="justify-content-center">
          {data.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={item._id}> 
              <Card className='text-center'>
                <Card.Img 
                  variant="top" 
                  src="https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png" 
                />
                <Card.Body>
                  <Card.Title>{item.firstname} {item.lastname}</Card.Title>
                  <Card.Text>
                    <p>Age: {item.age}</p>
                    <p>{item.qualification}</p>
                    <p>{item.email}</p>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Edit data={item} />
                    <Button variant="primary" onClick={() => handleDelete(item._id)}>
                      Delete <i className="fa-solid fa-trash" style={{ color: "#ff7070" }} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <h4 className='text-center text-danger'>No employees added!!</h4>
      )}
    </>
  );
}

export default View;
