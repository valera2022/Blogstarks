import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

//get all blogs
export const getBlogs= async (req,res)=>{
    //find all blogs
    const blogs = await prisma.blog.findMany()
    //send blogs
    res.json({blogs})
}

export const getUserBlogs= async (req,res) =>{
    const user = await prisma.user.findUnique({
        where:{
            id: req.user.id
        },
        include: {blogs: true}
    })

    res.json({data: user.blogs})
}


export const createBlog= async(req,res)=>{
    const blog = await prisma.blog.create({
        data:{
            title: req.body.title,
            img: req.body.img,
            content: req.body.content,
            belongToId: req.user.id

        }

        
    })
    res.json({data: blog})
}

export const updateBlog = async (req,res)=>{
    const updated = await prisma.blog.update({
        where:{
            id_belongsToId:{
                belongToId: req.user.id,
                id: req.params.id
            },
            data:{
                title: req.body.title,
                content: req.body.content,
                img: req.body.img
            }
            
        }
        
    })
    res.json({data: updated})
}

export const deleteBlog = async(req,res)=>{
      const deleted =  await prisma.blog.delete({
        where:{
            id_belongsToId:{
                belongToId: req.user.id,
                id:req.params.id
            }
        }
      })
}