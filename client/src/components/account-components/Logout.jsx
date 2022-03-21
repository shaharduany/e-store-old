import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import routes from '../../routes';
import { getCurrentUser, logout } from '../../scripts/api-scripts';
import Message from '../Message';

const ROUTES = routes();

const Logout = (props) => {
    const [logged, setLogged] = useState(props.user);
    let clicked = false;
    const flag = (logged instanceof Object);
    const data = "Logged out";
    const navigate = useNavigate();

    const handleLogout = async (event) => {
        event.preventDefault();
        logout();
        clicked = true;
        window.location.reload();
    }

    return (
    <div className='logout-div'>
        <Row>
            <Col></Col>
            <Col md='auto'>
                <h1>Logout</h1>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col md="auto">
                <p>We're sorry to see you go...</p>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col md="auto">
                {flag &&
                    <Button
                    variant="secondary"
                    onClick={handleLogout}
                    >
                        Logout
                    </Button>
                }
                {!flag && <Message message="You're not logged in" />}
                {clicked ? <Message message={data} /> : null}
            </Col>
            <Col>
            </Col>
        </Row>
    </div>);
};

export default Logout;