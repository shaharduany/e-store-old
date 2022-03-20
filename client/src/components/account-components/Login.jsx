import React, { useState } from "react";
import { getCurrentUser, login } from "../../scripts/api-scripts";
import { Button, Col, Form, FormControl, FormLabel, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Message from "../Message";
import routes from "../../routes";


const ROUTES = routes();

const Login = (props) => {
    const [logged, setLogged] = useState(props.user);
    const flag = (logged instanceof Object);
    const navigate = useNavigate();

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
        window.location.reload();
    }

    const forgotClick = (event) => {
        event.preventDefault();
        alert("Password can't be recovered, register again");
        navigate(ROUTES.register);
    }
    
    return (
        <div className="login-div">
            <Row className="justify-content-center">
                <Col>
                </Col>
                <Col>
                    <h1>Login</h1>
                    <br />
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                
                </Col>
                <Col xs={4}>
                    
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
                            <Row>
                                <Col>
                                <InputGroup>
                                    <Button
                                    variant="primary"
                                    onClick={handleSubmit}
                                    >
                                        LOGIN
                                    </Button>
                                </InputGroup>
                                </Col>
                                <Col md="auto">
                                <InputGroup>
                                    <Button
                                    variant="secondary"
                                    >
                                        Forgot password
                                    </Button>
                                </InputGroup>
                                </Col>
                            </Row>
                0    </Form>}
                    {flag && <Message message="Proccessing" /> }
                    {clicked ? <Message message={data} /> : null}
                </Col>
                <Col>
                
                </Col>
            </Row>
        </div>);
};

export default Login;