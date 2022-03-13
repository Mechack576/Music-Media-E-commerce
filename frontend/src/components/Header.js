import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <header>
          <Navbar bg="dark" variant = "dark" expand="lg" collapseOnSelect>
              <Container>
                <LinkContainer to='/'>
                  <Navbar.Brand><i className="fas fa-music"></i>MeeM</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">

                    <LinkContainer to='/cart'>
                      <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/CD'>
                      <Nav.Link ><i className="fas fa-music"></i>CD</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/cassette'>
                      <Nav.Link ><i className="fas fa-id-card"></i>CD</Nav.Link>
                    </LinkContainer>
                  </Nav>
                  <Nav className="me-auto">
                    <LinkContainer to='/login'>
                        <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link>
                      </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Container>
          </Navbar>
    </header>
  )
}

export default Header