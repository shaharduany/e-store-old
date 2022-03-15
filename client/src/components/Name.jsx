import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { getCurrentUser, logout } from '../scripts/api-scripts';

function LoginLogout(props){
    const email = props.email;

    const logoutClick = (event) => {
        event.preventDefault();
        logout();
        alert('Logged out');
        //re-direct
    }

    const handleSignin = (event) => {
        event.preventDefault();

    }

    return (<div className='LoginLogout'>
        {email ? 
        <Button 
        variant="secondary"
        onClick={logoutClick}
        >
            LOGOUT
        </Button>
        :
        <Button 
        variant="primary"
        onClick={handleSignin}
        >
            Sign in
        </Button>
        }
    </div>);
}

export default function Name(props){
    let user = props.user;
    const [email, setEmail] = useState(
        (user !== null && user !== undefined) ?
        user.email : undefined
    );
    
    return (<div>
        <h1>Hello, {email ? email : "Guest"} </h1>
        <LoginLogout email={email} />
    </div>)
}