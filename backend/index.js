const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();
const port = process.env.PORT;
const fs = require("fs");


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/signin", (req, res) => {
  const userData = req.body
  const existUsers = readUserData()
  
  const findUser = existUsers.find( user => user.username === userData.username)
    if (findUser) {
        if(existUsers.find( user => user.password === userData.password)){
          const user = existUsers.find( user => user.username === userData.username && user.password === userData.password)
          return res.send({success: true, msg: 'Successfully signedin',user:user})
        }
        else{
          return res.send({error: true, msg: 'Invalid username or password'})
        }
       
    }
    else{
      return res.send({error: true, msg: 'User not registered please sign up'})
    }
  
});

app.post("/signup", (req, res) => {

  const userData = req.body
  const existUsers = readUserData()
  
  const findUser = existUsers.find( user => user.username === userData.username )
    if (findUser) {
        console.log("exist already")
        return res.send({error: true, msg: 'User already registered'})
    }

    existUsers.push(userData)
    writeUserData(existUsers);
    return res.status(200).send({success: true, msg: 'Successfully Registered'})
    
});

app.post("/update/:username", (req, res) => {
  const username = req.params.username
  const userData = req.body
    
    const existUsers = readUserData()
        
    const findExist = existUsers.find( user => user.username === username )
    if (!findExist) {
        return res.status(409).send({error: true, msg: 'username not exist'})
    }
    //filter the userdata
    const updateUser = existUsers.filter( user => user.username !== username )
    //push the updated data
    updateUser.push(userData)
    //finally save it
    writeUserData(updateUser)
    res.send({success: true, msg: 'User data updated successfully'})
    
});

const readUserData = () => {
    const jsonData = fs.readFileSync('userdata.json')
    return JSON.parse(jsonData)    
}

const writeUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('userdata.json', stringifyData)
}

app.listen(port, () => {
  console.log(`server started on localhost://${port}`);
});
