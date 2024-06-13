import React, { useEffect, useState } from "react";

import { useContext } from "react";
import { AppContext } from "../context/context";
import BlogPreview from "./BlogPreview";
import { Link } from "react-router-dom";

function Bloglist(){
    const {blogs,loggedin} = useContext(AppContext)
 
    console.log(blogs)
  
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
     arr =  blogs.blogs.map((blog)=>{
    console.log(blog)
    return (<div>
     
        <BlogPreview blog ={blog}/>
    </div>)

   
 })}

 else{
   return <Link to= "login"> Please Log In</Link> 
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