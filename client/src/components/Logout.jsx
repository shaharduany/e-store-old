import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { getCurrentUser, logout } from '../scripts/api-scripts';
import Message from './Message';

const Logout = (props) => {
    const [logged, setLogged] = useState(getCurrentUser());
    let clicked = false;
    const flag = (logged instanceof Object);
    const data = "Logged out";
    
    const handleLogout = async (event) => {
        event.preventDefault();
        logout();
        clicked = true;
    }

    return (
    <div className='logout-div'>
        <h1>Logout</h1>
        {flag &&
            <Button
            variant="secondary"
            onClick={handleLogout}
            >
                Logout
            </Button>
        }
        {!flag && <Message message="You're not logged in" />}
        {clicked && <Message message={data} />}
    </div>);
};

export default Logout;