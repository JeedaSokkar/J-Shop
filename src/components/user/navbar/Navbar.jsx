import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { IoCartOutline } from "react-icons/io5";
import style from "./Navbar.module.css";
import { IoMdPerson } from "react-icons/io";


export default function CustomNavbar() {
  const { cartCount } = useContext(CartContext);
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home" className={style.title}>J-Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={`${style.home}`}>
              Home
            </Nav.Link>

           
            <Nav.Link as={Link} to="/categories" className={`${style.Category}`}>
              Category
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className={`${style.Products}`}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className={`${style.cart}`}>
              <IoCartOutline />
              {cartCount}
            </Nav.Link>
            
            <Nav.Link as={Link} to="/auth/register" className={`${style. Register}`}>
            <IoMdPerson />

               <span className={style.text}>Register</span>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
