import React from 'react';
import {Card} from 'react-bootstrap';

export default function ItemContent(props){
    const values = props.values;
    const name = values.name;
    

    return ( <Card
        bg="info"
        >
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>)
}