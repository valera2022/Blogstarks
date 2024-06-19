import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/context'
import { useNavigate } from 'react-router-dom'
import "./login.css"
export default function () {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const {login,setLoggedIn,loggedin} = useContext(AppContext)
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        let formData={
            username,
            password
        }

        
    fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
        .then(res=> res.json())
        .then(data=>{
            if(!data.errors){
                console.log(data)
                document.cookie = `token=${data.token}`
                setLoggedIn(true)
                login(data.sanitizedUser)
             
            }
            else{
                console.log(data)
            }
        })
        navigate("/")

    }
    if(!loggedin){
   return (
    <div className='login-container'>
        <form onSubmit={handleSubmit}>
            <input className='input-field' placeholder='Username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <input className='input-field' placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button className="sub-button" type="submit">Login</button>
        </form>
    </div>
  )
 }
 else{
    return <h1>You already Logged in</h1>
 }
}
