import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";

const header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="https://krugercorp.com/" target="_blank">
        <img
          alt=""
          src="../images/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Kanterita
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default header
