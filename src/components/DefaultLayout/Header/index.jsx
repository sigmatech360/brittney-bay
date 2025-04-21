import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const navLinks = [
  { label: "About Us", path: "" },
  { label: "Why Choose Us", path: "" },
  { label: "Testimonials", path: "" },
  { label: "FAQ's", path: "" },
  { label: "How its Work", path: "" },
];

const Header = () => {
  return (
    <Navbar expand="lg" className="main-navbar" variant="dark">
      <Container>
        <div className="mainNav-outer__div">
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="mainNav-list">
            <Nav>
              {navLinks.map((link, index) => (
                <Nav.Link as={Link} to={link.path} key={index}>
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="My Virtual PI" />
          </Navbar.Brand>
          <div className="mainNav-right">
            <button className="mainNav-right__icon mainNav-right__icon-search">
              <IoSearch />
            </button>
            <button className="mainNav-right__icon mainNav-right__icon-fav">
              <FaRegHeart />
            </button>
            <Nav.Link as={Link} to={""} className=" login-btn">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to={""} className="become-vendor-btn">
              Become a Vendor
            </Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
