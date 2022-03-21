import React, {useState} from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { BsFillBasket2Fill, BsLockFill } from 'react-icons/bs';
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
        navigate(ROUTES.payment);
    }

    return (<div className="cart-div">
        <Row>
            <Col>
           
            </Col>
            <Col>
                <h1> <BsFillBasket2Fill /> CART</h1>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row>
            <Col>
                
            </Col>
            <Col>
                {!flag && <Message />}
                {items.map((value, index) => <div> 
                    <p>{value.amount}x{value.item.name}</p>
                </div>)}
            </Col>
            <Col>
            
            </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col md="auto">
                <Button
                onClick={continuePayment}>
                    <BsLockFill /> CHECKOUT
                </Button>
            </Col>
        </Row>
    </div>);
};

export default Cart;