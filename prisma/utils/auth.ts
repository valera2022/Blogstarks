import jwt from "jsonwebtoken"

export const createToken= (user)=>{
    const token = jwt.sign({
        id: user.id,
        username: user.username
    }, process.env.MY_SECRET)

    return token
    

}

export const verifyToken= (req,res,next)=>{
    const token = req.cookies.token

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