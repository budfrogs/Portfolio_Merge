import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// Here, we display our Navbar
export default function Menu() {
  return (
    <header>
      <Navbar
        bg="light"
        expand="lg"
      >
        <Navbar.Brand>
          <h1 style={{ color: "green" }}>James Developer Page</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
            >
              Contact
            </Nav.Link>
            <NavDropdown title="Portfolio">
              <NavDropdown.Item
                as={Link}
                to="/tenzies"
              >
                Tenzies Dice Game
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/movie"
              >
                Movie Search
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
