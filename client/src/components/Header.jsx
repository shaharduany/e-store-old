import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

import Shop from './Shop';
import Cart from './Cart';
import Account from './Account';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
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
    <Router>
        <div>
            <hr />
            <Routes>
                <Route exact path='/' element={<Shop />}></Route>
                <Route exact path='/cart' element={< Cart />}></Route>
                <Route exact path='/account' element={<Account />} ></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/register' element={<Register />}></Route>
                <Route exact path='/logout' element={<Logout />}></Route>
            </Routes>
        </div>
      </Router>
    </div>);
}

export default Header;