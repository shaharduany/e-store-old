import React, {useState} from 'react';
import { Row, Col, Button, Alert, Badge, Image, FormCheck, Form, FormGroup } from 'react-bootstrap';
import { BsArrowLeftSquare, BsFillBasket2Fill, BsLockFill, BsPercent } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes';
import { getCurrentUser } from "../../scripts/api-scripts";
import Message from '../Message';


const retrieveCart = (user) =>{
    if(user instanceof Object){
        return user.cart;
    } else {
        return ["aaa"];
    }
}

const Cart = (props) => {
    const USER = getCurrentUser();
    const [items, setItems] = useState(retrieveCart(USER));
    const navigate = useNavigate();
    let flag = (USER instanceof Object);
    const ROUTES = routes();

    const continuePayment = (event) => {
        if(items.length < 1){
            alert('Your cart is empty');
            navigate(ROUTES.homepage);
            return;
        }
        navigate(ROUTES.payment);
    }

    return (<div className="cart-div">
        <Row>
            <Col xs={8}>
                <Alert>
                    <h1><BsFillBasket2Fill />CART</h1>
                    <hr />
                    {!flag && <Message />}
                    <ol>
                    {items.map((value, index) => 
                        <li>{value.amount}x{value.item.name}</li>
                    )}
                    </ol>
                    <hr />
                    <Row>
                        <Col>
                        </Col>
                        <Col md="auto">
                            <Button
                            onClick={continuePayment}>
                                <BsLockFill /> CHECKOUT
                            </Button>
                        </Col>
                    </Row>
                </Alert>
            </Col>
            <Col xs={4}>
                <Alert>
                    <Alert.Heading>
                        <Badge><BsArrowLeftSquare />ORDER NOW</Badge> GET <Badge bg="secondary">20<BsPercent /></Badge> OFF
                    </Alert.Heading>
                    <Row>
                        <Col>
                            <Image
                            fluid
                            src="register-person.jpg"
                            />
                        </Col>
                        <Col>
                        <p>You won't get your items anyways, so we give you a disount.</p>
                        </Col>
                    </Row>
                </Alert>
            </Col>
        </Row>
        <Row>
        </Row>
    </div>);
};

export default Cart;