import React,{useState} from 'react'
import { Link } from "react-router-dom";
import "../styles/signup.scss";
import axios from "axios";
import homeImg from '../images/images/j1.webp';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name:"",
    username:"",
    password:""
  })
  const handleEvent = e => {
    const { name, value } = e.target
   
    setUser({
      ...user,
      [name]: value
    })
  }
  const signup = () =>{
    const {name,username,password} = user
    if(name && username && password){
      axios.post("http://localhost:4000/signup",user)
      .then(res=> {
        
        alert(res.data.msg)
        setUser({ name:"",
      username:"",
      password:""});
      history('/login');
      })
      
    }
    else{
      alert("invalid input")
    }
    
  }
  return (
    <div className="signupMain">
    <img src={homeImg} alt="home" className="home__banner" />
    { console.log(user)}
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        {/* <form action="#" > */}
          <h1>SIGN UP</h1>

          <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleEvent} required/>
          <input type="text" name="username" value={user.username} placeholder="User name" onChange={handleEvent} required/>
          <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleEvent} required/>
          <button onClick={signup}>Sign Up</button>
         <br/>
          <Link to="/login" className="haveAccount">
            Already have an account? <strong>sign in.</strong>
          </Link>
        {/* </form> */}
      </div>
    </div>
  </div>
  )
}

export default Signup