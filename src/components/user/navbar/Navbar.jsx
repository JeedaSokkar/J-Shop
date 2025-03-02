import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function CustomNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">J-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      
                        <Nav.Link  as={Link} to={'/Register'} href="#link">Register </Nav.Link>
                        <Nav.Link  as={Link} to={'/login'} href="#link">Login</Nav.Link>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
