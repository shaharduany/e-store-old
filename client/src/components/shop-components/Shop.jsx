import React, {useState, useEffect} from 'react';
import Item from './Item';
import { getShopItems } from "../../scripts/api-scripts";


function Shop(props){
    
    const [items, setItems] = useState([]);

    const [loaded, setLoaded] = useState(false);

    const change = async() => {
        let temp = await getShopItems();
        setItems(temp);
    };

    if(!loaded){
        change();
        setLoaded(true);
    }

    return (<div className="shop-div">
        {items && items.map((item) => (<div>
        <Item key={item._id} values={item} user={props.user}/>
        </div>
        ))}
    </div>);
};

export default Shop;