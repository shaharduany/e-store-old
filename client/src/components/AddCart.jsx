import React, { useState } from 'react';
import { Row, Col, Badge, Button, Form, InputGroup } from 'react-bootstrap';

export default function AddCart(props){
    const values = props.values;
    const [maxQuantity, setMaxQuantity] = useState(values.quantity);
    let flag = false; // fix it later
    const [selection, setSelection] = useState(0);
    const rangeChange = (event) => {
        event.preventDefault();
        let val = event.target.value;
        setSelection(val);
        if(val > 0) {
            flag = false;
        }
    }

    const submitForm = event => {
        event.preventDefault();
        alert(selection);
    }

    return (
        <div className='add-button'>
                 <Form>
                    <Row> 
                        <Form.Label>
                            <h5>Select amount</h5>
                        </Form.Label>
                        </Row>
                        <Row>
                            <Col xs={3}>

                            </Col>
                            <Col xs={6}>
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
                            <Col xs={3}>
                                <br />
                                <Button
                                variant="primary"
                                disabled={flag}
                                onClick={submitForm}
                                >
                                    ADD
                                </Button>
                            </Col>
                    </Row>      
                </Form>
        </div>
    )
}