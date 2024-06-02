import validationResult from "express-validator"

export const validationErrors = (req,res,next)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        res.status(400);
        res.json({errors: errors.array()})
     

    }
    else{
           next()

    }

}