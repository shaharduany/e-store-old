import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Shop from './components/shop-components/Shop';
import Cart from './components/cart-payment-comp/Cart';
import Account from './components/account-components/Account';
import Login from './components/account-components/Login';
import Register from './components/account-components/Register';
import Logout from './components/account-components/Logout';
import {Badge, Col, Container, Row } from 'react-bootstrap';
import Proccess from './components/Proccess';
import Payment from './components/cart-payment-comp/Payment';
import routes from './routes';
import { getCurrentUser } from './scripts/api-scripts';
import { BsAlarm, BsTriangle, BsTriangleFill } from 'react-icons/bs';

const ROUTES = routes();

function App() {
  const [user, setUser] = useState(getCurrentUser());

  return (
    <div className="app-div">
      <Container fluid className="app-container">
        <Header className="header-div" user={user}/>
        <Row className="application-row">
          <Router>
                <Routes>
                    <Route exact path={ROUTES.homepage} element={<Shop user={user}/>}></Route>
                    <Route exact path={ROUTES.cart} element={< Cart user={user}/>}></Route>
                    <Route exact path={ROUTES.account} element={<Account user={user}/>} ></Route>
                    <Route exact path={ROUTES.login} element={<Login user={user}/>}></Route>
                    <Route exact path={ROUTES.register} element={<Register user={user}/>}></Route>
                    <Route exact path={ROUTES.logout} element={<Logout user={user}/>}></Route>
                    <Route exact path={ROUTES.payment} element={<Payment user={user}/>}></Route>
                    <Route exact path={ROUTES.process} element={<Proccess user={user}/>}></Route>
                </Routes>
          </Router>
        </Row>
        <hr />
        <Row>
          <Col>
            <p><BsTriangleFill/> Do not copy this, for your own sake. Nobody would buy from you.</p>
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
