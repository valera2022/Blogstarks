 import  express from  "express"
// const express = require("express")
import cors  from "cors"

const app = express()



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.listen( 4000)