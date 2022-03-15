import React, {useState, useEffect} from 'react';
import Item from './Item';
import { getShopItems } from "../scripts/api-scripts";


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

        {items && items.map((item) => 
        <Item key={item._id} values={item} />)}
    </div>);
};

export default Shop;