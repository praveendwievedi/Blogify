const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
const path=require('path')

app.use(express.static(path.join(__dirname,'public')));
app.use('view engine','ejs')
const port=process.env.PORT ? process.env.PORT : 3000;


app.get('/',(req,res)=>{
 res.render('home')
})

app.listen(port,()=>console.log(`server running on port: ${port}`))