import { PrismaClient } from "@prisma/client";
import { comparePassword, createToken, hashPassword } from "../prisma/utils/auth.js";
// const { PrismaClient } = require('@prisma/client')

// use `prisma` in your application to read and write data in your DB


const prisma = new PrismaClient()


export const signUp =  async (req,res)=>{

//    let pssObject =  hashPassword(req.body.password)
//    let pss = `${pssObject}`
    const user = await prisma.user.create({
      
        data:{
            username: req.body.username,
            picture: req.body.picture,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createToken(user)
    console.log(token)
    const { password, ...sanitizedUser } = user;
    res.json({token, sanitizedUser})
    // res.cookie = ("token",token,{
    //     maxAge: 900000,
    //     httpOnly: true,
    //     sameSite: "None",
    //     secure: "false"
    // })
  
 
   

}

export const logIn = async(req,res)=>{
    const user = await prisma.user.findUnique({
        where:{
            username: req.body.username
        }
    })

    const validUser = await comparePassword(req.body.password, user.password)

    if(!validUser){
        res.status(401)
        res.json({message: "Wrong credentials"})
        return
    }

    const token = createToken(user)
    const { password, ...sanitizedUser } = user;
    res.json({token, sanitizedUser}) 
  



}