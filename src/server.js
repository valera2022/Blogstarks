 import  express from  "express"

import cors  from "cors"
import router from "./router.js"
import * as dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { verifyToken } from "../prisma/utils/auth.js"
import { signUp } from "../controllers/user.js"
// import CustomError from "../prisma/utils/customError.js"

import { globalError } from "../controllers/error.js"
import { validationErrors } from "../prisma/utils/validationErrors.js"
import { signupValidation } from "../prisma/utils/validations.js"
import config from "./config/index.js"

dotenv.config()

const app = express()


app
app.use(cors({origin: true, credentials: true}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())



app.use("/api",verifyToken, router)

app.post("/signup",
signupValidation,
validationErrors,
signUp)
// app.all("*", (req,res,next)=>{
//     // const err = new CustomError(`Can not find Route${req.originalUrl}`, 404)
//     // next(err)
// })

// app.use(globalError);

app.listen( config.port,()=>{
    console.log(`listening on port ${config.port}`)
})





export default app