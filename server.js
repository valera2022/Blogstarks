const express = require("express")
const app = express()

const computers = {
    computers:[
    "mac","lenovo","hp","dell","msi"
]}

app.get("/computers", (req,res)=>{

    res.json(computers)
    res.end()



})


app.listen( 4000)