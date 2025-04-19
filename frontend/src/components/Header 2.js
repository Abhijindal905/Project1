import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Ecommerce Cart</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>

              <NavDropdown title="New User?" id="user-dropdown">
                <LinkContainer to="/login">
                  <NavDropdown.Item>Login</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <NavDropdown.Item>Sign Up</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/logout">
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
