import React from 'react';
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

const ROUTES = routes();

function App() {
  return (
    <div className="app-div">
      <Container fluid className="app-container">
        <Header className="header-div"/>
        <Row className="application-row">
          <Router>
                <Routes>
                    <Route exact path={ROUTES.homepage} element={<Shop />}></Route>
                    <Route exact path={ROUTES.cart} element={< Cart />}></Route>
                    <Route exact path={ROUTES.account} element={<Account />} ></Route>
                    <Route exact path={ROUTES.login} element={<Login />}></Route>
                    <Route exact path={ROUTES.register} element={<Register />}></Route>
                    <Route exact path={ROUTES.logout} element={<Logout />}></Route>
                    <Route exact path={ROUTES.payment} element={<Payment />}></Route>
                    <Route exact path={ROUTES.process} element={<Proccess />}></Route>
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
