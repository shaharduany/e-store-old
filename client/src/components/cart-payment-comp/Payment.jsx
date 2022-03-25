import React, { useState } from 'react';
import { Row, Col, Form, InputGroup, FormControl, Button, Alert, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes';
import { checkout, getCurrentUser } from '../../scripts/api-scripts';
import { BsCalendar, BsCreditCard, BsFillFileEarmarkLock2Fill, BsHouse, BsLock, BsPerson } from 'react-icons/bs';

const ROUTES = routes();

const isDigit = (value) => {
    if((value[value.length-1] <= 9) &&
     (value[value.length - 1] >= 0)){
         return true;
     }
     return false;
}

export default function Payment(props){
    const user = getCurrentUser();
    const flag = (user instanceof Object);
    const amount = (flag) ? user.cart.length : 0;
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const handleNameChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const [address, setAddress] = useState("");
    const handleAddressChange = (event) => {
        event.preventDefault();
        setAddress(event.target.value);
    }

    const [card, setCard] = useState("");
    const handleCardChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        if(!isDigit(value)){
            alert('Card must be digits only');
            return;
        }
        setCard(value);
    }

    const [date, setDate] = useState("");
    const hanldeDateChange = (event) => {
        event.preventDefault();
        setDate(event.target.value);
    }

    const [cvv, setCvv] = useState("");
    const handleCvvChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        if(value.length > 3 || !isDigit(value)){
            alert('CVV must be 3 digits only');
            return;
        }

        setCvv(value);
    }

    if(!flag){
        navigate(ROUTES.login);
    }

    const checkFields = () => {
        if(name.length === 0 ||
            address.length === 0 ||
            card.length === 0 ||
            date.length === 0 ||
            cvv.length !== 3){
                return false;
            }
        return true;
    }

    const resetUser = () => {
        let user = getCurrentUser();
        if(!(user instanceof Object)){
            return;
        }
        user.cart = [];
        const newUser = JSON.stringify(user);
        localStorage.setItem('user', newUser);
    }

    const pay = async(event) => {
        event.preventDefault();

        if(!checkFields()){
            alert('you must fill all the fields');
            return;
        }

        const vals = {
            name: name,
            address: address,
            card: card,
            date: date,
            cvv: cvv,
        };

        const res = await checkout(vals);
        resetUser();

        navigate(ROUTES.process);
    }

    return (
    <div>
        <Row>
            <Col>
                <Alert>
                    <h1>PAYMENT</h1>
                    <h4><BsFillFileEarmarkLock2Fill /> We won't keep your payment information</h4>
                    <p>You have <strong>{amount}</strong> items in your cart</p>
                </Alert>
                <Alert>
                    {flag &&
                    <Form>
                        <InputGroup>
                            <InputGroup.Text><BsPerson /> Full name:</InputGroup.Text>
                            <FormControl
                            type="text"
                            placeholder='Enter your full name'
                            aria-label='name'
                            value={name}
                            onChange={handleNameChange}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text><BsHouse /> Full Address</InputGroup.Text>
                            <FormControl 
                            type='text'
                            placeholder='Street, City, Postal-Code'
                            value={address}
                            onChange={handleAddressChange}
                            />
                        </InputGroup> 
                        <br />
                        <InputGroup>
                            <InputGroup.Text><BsCreditCard />  Credit card:</InputGroup.Text>
                            <FormControl
                            type="password" 
                            placeholder="Enter your credit card"
                            value={card}
                            onChange={handleCardChange}
                            />
                        </InputGroup>
                        <InputGroup>
                        
                            <InputGroup.Text><BsCalendar /> Expiration Date</InputGroup.Text>
                            <FormControl 
                            type="date"
                            value={date}
                            onChange={hanldeDateChange}
                            />
                            <InputGroup.Text>
                                3-digits
                            </InputGroup.Text>
                            <FormControl 
                            type="text"
                            placeholder='CVV'
                            value={cvv}
                            onChange={handleCvvChange}
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
                </Alert>
            </Col>
            <Col>
                <Card>
                    <Card.Header>TERMS AND CONDITIONS</Card.Header>
                    <Image src='eshop-logo.jpg' fluid={true} />
                    <Card.Title>TOU WILL NOT GET ANYTHING OUT OF IT</Card.Title>
                    <Card.Body>
                        <ul>
                            <li>We won't ship you anything</li>
                            <li>We will use your information like Facebook and the rest of the bad guys</li>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>)
}