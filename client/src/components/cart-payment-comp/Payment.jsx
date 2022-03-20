import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes';
import { getCurrentUser } from '../../scripts/api-scripts';

const ROUTES = routes();

export default function Payment(props){
    const user = getCurrentUser();
    const flag = (user instanceof Object);
    const amount = (flag) ? user.cart.length : 0;
    const navigate = useNavigate();
    
    if(!flag){
        navigate(ROUTES.login);
    }

    return (<div>
        <Row>
            <Col></Col>
            <Col>
                <h1>PAYMENT</h1>
                <h4>We won't keep your payment information</h4>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col>
                <p>You have {amount} items in your cart</p>
                <p>Fill in the following fields and you'll get them to you.</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col>
                {flag &&
                <Form>
                    n   
                </Form>
                }
            </Col>
            <Col></Col>
        </Row>
    </div>)
}