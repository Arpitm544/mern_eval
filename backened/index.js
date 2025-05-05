const express=require('express')
const route = require('./router/recipes_router')
const mongoose=require('./dp/connnection')
const app=express()
app.use(express.json())
const cors=require('cors')
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PATCH','DELETE'],
    credentials:true
}))

app.use('/recipes',route)

app.listen(8000,()=>{
   console.log("Server is running ")
})