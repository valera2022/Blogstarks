import React, { useContext } from "react";
import { AppContext } from "./context/context";
import { NavLink } from "react-router-dom";
import index from "./index.css"



export default function Navbar() {
    const {logout,loggedin,setLoggedIn} = useContext(AppContext)
    console.log(loggedin)

    function logMeOut(){
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
         setLoggedIn(false)
        // fetch("/logout", { 
        // method: "DELETE",
        // headers: {"Content-Type": "application/json"}
        // })
        // .then( ()=>{
        //      logout()
            
        // })
     }
 if(loggedin){
  return (
    <div className=" flex flew-row w-screen h-8 bg-slate-700 " >
    {/* <div className=" pl-[200px] bg-slate-700"> */}
      
   
    <NavLink
          to="/"
          end
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              margin: "0px 900px 10px",
              width: "20px",
              height:"1px",
              padding: "0px",
              fontSize:"10px",
            
              
              
              color: isActive ? "red" : "red",
              textDecoration: isActive ? "underline" : "none"
            };
          }}
          
         onClick={logMeOut}>
           <p className="mt-[4px] ">Log_me_out</p>  
        </NavLink>
    </div>
    // </div>
  )
 }

}