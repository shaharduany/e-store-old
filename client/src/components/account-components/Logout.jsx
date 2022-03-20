import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import routes from '../../routes';
import { getCurrentUser, logout } from '../../scripts/api-scripts';
import Message from '../Message';

const ROUTES = routes();

const Logout = (props) => {
    const [logged, setLogged] = useState(props.user);
    let clicked = false;
    const flag = (logged instanceof Object);
    const data = "Logged out";
    const navigate = useNavigate();

    const handleLogout = async (event) => {
        event.preventDefault();
        logout();
        clicked = true;
        window.location.reload();
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
        {clicked ? <Message message={data} /> : null}
    </div>);
};

export default Logout;