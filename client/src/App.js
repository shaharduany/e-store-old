import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import {Badge, Col, Container, Row } from 'react-bootstrap';


function App() {
  return (
    <div className="app-div">
      <Container fluid className="app-container">
        <Header className="header-div"/>
        <Row className="application-row">
          <Router>
                <Routes>
                    <Route exact path='/' element={<Shop />}></Route>
                    <Route exact path='/cart' element={< Cart />}></Route>
                    <Route exact path='/account' element={<Account />} ></Route>
                    <Route exact path='/login' element={<Login />}></Route>
                    <Route exact path='/register' element={<Register />}></Route>
                    <Route exact path='/logout' element={<Logout />}></Route>
                </Routes>
          </Router>
        </Row>
        <Row>
          <Col>
            <p>Do not copy this, for your own sake. Nobody would buy from you.</p>
          </Col>
          <Col md="auto">
            <footer>
              <p>
                <Badge bg="secondary">
                    Author: Shahar Duany
                </Badge>
              </p>
            </footer>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
