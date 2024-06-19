
import React, { useContext } from 'react'
import { useState } from 'react'
import { AppContext } from './context/context'
import { Link } from 'react-router-dom'
import "./signup.css"


export default function Signup() {
    const[username, setUsername] = useState("")
    const[picture, setPicture] = useState("")
    const[password, setPassword] = useState("")
    const [data,setData] = useState("data")
    const {signup} = useContext(AppContext)

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
      .then(dat=> {
        console.log(dat)
        if(!dat.errors){
          console.log(dat)

          document.cookie = `token=${dat.token}`
          signup(dat.sanitizedUser)
         

        }
        else{ 
          console.log(dat)
         return (
         <div>
            {dat.errors.map((error)=>{return <li>{error.msg}</li>})}
         </div>) 
        }
       })
  }
  
    
  return (
    <div className='signup-container'>
    <form onSubmit={handleSubmit}>
      
      <input  className="input-field" onChange={(e)=>setUsername(e.target.value)} placeholder='username' value={username}/>
   
      <input  className="input-field" onChange={(e)=> setPicture(e.target.value)} placeholder="pic" value={picture}/>
     
      <input  className="input-field" onChange={(e)=> setPassword(e.target.value)} placeholder='password' value={password}/>
      <br/>
      <input  className="submit-btt"type="submit" value="Submit"  />
     </form>
     {/* <Link to="/blogs">Blogs</Link> */}
    </div>
  )
}
