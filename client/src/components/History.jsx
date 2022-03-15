import React from 'react';
import { getCurrentUser } from '../scripts/api-scripts';
import Item from './Item';

export default function History(props){
    const getHistory = (user) => {
        if(user instanceof Object) {
            return user.history;
        }
        return [];
    }

    let user = props.user;
    const items = getHistory(user);

    return (<div className="history-div">
        {items instanceof Array && <h1>History is still empty</h1>}
        {items.map((item) => 
            <Item key={item._id} values={item}/>)
        }
    </div>)
}