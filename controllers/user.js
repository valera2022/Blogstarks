import { PrismaClient } from "@prisma/client";
import { comparePassword, createToken, hashPassword } from "../prisma/utils/auth.js";
// const { PrismaClient } = require('@prisma/client')

// use `prisma` in your application to read and write data in your DB


const prisma = new PrismaClient()


export const signUp =  async (req,res)=>{
    res.json({message:"signuo"})
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
    res.cookie = ("token",token,{
        httpOnly: true,
        sameSite: "None",
        secure: "false"
    })
    // res
    // .writeHead(200, {
    //   "Set-Cookie": "token=encryptedstring; HttpOnly",
    //   "Access-Control-Allow-Credentials": "true"
    // })
    // .send();
   

}

export const logIn = async(req,res)=>{
    const user = await prisma.user.findUnique({
        where:{
            username: req.body.username
        }
    })

    const validUser = await comparePassword(req.body.password, user.password)

    if(!valid){
        res.status(401)
        res.json({message: "not aauth"})
        return
    }


    const token = createToken(user)
    res.cookie =  {token}
    res.end()



}