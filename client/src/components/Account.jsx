import React, { useState } from 'react';
import { getCurrentUser, logout } from '../scripts/api-scripts';

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
        <h1>{user && user.email}</h1>
        <button onClick={reload} >Login Logout Toggle</button>
         <br />
    </div>);
};

export default Account;