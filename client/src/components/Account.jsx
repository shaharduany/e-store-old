import React, { useState } from 'react';
import { getCurrentUser, logout } from '../scripts/api-scripts';
import { Button } from 'react-bootstrap';
import Name from './Name';
import History from './History';

const Account = (props) => {
    const [user, setUser] = useState(getCurrentUser());

    const reload = (event) => {
        if(user){
            logout();
            user = undefined;
        } else {
            setUser(getCurrentUser());
        }
    }
    
    return (
    <div className='account-div'>
        <h1>ACCOUNT</h1>
        <hr />
        <Name user={user} />
        <hr />
        <History user={user} />
    </div>);
};

export default Account;