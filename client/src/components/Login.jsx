import React, { useState } from "react";
import { getCurrentUser, login } from "../scripts/api-scripts";
import { Button, Form, FormControl, FormLabel, InputGroup } from 'react-bootstrap';
import { BrowserRouter } from "react-router-dom";
import Message from "./Message";


const Login = (props) => {
    const [logged, setLogged] = useState(getCurrentUser());
    const flag = (logged instanceof Object);
    
    const [password, setPassword] = useState("");
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const [email, setEmail] = useState("");
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    let clicked = false;
    let data = "EMPTY";

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        data = await login(email, password);
        clicked = true;
    }
    
    return (
        <div className="login-div">
            <h1>Login</h1>
            {!flag &&
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                   <FormControl
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="email-field"
                    value={email}
                    onChange={handleEmail}
                    />
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>
                        Password
                    </InputGroup.Text>
                    <FormControl 
                    placeholder="Enter your password"
                    aria-label="Password"
                    type='password'
                    value={password}
                    onChange={handlePassword}
                    >
                    </FormControl>
                </InputGroup>
                <InputGroup>
                    <Button
                    variant="primary"
                    onClick={handleSubmit}
                    >
                        REGISTER
                    </Button>
                </InputGroup>
            </Form>}
            {flag && <Message /> }
            {clicked && <Message message={data} />}
        </div>);
};

export default Login;