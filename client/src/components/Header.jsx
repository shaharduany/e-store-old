import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavbarBrand, Image, NavDropdown, Col, Row, Badge} from 'react-bootstrap';
import {BsAwardFill, BsFillBasket2Fill, BsHandThumbsDownFill, BsHouseFill, BsMouse2Fill, BsPerson, BsPersonBadgeFill, BsShopWindow} from 'react-icons/bs';


function Header(props){
    const logoSize = 60;
    let [user, setUser] = useState(props.user);

    const [flag, setFlag] = useState(user instanceof Object);
    
    useEffect(() => {
        setUser(props.user);
    });

    return (
    <Row className="header-row">
        <Col md="auto">
            <Image
            src="./eshop-logo.jpg"
            width={logoSize}
            height={logoSize}
            />
        </Col>
        <Col md="auto">
            <Navbar className="justify-content-center">
                <NavbarBrand href="/"><Badge bg="primary"><BsShopWindow />s EShop</Badge></NavbarBrand>
                <Nav.Link
                href="/">
                    <BsHouseFill /> HOME
                </Nav.Link>
            </Navbar>
        </Col>
        <Col>
        </Col>
        <Col md="auto">
            <Navbar className='justify-content-end'>
            <Navbar.Collapse>
                <Nav id="me-auto">
                    {flag && <Nav.Link href="/cart">
                        <BsFillBasket2Fill /> CART
                    </Nav.Link>}
                    {!flag && 
                    <Nav.Link href="/login" 
                    
                    ><BsAwardFill /> LOGIN</Nav.Link>}
                    {!flag &&
                    <Nav.Link 
                    href="/register"
                    variant="primary"
                    >
                        <BsMouse2Fill /> REGISTER
                    </Nav.Link>
                    }
                    {flag &&
                        <Nav.Link href="/logout">
                            <BsHandThumbsDownFill /> LOGOUT
                        </Nav.Link>
                    }
                    {flag &&
                    <NavDropdown title="ACCOUNT">
                        <NavDropdown.Item href="/account">
                            <BsPersonBadgeFill /> Account
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/cart">
                           <BsFillBasket2Fill/> Cart
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