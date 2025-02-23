import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AddProjectModal from './AddProjectModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For icons (optional)

function NavScrollExample() {
  const [isModalOpen, setModalState] = useState(false);

  const openModal = useCallback(() => {
    setModalState(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalState(false);
  }, []);

  const addProjectToList = (newProject) => {
    // This function should be passed down from a parent component or handled via context/state management
    console.log('New project added:', newProject);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container fluid>
          <Navbar.Brand href="#">ProjectManager Pro</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#reports">ReportUs</Nav.Link>
            </Nav>
            <div className="d-flex">
              <Button variant="outline-primary" className="me-2">Sign In</Button>
              <Button variant="primary">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AddProjectModal isModalOpen={isModalOpen} closeModal={closeModal} addProjectToList={addProjectToList} />
    </>
  );
}

export default NavScrollExample;
