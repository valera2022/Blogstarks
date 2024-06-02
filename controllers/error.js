import { error } from "console"

  export const globalError = (err,req,res,next)=>{
       error.statusCode = error.statusCode || 500
       error.status = error.status || "server error"
       res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
       })

  }