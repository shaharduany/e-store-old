import React, { useState } from 'react';
import { Row, Col, Badge, Button, Form, InputGroup, Card } from 'react-bootstrap';
import { BsArrowDown, BsBasket2Fill, BsBucketFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../scripts/api-scripts';

export default function AddCart(props){
    const values = props.values;
    const navigate = useNavigate();

    const max = values.quantity;

    let flag = false; // fix it later
    const [selection, setSelection] = useState(0);
    const [bought, setBought] = useState(false);

    const rangeChange = (event) => {
        event.preventDefault();
        let val = event.target.value;
        if(val > max){
            return;
        }
        setSelection(val);
        if(val > 0) {
            flag = false;
        }
    }


    const submitForm = event => {
        event.preventDefault();
        setBought(true);
        
        let user = props.user;

        if(!(user instanceof Object)){
            navigate('/login');
        } else {
            user.cart.push({
                item: values,
                amount: selection
            });
            localStorage.setItem('user', JSON.stringify(user));
        }
        setSelection(0);
    }

    return (
        <div className='add-button'>
                 <Form>
                    <Row> 
                        <Col></Col>
                        <Col md="auto" >
                            <Form.Label>
                                <h4><Badge bg="danger">
                                    <BsArrowDown />
                                    PURCHASE NOW
                                    <BsArrowDown />
                                </Badge></h4>
                            </Form.Label>
                            {bought && <p>ADDED TO CART</p>}
                        </Col>
                        <Col></Col>
                        </Row>
                        <Row>
                            <Col xs={6} md="auto" >
                                <div >
                                    <Form.Label>
                                        <Badge bg="secondary">Buy: {selection}</Badge>
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control 
                                        placeholder='Enter amount'
                                        type="number"
                                        value={selection}
                                        onChange={rangeChange}
                                        
                                        />
                                    </InputGroup>
                                </div>
                            </Col>
                            <Col xs={3} md="auto">
                                <br />
                                <Button
                                variant="primary"
                                disabled={flag}
                                onClick={submitForm}
                                >
                                    <BsBasket2Fill /> ADD
                                </Button>
                            </Col>
                    </Row>      
                </Form>
        </div>
    )
}