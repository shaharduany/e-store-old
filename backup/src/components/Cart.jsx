import React, {useState} from 'react';
import { getShopItems } from "../scripts/api-scripts";

const Cart = (props) => {
    const [items, setItems] = useState(props.items);

    return (<div className="cart-div">
        <h1>Cart page</h1>
    </div>);
};

export default Cart;