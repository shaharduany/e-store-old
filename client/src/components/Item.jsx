import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddCart from './AddCart';

function Item(props){
    const values = props.values;
    
    const [name, setName] = useState(values.name);
    const [description, setDescription] = useState(values.description);
    const [quantity, setQuantity] = useState(values.quantity);
    
    const addItem = (event) => {
    
    }
    
    return (
    <div className="item-div flex-row align-items-center">
        <Container>
            <Row >
                <Col>
                    <img src={values.image} width={300} height={300}/>
                </Col>
                <Col xs={8}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>Quantity: <b>{quantity}</b></p>
                    <AddCart values={values} />
               </Col>
            </Row>
        </Container>
    </div>);
}

export default Item;