import React from 'react';
import { Alert, Badge, Card, Col, Image, Row } from 'react-bootstrap';
import AddCart from './AddCart';

export default function Item(props){
    const values = props.values;
    const user = props.user;
    
    const name = values.name;
    const description = values.description;
    const quantity = values.quantity;
    const about = values.about;
    const image = values.image;
    const imageSize = 300;
    
    
    return (
    <div className="item-div justify-content-center">
        <hr />
        <Row className="justify-content-first">
            <Col xm={4}
            md="auto" >
                <Image 
                src={image}
                width={imageSize}
                height={imageSize}
                rounded={true}
                />
            </Col>
            <Col className='justify-content-first'>
                <Card
                bg="info"
                >
                    <Card.Header>
                        <Badge bg="danger">ORIGINAL FAKE</Badge>
                    </Card.Header>
                    <Row>
                    <Col>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>{description}</Card.Subtitle>
                        <Card.Text>About: {about}</Card.Text>
                    </Card.Body>
                    </Col>
                    <Col>
                    <Card.Body>
                        <Alert>
                            <AddCart values={values} user={user} />
                        </Alert>
                    </Card.Body>
                    </Col>
                    </Row>
                    <Card.Footer> 
                        <Badge bg="secondary">{quantity} LEFT</Badge>
                    </Card.Footer>
                </Card>
            </Col>
         </Row>
    </div>);
}