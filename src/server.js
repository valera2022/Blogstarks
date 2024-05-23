 import  express from  "express"

import cors  from "cors"
import router from "./router.js"
import * as dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { verifyToken } from "../prisma/utils/auth.js"
import { signUp } from "../controllers/user.js"

dotenv.config()

const app = express()


app
app.use(cors({origin: true, credentials: true}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())



app.use("/api",verifyToken, router)
app.post("/signup", signUp)

app.listen( 4000,()=>{
    console.log("listening on port 4000")
})





export default app