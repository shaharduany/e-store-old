import React, { useState } from 'react';
import { getCurrentUser, logout } from '../../scripts/api-scripts';
import { Button } from 'react-bootstrap';
import Name from './Name';
import History from './History';
import Message from '../Message';

const Account = (props) => {
    const [user, setUser] = useState(getCurrentUser());
    const flag = (user instanceof Object);
    
    return (
    <div className='account-div'>
        <h1>ACCOUNT</h1>
        <hr />
        {flag && <div>
            <Name user={user} />
            <hr />
            <History user={user} />
        </div>}
        {!flag && <Message message="You're not logged in" />}
    </div>);
};

export default Account;