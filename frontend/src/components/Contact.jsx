import React,{useState,useRef} from 'react'
import { Link } from "react-router-dom";
import "../styles/contact.scss";

import homeImg from '../images/images/j1.webp';
import emailjs from '@emailjs/browser';

const Contact = ({currentUser}) => {
  const form = useRef();
  const [user, setUser] = useState({
    name:currentUser.name,
    username:currentUser.username,
    message:""
  })
  const handleEvent = e => {
    const { name, value } = e.target
   
    setUser({
      ...user,
      [name]: value
    })
  }
  const sendMessage = () =>{
    const {name,username,message} = user
    if(name && username && message){
      
      
    }
    else{
      alert("invalid input")
    }
    
  }
  function submit(e){
    e.preventDefault();
   
    emailjs.sendForm('service_rcbgs5q', 'template_lceiz6e', form.current, 'fY71w-LxnEl68KLRf')
      .then((result) => {
          console.log(result.text);
          alert("Send successfully");
          setUser({
            name:currentUser.name,
            username:currentUser.username,
            message:""
          });
      }, (error) => {
          console.log(error.text);
      });
     
  }
  return (
    <div className="signupMain">
    <img src={homeImg} alt="home" className="home__banner" />
    <div className="container" id="container">
      <div className="form-container sign-up-container">
      <form ref={form} onSubmit={(e)=>submit(e)} className='contact__form' >
          <h1>CONTACT US</h1>

          <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleEvent} required/>
          <input type="text" name="username" value={user.username} placeholder="User name" onChange={handleEvent} required/>
          <textarea name="message" onChange={handleEvent} id="message" value={user.message}   cols="0" rows="10" className='contact__input' required placeholder='Message'></textarea>
          <input type="submit" value="Send" className='contact__button'/>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact