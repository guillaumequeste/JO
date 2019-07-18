import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Header.css'


class Header extends Component {
  
    render () {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand href="/">Accueil</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <NavDropdown title="Jeux modernes" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/summer">Accueil JO été</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/winter">Accueil JO hiver</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/antiquity">Antiquité</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header