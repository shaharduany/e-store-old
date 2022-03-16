import React, {useState} from 'react';
import { Button, Form, FormControl, FormLabel, InputGroup } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import {getCurrentUser, register} from '../scripts/api-scripts';
import Message from './Message';


const Register = (props) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const logged = getCurrentUser();    
    let flag = (logged instanceof Object);
    let clicked = false;
    let data = "EMPTY";

    const handleSubmit = async(event) => {
        event.preventDefault();
        data = await register(emailValue, passwordValue);    
        clicked = true;
    }

    const handlePassword = (event) => {
        setPasswordValue(event.target.value);
    }

    const handleEmail = (event) => {
        event.preventDefault();
        setEmailValue(event.target.value);
    }

    return (<div className='register-div'>
        <h1>Register</h1>
        {!flag &&
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <FormControl
                placeholder="Email"
                aria-label="Email"
                aria-describedby="email-field"
                value={emailValue}
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
                value={passwordValue}
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
            </Form>
        }
        {flag && <Message />}
        {clicked && <Message message={data} />}      }
    </div>);
};

export default Register;