import React, {useState} from 'react';
import AddCart from './AddCart';

function Item(props){
    const values = props.values;
    
    const [name, setName] = useState(values.name);
    const [description, setDescription] = useState(values.description);
    const [quantity, setQuantity] = useState(values.quantity);
    
    const addItem = (event) => {
    
    }
    
    return (<div className="item-div">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Quantity: <b>{quantity}</b></p>
        <img src={values.image} width={400} height={400}/>
        <AddCart values={values} />
    </div>);
}

export default Item;