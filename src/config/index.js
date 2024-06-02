import merge  from "lodash.merge";
import  local from "./local.js"
import testing from "./testing.js"
import production from "./prod.js"

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage  = process.env.STAGE || 'local'


let envConfig

if(stage === "production"){
     envConfig = production 
}
 else if (stage === 'testing'){
    envConfig = testing

 }
 else envConfig = local

 export default merge({
    stage,
    env: process.env.NODE_ENV,
    port: 4000,
    secrets:{
        jwt: process.env.JWT_SECRET,
        dbUrl: process.env.DATABASE_URL
    }

 },envConfig)