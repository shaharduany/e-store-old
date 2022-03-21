import React from 'react';
import { Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes';
import { checkout, getCurrentUser } from '../../scripts/api-scripts';
import { BsCalendar, BsCreditCard, BsFillFileEarmarkLock2Fill, BsHouse, BsLock, BsPerson } from 'react-icons/bs';

const ROUTES = routes();

export default function Payment(props){
    const user = getCurrentUser();
    const flag = (user instanceof Object);
    const amount = (flag) ? user.cart.length : 0;
    const navigate = useNavigate();
    
    if(!flag){
        navigate(ROUTES.login);
    }

    const pay = async(event) => {
        await checkout();
        navigate(ROUTES.process);
    }

    return (
    <div>
        <Row>
            <Col></Col>
            <Col md='auto'>
                <h1>PAYMENT</h1>
                <h4><BsFillFileEarmarkLock2Fill /> We won't keep your payment information</h4>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col>
                <p>You have {amount} items in your cart</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col>
                {flag &&
                <Form>
                    <InputGroup>
                        <InputGroup.Text><BsPerson /> Full name:</InputGroup.Text>
                        <FormControl
                        type="text"
                        placeholder='Enter your full name'
                        aria-label='name'
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text><BsHouse /> Full Address</InputGroup.Text>
                        <FormControl 
                        type='text'
                        placeholder='Street, City, Postal-Code'
                        />
                    </InputGroup> 
                    <br />
                    <InputGroup>
                        <InputGroup.Text><BsCreditCard />  Credit card:</InputGroup.Text>
                        <FormControl
                        type="password" 
                        placeholder="Enter your credit card"
                        />
                    </InputGroup>
                    <InputGroup>
                    
                        <InputGroup.Text><BsCalendar /> Expiration Date</InputGroup.Text>
                        <FormControl 
                        type="date"
                        />
                        <InputGroup.Text>
                            3-digits
                        </InputGroup.Text>
                        <FormControl 
                        type="text"
                        placeholder='CVV'
                        />
                    </InputGroup>
                    <hr />
                    <InputGroup>
                        <Button onClick={pay}>
                            <BsLock /> PAY
                        </Button>
                    </InputGroup>
                </Form>
                }
            </Col>
            <Col></Col>
        </Row>
    </div>)
}