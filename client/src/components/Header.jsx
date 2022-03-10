import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Shop from './Shop';
import Cart from './Cart';
import Account from './Account';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';


function Header(props){

    return (<div className="header-div">
    <h1>HElllllloooo</h1>
    <Router>
        <div>
            <ul>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to='/account'>Account</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
            </ul>
            <Routes>
                <Route exact path='/' element={<Shop />}></Route>
                <Route exact path='/cart' element={< Cart />}></Route>
                <Route exact path='/account' element={<Account />} ></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/register' element={<Register />}></Route>
                <Route exact path='/logout' element={<Logout />}></Route>
            </Routes>
        </div>
      </Router>
    </div>);
}

export default Header;