import React, { useEffect, useState } from 'react';
import { Alert, Col, Nav, Row } from 'react-bootstrap';
import Name from './Name';
import History from './History';
import Message from '../Message';

const Account = (props) => {
    const [user, setUser] = useState(props.user);
    const flag = (user instanceof Object);
    
    const [displayName, setDisplayName] = useState(true);
    const [displayHistory, setDisplayHistory] = useState(false);

    const accountClick = (event) => {
        event.preventDefault();
        setDisplayHistory(false);
        setDisplayName(true);
    }

    const historyClick = (event) => {
        event.preventDefault();
        setDisplayName(false);
        setDisplayHistory(true);
    }

    return (
    <div className='account-div'>
        <h1>ACCOUNT</h1>
        <hr />
        {!flag && <Message message="You're not logged in" />}
        {flag && 
        <Row>
            <Col xs={3}>
                <Alert>
                    <Nav variant='primary' bg='dark' className='flex-column'>
                        <Nav.Link onClick={accountClick}>
                            Account
                        </Nav.Link>
                        <Nav.Link onClick={historyClick}>
                            History
                        </Nav.Link>
                    </Nav>
                </Alert>
            </Col>
            <Col xs={9}>
                {displayName && <Name user={user} />}
                {displayHistory && <History user={user} />}
            </Col>
        </Row>
        }
    </div>);
};

export default Account;