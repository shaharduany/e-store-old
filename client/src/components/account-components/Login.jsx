import React, { useState } from "react";
import { getCurrentUser, login } from "../../scripts/api-scripts";
import { Button, Col, Form, Image, FormControl, FormLabel, InputGroup, Row, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Message from "../Message";
import routes from "../../routes";
import { BsEmojiHeartEyes, BsLockFill, BsMailbox, BsPerson, BsQuestionCircle, BsUnlockFill } from "react-icons/bs";


const ROUTES = routes();

const Login = (props) => {
    const [logged, setLogged] = useState(props.user);
    const flag = (logged instanceof Object);
    const navigate = useNavigate();
    const logoSize = 100;


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
                <Col xs={4}>
                </Col>
                <Col md="auto">
                    <h1><BsUnlockFill/> Login</h1>
                    <hr />
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                <Image 
                src="eshop-logo.jpg"
                fluid={true}
                rounded={true}
                />
                </Col>
                <Col md="auto">
                    <p>Fill in the following fields</p>
                    {!flag &&
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>
                                 <BsPerson /> Email 
                            </InputGroup.Text>
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
                                <BsLockFill /> Password
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
                                        Forgot password <BsQuestionCircle />
                                    </Button>
                                </InputGroup>
                                </Col>
                            </Row>
                0    </Form>}
                    {flag && <Message message="Proccessing" /> }
                    {clicked ? <Message message={data} /> : null}
                </Col>
                <Col>
                    <Alert bg="secondary">
                        <Alert.Heading>We're happy to see you coming back!</Alert.Heading>
                        <p>Welcome back to the website.
                            Please keep in mind that there may be a delay in the orders.
                            Matter of fact, it most likely will never get to you.
                            But stay positive! <BsEmojiHeartEyes />
                        </p>
                        <footer>We're using cookies to delighten your experience.</footer>
                    </Alert>
                </Col>
            </Row>
        </div>);
};

export default Login;