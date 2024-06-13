
import React, { useContext } from 'react'
import { useState } from 'react'
import { AppContext } from './context/context'
import { Link } from 'react-router-dom'


export default function Signup() {
    const[username, setUsername] = useState("username")
    const[picture, setPicture] = useState("picture")
    const[password, setPassword] = useState("password")
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
     <Link to="/blogs">Blogs</Link>
    </div>
  )
}
