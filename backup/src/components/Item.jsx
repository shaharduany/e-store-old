import React, {useState} from 'react';

function Item(props){
    const values = props.values;

    const [name, setName] = useState(values.name);
    const [description, setDescription] = useState(values.description);
    const [quantity, setQuantity] = useState(values.quantity);

    return (<div className="item-class">
        <label>{name}</label>
        <p>{description}</p>
        <p>Quantity: {quantity}</p>
    </div>);
}

export default Item;