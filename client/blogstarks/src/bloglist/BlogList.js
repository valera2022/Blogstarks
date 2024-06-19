import React, { useEffect, useState } from "react";

import { useContext } from "react";
import { AppContext } from "../context/context";
import BlogPreview from "./BlogPreview";
import { Link } from "react-router-dom";

function Bloglist(){
    const {blogs,loggedin} = useContext(AppContext)
 
    console.log(blogs)
    console.log(loggedin)
  
// r
//    if(loggedin ){
//     console.log(blogs)
//     console.log(loggedin)
    

//       let arr =  blogs.blogs?.map((blog)=>{
//            return blog
    
          
//         })
        

//         return <h1>{arr.title}</h1>
     
  

//     } 

// else{
//     <h1>Not Authorized</h1>
// }
let arr 

if(loggedin){
    if (blogs.length > 0){
      arr =  blogs.blogs?.map((blog)=>{
        console.log(blog)
        
        return (<div>
         
            <BlogPreview blog ={blog}/>
        </div>)
    
       
     })
      
    }
  }

 else{
   return( <div>
        <Link to= "login"> Please Log In</Link> 
         <p>Don't have an Account ? <Link to="/signup"> Sign Up </Link> </p>
        
   </div>)
 }

if(loggedin){
  try{ return arr} 
  catch(e){ throw e}

}

else{
    <h1>Not Authorized</h1>
}

 




             
            
            
        

}

export default Bloglist