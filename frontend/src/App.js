import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Account from './components/Account';

import { useState } from "react";


function App() {
  const [currentUser, setCurrrentUser] = useState({})
  
  return (
    <div className="App">
      <Router>
     <Header currentUser={currentUser}/>
      <Routes>
        <Route exact path="/"  element={<Home setCurrrentUser={setCurrrentUser}/>}/>
        <Route path="/login"  element={<Login setCurrrentUser={setCurrrentUser}/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/contact"  element={<Contact currentUser={currentUser}/>}/>
        <Route path="/account"  element={<Account currentUser={currentUser} setCurrrentUser={setCurrrentUser}/>}/>
      </Routes>
     
    </Router>
    </div>
  );
}

export default App;
