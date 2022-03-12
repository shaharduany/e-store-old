import React, { useState } from 'react';
import { getCurrentUser } from '../scripts/api-scripts';

const Account = (props) => {
    const [user, setUser] = useState(getCurrentUser());

    const reload = (event) => {
        setUser(getCurrentUser());
    }

    return (<div className='account-div'>
            <h1>{user && user.email}</h1>
            <button onClick={reload} >Click here</button>
    </div>);
};

export default Account;