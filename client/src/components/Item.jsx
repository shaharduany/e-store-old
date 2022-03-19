import React, {useState} from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import AddCart from './AddCart';

export default function Item(props){
    const values = props.values;
    
    const name = values.name;
    const description = values.description;
    const quantity = values.quantity;
    const about = values.about;
    const image = values.image;
    const imageSize = 240;
    
    
    return (
    <div className="item-div justify-content-center">
        <Row className="justify-content-first">
            <Col xm={4}
            md="auto" >
                <img 
                src={image}
                width={imageSize}
                height={imageSize}
                />
            </Col>
            <Col className='justify-content-first'>
                <Card 
                bg="info"
                >
                    <Card.Header>
                        <Badge bg="danger">ORIGINAL FAKE</Badge>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>{description}</Card.Subtitle>
                        <Card.Text>About: {about}</Card.Text>
                        <Card.Text>
                            <Badge bg="secondary">{quantity} LEFT</Badge>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md="auto">
                <AddCart values={values} />
            </Col>
         </Row>
    </div>);
}