import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
// import { hash } from "crypto"

export const createToken= (user)=>{
    const token = jwt.sign({
        id: user.id,
        username: user.username
    }, process.env.MY_SECRET)

    return token
    

}

export const verifyToken= (req,res,next)=>{
    const token = req.cookies.token

    if(!token){
        res.status(401)
        res.json({message: "not authorized"})

    }

    try {
        const user = jwt.verify(token,
            process.env.MY_SECRET)
        
            req.user = user
            next()
    }

    catch(error){
        res.status(401)
        res.clearCookie("token")
        res.json({message: "sorry my man don't hack us"})
        return
    }

 

}

export const hashPassword = (password)=>{
    return bcrypt.hash(password, 5)
        

}

export const comparePassword = (password,hash)=>{
          return bcrypt.compare(password,hash)
}