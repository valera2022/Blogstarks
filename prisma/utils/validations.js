import { body } from "express-validator"

 export const postBlogValidation = [
    body("title").exists({checkFalsy: true}),
    body("content").exists({checkFalsy: true}),
    body("img").exists({checkFalsy: true})

]

export const signupValidation = [
    body("password").isLength({min: 6}).exists({checkFalsy: true}),
    body("username").exists({checkFalsy: true})
]

export const LoginValidation = [
    body("password").isLength({min: 6}).exists({checkFalsy: true}),
    body("username").exists({checkFalsy: true})
    
]