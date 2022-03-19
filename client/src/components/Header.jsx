import React from 'react';
import { Nav, Navbar, NavbarBrand, NavDropdown, Col, Row, Badge} from 'react-bootstrap';
import { getCurrentUser } from '../scripts/api-scripts';


function Header(props){
    const user = getCurrentUser();
    let flag = (user instanceof Object)
    return (
    <Row className="header-row">
        <Col>
            <Navbar className="justify-content-center">
                <NavbarBrand href="/"><Badge bg="primary">EShop</Badge></NavbarBrand>
                <Nav.Link
                href="/">
                    HOME
                </Nav.Link>
            </Navbar>
        </Col>
        <Col>
        </Col>
        <Col className='account-col' md="auto">
            <Navbar className='justify-content-end'>
            <Navbar.Collapse>
                <Nav id="me-auto">
                    {flag && <Nav.Link href="/cart">CART</Nav.Link>}
                    {!flag && 
                    <Nav.Link href="/login" 
                    
                    >LOGIN</Nav.Link>}
                    {!flag &&
                    <Nav.Link 
                    href="/register"
                    variant="primary"
                    >
                        REGISTER
                    </Nav.Link>
                    }
                    {flag &&
                        <Nav.Link href="/logout">
                            LOGOUT
                        </Nav.Link>
                    }
                    {flag &&
                    <NavDropdown title="ACCOUNT">
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
                    }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
     </Col>
    </Row>
    );
}

export default Header;