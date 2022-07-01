import './App.css';
import { useEffect, useState } from 'react';
import {db} from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { Routes, Route, Link } from "react-router-dom";
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  const [User,setUser]=useState([])
  const [NewUser,setNewUser]=useState({
    name:'asdf',
    age:0
  })
  useEffect(()=>{
    const usersCollectionfef = collection(db, 'users');
    const getUsers= async () =>{
      const data= await getDocs(usersCollectionfef)
      setUser(data.docs.map((doc)=>({
        ...doc.data(),id:doc.id
      }) ))
      } 
    getUsers()
  },[])

  function changeHandler(e){
    console.log(e.target.value)
    /*  setNewUser((preVal)=>{
      let temp=preVal
      temp.name=e.target.value;
      return temp
     })  */
     //console.log( {e.target.name:e.target.value})
   /*   let name1=e.target.name
     let value=e.target.value
     setNewUser((pre)=>{
     
     }) */
  }

  return (
    <div className="App">
       <Routes>
        {<Route path="/login" element={<Login />} />}
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <div>
        <input type='text' name="name" onChange={changeHandler} ></input>
        <input type='text' name="age" onChange={changeHandler} ></input>
      </div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {User.map((user, index)=>{
        return  (
          <p  key={index}>{user.name}</p>
        )
        })}
      
      </header>
    </div>
  );
}

export default App;
