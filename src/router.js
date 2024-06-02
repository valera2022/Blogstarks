import Router from "express"
import {body} from "express-validator"
import { validationErrors } from "../prisma/utils/validationErrors.js"
import { rmSync } from "fs"
import { createBlog, deleteBlog, getBlogs, updateBlog } from "../controllers/blog.js"
import { postBlogValidation } from "../prisma/utils/validations.js"

const router = Router()

router.get("/blogs", getBlogs,(req,res)=>{})



router.post("/blogs",
postBlogValidation,
validationErrors,
createBlog,
(req, res )=>{
    console.log("created a Blog")
    console.table(req.body)
})

router.delete("/blogs/:id",deleteBlog,(req,res)=>{})

router.patch("/blogs/:id",updateBlog,(req,res)=>{})


export default router


