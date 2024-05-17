 import  express from  "express"

import cors  from "cors"
import router from "./router.js"
import * as dotenv from "dotenv"

dotenv.config()

const app = express()


app.chicken
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", router)


app.listen( 4000)

export default app