import React,{useState} from 'react'
import { Link } from "react-router-dom";
import "../styles/signup.scss";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import homeImg from '../images/images/j1.webp';
const Account = ({currentUser,setCurrrentUser}) => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name:currentUser.name,
    username:currentUser.username,
    password:currentUser.password
  })
  const handleEvent = e => {
    const { name, value } = e.target
   
    setUser({
      ...user,
      [name]: value
    })
  }
  const update = () =>{
    const {name,username,password} = user
    if(name && username && password){
      axios.post(`http://localhost:4000/update/${currentUser.username}`,user)
      .then(res=> {
        alert(res.data.msg)
        setCurrrentUser(user)
       
      })
      
    }
    else{
      alert("invalid input")
    }
    
  }
  return (
    <div className="signupMain">
    <img src={homeImg} alt="home" className="home__banner" />
   
    <div className="container" id="container">
      <div className="form-container sign-up-container">
       
          <h1>Update Info</h1>

          <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleEvent}/>
          <input type="text" name="username" value={user.username} placeholder="User name" onChange={handleEvent}/>
          <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleEvent}/>
          <button onClick={update}>Update</button>
          <button onClick={()=>{
            setCurrrentUser({})
            history("/")
            }}>Logout</button>
         
      </div>
    </div>
  </div>
  )
}

export default Account