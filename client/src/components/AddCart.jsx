import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {addCartStyles} from './styles/shop-styles'

const rangeStyles = addCartStyles.range;
const rangeLabelStyles = addCartStyles.rangeLabel;


export default function AddCart(props){
    const values = props.values;
    const [maxQuantity, setMaxQuantity] = useState(values.quantity);
   
   
    const [selection, setSelection] = useState(0);
    const rangeChange = (event) => {
        event.preventDefault();
        let val = event.target.value;
        setSelection(val);
    }

    const submitForm = event => {
        event.preventDefault();
        alert(selection);
    }

    return (
        <div className='add-button'>
            <Form>
                <Form.Label>
                    Select amount
                </Form.Label>
                <br/>
                <br />
                <Form.Text
                style={rangeLabelStyles}
                >
                    Buy: {selection}
                </Form.Text>
                <Form.Range
                    value={selection}
                    onChange={rangeChange}
                    max={maxQuantity}
                    style={rangeStyles}
                />
                <Button
                ariant="primary"
                onClick={submitForm}>
                    ADD
                </Button>      
            </Form>
        </div>
    )
}