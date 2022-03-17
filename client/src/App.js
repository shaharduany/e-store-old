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


function App() {
  return (
    <div className="app-div bg-light">
      <Header className="headers-div"/>
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

    </div>
  );
}

export default App;
