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
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IoLogOutOutline } from "react-icons/io5";


export default function CustomNavbar() {
  const { cartCount } = useContext(CartContext);
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home" className={style.title}>
          J-Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={`${style.home}`}>
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/categories"
              className={`${style.Category}`}
            >
              Category
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className={`${style.Products}`}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <IoCartOutline size={28} />
              {cartCount > 0 && (
                <span
                  className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{
                    fontSize: "0.6rem",
                    transform: "translate(-60%, -45%)",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/auth/register"
              className={`${style.Register}`}
            >
              <IoMdPerson />

              <span className={style.text}>Sign Up</span>
            </Nav.Link>
 <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic" className={style.drop}>
            <i className="bi bi-person-circle"></i>  My Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} className={style.profile} to="/Profile"><i className="bi bi-person me-2"></i> Profile</Dropdown.Item>
        <Dropdown.Item as={Link} className={style.LogOut} href="#/action-2"><IoLogOutOutline /> Log Out</Dropdown.Item>
     
      </Dropdown.Menu>
    </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
