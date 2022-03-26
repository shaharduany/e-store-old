import React, {useState} from 'react';
import { Image, Badge, Button, Card, Col, Form, FormControl, FormLabel, InputGroup, Row, Alert } from 'react-bootstrap';
import { BsAlarm, BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes';
import {checkEmail, getCurrentUser, register} from '../../scripts/api-scripts';
import Message from '../Message';

const ROUTES = routes();

const Register = (props) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [username, setUsername] = useState("");
    const [rePassword, setRePassword] = useState("");

    const navigate = useNavigate();
    const logged = getCurrentUser();

    const [flag, setFlag] = useState(logged instanceof Object);
    const [clicked, setClickeed] = useState(false);

    let data = "EMPTY";

    const userChange = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(passwordValue != rePassword){
            alert("Passwords don't match");
            return;
        }

        if(!checkEmail(emailValue)){
            alert("Email is taken");
            return;
        }

        data = await register(emailValue, passwordValue, username);    
        setClickeed(true);
        
    }

    const handleRePass = (event) => {
        event.preventDefault();
        setRePassword(event.target.value);
    }

    const handlePassword = (event) => {
        setPasswordValue(event.target.value);
    }

    const handleEmail = (event) => {
        event.preventDefault();
        setEmailValue(event.target.value);
    }

    const gotoLogin = (event) => {
        event.preventDefault();
        navigate(ROUTES.login);
    }
    


    return (<div className='register-div'>
        <Row>
            <Col lg={3}>
            <Image
                src='eshop-logo.jpg'
                fluid={true}
                />
                <Card>
                    <Card.Body>
                        <Card.Header>
                            <Badge
                            bg='danger'
                            >IMPORTANT</Badge>
                        </Card.Header>
                        <Card.Title>
                            TERM AND CONDITIONS
                        </Card.Title>
                        <Card.Subtitle>
                            Upon signing up, you agree for the following terms and conditions:
                        </Card.Subtitle>
                        <Card.Text>
                            You know that we dill charge you and not give you anything like very Chinese store that sells virtual goods.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Col>
            <Col lg={5}>
                <Alert>
                    <h1>Register</h1>
                    <h6><BsAlarm /> * - Required field</h6>
                    <br />
                    {clicked && <Message message="You must now login. Directing to login" path={ROUTES.login}/>}
                    {!flag &&
                        <Form onSubmit={handleSubmit}>
                            <InputGroup className="mb-3">
                            <InputGroup.Text>
                                *Email
                            </InputGroup.Text>
                            <FormControl
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="email-field"
                            value={emailValue}
                            onChange={handleEmail}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>
                                <BsPerson /> Username
                            </InputGroup.Text>
                            <FormControl
                            placeholder='Enter your username'
                            type='text'
                            aria-label="Username"
                            aria-description="Username-field"
                            value={username}
                            onChange={userChange}
                            />
                        </InputGroup>
                        <br />
                        <InputGroup className='mb-3'>
                            <InputGroup.Text>
                                *Password
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
                            <InputGroup.Text>
                                *Password 2
                            </InputGroup.Text>
                            <FormControl 
                            placeholder='Retype the password'
                            type='password'
                            value={rePassword}
                            onChange={handleRePass}
                            />
                        </InputGroup>
                        <Row>
                            <Col>
                                <InputGroup>
                                    <Button
                                    variant="primary"
                                    onClick={handleSubmit}
                                    >
                                        REGISTER
                                    </Button>
                                </InputGroup> 
                            </Col>
                            <Col md="auto">
                                <InputGroup>
                                    <InputGroup.Text>
                                        Already existing user?
                                    </InputGroup.Text>
                                    <Button
                                    variant="secondary"
                                    onClick={gotoLogin}
                                    >
                                        LOGIN
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                        </Form>
                    }
                    {flag && <Message />}
                </Alert>

            </Col>
            <Col xs={3}>
                <Card >
                    <Card.Img
                    
                    variant="top"
                    src="./register-person.jpg"
                    />
                    <Card.Body>
                        
                        <Card.Text>
                            15,000+ costumers are already satisified with us, what are you waiting for?
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>);
};

export default Register;