import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavbarBrand, Image, NavDropdown, Col, Row, Badge} from 'react-bootstrap';
import {BsAwardFill, BsFillBasket2Fill, BsHandThumbsDownFill, BsHouseFill, BsMouse2Fill, BsPerson, BsPersonBadgeFill, BsShopWindow} from 'react-icons/bs';
import routes from '../routes';

const ROUTES = routes();

function Header(props){
    const logoSize = 60;
    let [user, setUser] = useState(props.user);

    const [flag, setFlag] = useState(user instanceof Object);
    
    useEffect(() => {
        setUser(props.user);
    });

    return (
    <Row className="header-row">
        <Navbar sticky='top' variant='dark'>
        <Col xs={1}>
            <Image
            src="./eshop-logo.jpg"
            width={logoSize}
            height={logoSize}
            />
        </Col>
        <Col xs='auto'>
                <NavbarBrand href="/"><Badge bg="primary">
                    <BsShopWindow />s EShop</Badge>
                </NavbarBrand>
        </Col>
        <Col>
                <Nav.Link href= {ROUTES.homepage}>
                    <BsHouseFill /> HOME
                </Nav.Link>
        </Col>
        <Col md="auto">
            <Navbar.Collapse>
                    {flag && <Nav.Link href={ROUTES.cart}>
                        <BsFillBasket2Fill /> CART
                    </Nav.Link>}
                    {!flag && 
                    <Nav.Link href={ROUTES.login} 
                    ><BsAwardFill /> LOGIN</Nav.Link>}
                    {!flag &&
                    <Nav.Link 
                    href={ROUTES.register}
                    variant="primary"
                    >
                        <BsMouse2Fill /> REGISTER
                    </Nav.Link>
                    }
                    {flag &&
                        <Nav.Link href={ROUTES.logout}>
                            <BsHandThumbsDownFill /> LOGOUT
                        </Nav.Link>
                    }
                    {flag &&
                    <NavDropdown title="ACCOUNT">
                        <NavDropdown.Item href={ROUTES.account}>
                            <BsPersonBadgeFill /> Account
                        </NavDropdown.Item>
                        <NavDropdown.Item href={ROUTES.cart}>
                           <BsFillBasket2Fill/> Cart
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={ROUTES.logout}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                    }
            </Navbar.Collapse>
     </Col>
     </Navbar>
    </Row>
    );
}

export default Header;