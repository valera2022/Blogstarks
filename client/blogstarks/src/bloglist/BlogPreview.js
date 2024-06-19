import React from 'react'
import './bloglist.css'
import { Link } from 'react-router-dom'
export default function BlogPreview({blog}) {
    console.log(blog)
    let im = blog.img
  return (
 <div> 
    <img  alt='picture' src={im} />
    <Link to={`/blogs/${blog.id}`}>   <h1>{blog.title}</h1></Link>
 
    <p>{blog.content}</p>
</div>
  )
}
