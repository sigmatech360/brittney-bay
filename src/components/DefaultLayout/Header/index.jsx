import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const navLinks = [
  { label: "About Us", path: "homeAboutUs" },
  { label: "Why Choose Us", path: "homeWhyChooseUs" },
  { label: "Testimonials", path: "homePageTestimonial" },
  { label: "FAQ's", path: "homePageFaq" },
  // { label: "How its Work", path: "homeHowItWork" },
];

const Header = () => {
  return (
    <Navbar expand="lg" className="main-navbar" variant="dark">
      <Container className="position-relative">
        <div className="mainNav-outer__div">
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="mainNav-list">
            <Nav>
              {navLinks.map((link, index) => (
                <ScrollLink 
                  // as={ScrollLink}
                  to={link.path}
                  smooth={true}
                  duration={500}
                  key={index}
                >
                  {link.label}
                </ScrollLink>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand as={RouterLink} to="/">
            <img src={logo} alt="My Virtual PI" />
          </Navbar.Brand>
          <div className="mainNav-right">
            <button className="mainNav-right__icon mainNav-right__icon-search">
              <IoSearch />
            </button>
            <button className="mainNav-right__icon mainNav-right__icon-fav">
              <FaRegHeart />
            </button>
            <RouterLink  to={""} className=" login-btn">
              Login
            </RouterLink>
            <RouterLink
              // as={RouterLink}
              to={"/wedding-business"}
              className="become-vendor-btn theme-fill-btn"
            >
              Apply as a Vendor
            </RouterLink>
          </div>
        </div>
        <div className="mainNav-outer__div-mobile">
          <div className="mainNav-outer__div-mobile-logoIcon">
            <Navbar.Brand as={RouterLink} to="/">
              <img src={logo} alt="My Virtual PI" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
          </div>
          <Navbar.Collapse id="navbar-nav" className="mainNav-list">
            <Nav>
              {navLinks.map((link, index) => (
                <ScrollLink  to={link.path} key={index}>
                  {link.label}
                </ScrollLink>
              ))}
            </Nav>
            <div className="mainNav-right">
              <button className="mainNav-right__icon mainNav-right__icon-search">
                <IoSearch />
              </button>
              <button className="mainNav-right__icon mainNav-right__icon-fav">
                <FaRegHeart />
              </button>
              <RouterLink to={""} className=" login-btn">
                Login
              </RouterLink>
              <RouterLink
                // as={Link}
                to={"/wedding-business"}
                className="become-vendor-btn theme-fill-btn"
              >
                Apply as a Vendor
              </RouterLink>
            </div>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
