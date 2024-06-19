
import React, { useContext } from 'react'
import { useState } from 'react'
import { AppContext } from '../context/context'
import "./createblog.css"
import { useNavigate } from 'react-router-dom'

 function CreateBlog() {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [img,setImg] = useState("")
    const {setBlogs, blogs} = useContext(AppContext)

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        let formData={
            title: title,
            content: content,
            img:img
        }
        console.log(formData)

        fetch(`/api/blogs`,{
            method: "POST",
            headers:{"Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data=> {
            if(!data.errors){
                setBlogs([...blogs, data])
                console.log(data)
                console.log(blogs)
                navigate("/")

            }
            else{
                {data.errors.map((error)=>{
                    return <li>{error}</li>
                })}
            }
        })

    }
  return (
    <div className='createBlog-container'> 
        <form onSubmit={handleSubmit}>
            <input  className="input-field" type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input className="input-field" type="text" placeholder='content' value={content} onChange={(e)=> setContent(e.target.value)}/>
            <input className="input-field" placeholder='image' value={img} onChange={(e)=> setImg(e.target.value)}/>
            <br></br>
            <button className="sub-button"  type="submit"> Submit</button>
        </form>
       </div>
  )
}


export default CreateBlog
