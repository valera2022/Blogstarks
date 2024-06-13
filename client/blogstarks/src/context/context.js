import React from "react";
import { useState,useEffect } from "react";

const AppContext = React.createContext();



function AppProvider({children}){
    const [loggedin,setLoggedIn] = useState(false)
    const [blogs,setBlogs] = useState([])
    const [user,setUser] = useState([])

    // if(loggedin){
    //     callBlogs()
    // }

    const login = (newUser) => {
        setUser(newUser)
        setLoggedIn(true)
        callBlogs()
        

    }

    const logout = () => {

        setLoggedIn(false)
        setUser({})



    }

      const signup = (data) => {
        setUser(data)
        setLoggedIn(true)
        callBlogs()

    }

    useEffect(()=>{
        fetch("/api/me") 
        .then (response => response.json())
        .then( data=> {
            if (!data.errors) 
            { setUser(data);
              callBlogs()
            
            }
            else{
                
                console.log(data)
            }
        }
        )
        
    },[])

    



function callBlogs(){
    fetch("/api/blogs")
    .then(res=> res.json())
    .then(data=> {
        console.log(data)
        if(!data.message){
             setBlogs(data)
        }
        else{
            return (
                <div>
                  {data.message}
                </div>) 
        }
    })

    
}





    
return (
    <AppContext.Provider value={{setLoggedIn,loggedin,signup,setBlogs, blogs,login}}>
             {children}
    
    </AppContext.Provider>)


}


export { AppContext, AppProvider };