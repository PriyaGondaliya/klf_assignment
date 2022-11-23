import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.scss";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import homeImg from '../images/images/j1.webp';
const Login = ({setCurrrentUser}) => {
  const history = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleEvent = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const signin = () =>{
    const {username,password} = user
    if(username && password){
      axios.post("http://localhost:4000/signin",user)
      .then(res=> {
        alert(res.data.msg)
        setCurrrentUser(res.data.user)
        setUser({ 
          username:"",
          password:""});
        history('/');
      })
      
    }
    else{
      alert("invalid input")
    }
    
  }
  return (
    <div className="loginMain">
      <img src={homeImg} alt="home" className="home__banner" />
      <div className="container" id="container">
        {console.log(user)}
        <div className="form-container sign-up-container">
          <h1>SIGN IN</h1>

          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="User name"
            onChange={handleEvent}
            required
          />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleEvent}
            required
          />
          <button onClick={signin}>Sign In</button>
          <br/>
          <Link to="/signup" className="haveAccount">
            Do not have an account? <strong>sign up.</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
