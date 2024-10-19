import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Landing.css'; // Optional: Link to custom CSS for additional styling

function Landing() {
  return (
    <Container fluid className="landing-container">
      <Row className="align-items-center justify-content-center py-5">
        {/* Text Section */}
        <Col xs={12} md={6} className="text-center order-md-1 order-2 p-4">
          <h1 className="landing-title">Welcome to Employee Manager!</h1>
          <p className="landing-description">
            Manage your organization's employee records with ease. Create, update, view, and delete employee information effortlessly. Our platform ensures your workflow is streamlined and efficient.
          </p>
          <Link className="btn btn-lg btn-success mt-3 landing-btn" to={'/home'}>
            Let's Get Started
          </Link>
        </Col>

        {/* Image Section */}
        <Col xs={12} md={6} className="text-center order-md-2 order-1 mb-4 mb-md-0">
          <img
            src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-quarantine-office-people-employee-manager-picture-image_8420225.png"
            alt="Employee Manager"
            className="img-fluid landing-image"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
