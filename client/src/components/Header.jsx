import React, {useState, useEffect} from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap';


function Header(props){

    return (<div className="header-div">
    <Navbar bg="light" expand="lg">
        <Container>
            <NavbarBrand href="/">EShop</NavbarBrand>
            <Navbar.Collapse>
                <Nav id="me-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <NavDropdown title="Account">
                        <NavDropdown.Item href="/account">
                            Account
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/cart">
                            Cart
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>);
}

export default Header;