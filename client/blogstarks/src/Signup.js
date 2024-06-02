
import React from 'react'
import { useState } from 'react'


export default function Signup() {
    const[username, setUsername] = useState("username")
    const[picture, setPicture] = useState("picture")
    const[password, setPassword] = useState("password")
    const [data,setData] = useState("data")

    function handleSubmit(e){
      e.preventDefault()
      let formData={
        username,
        picture,
        password
      }

      fetch("/signup",{
        method: "POST",
        headers: 
        { "Content-Type": "application/json" },
        body: JSON.stringify(formData
        )})
      .then(r=> r.json())
      .then(dat=> document.cookie = `token=${dat.token}`)
  }
  
    
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input onChange={(e)=>setUsername(e.target.value)} value={username}/>
      <label>Pic</label>
      <input onChange={(e)=> setPicture(e.target.value)} value={picture}/>
      <label>password</label>
      <input onChange={(e)=> setPassword(e.target.value)} value={password}/>
      <input type="submit" value="Submit"  />
     </form>
    </div>
  )
}
