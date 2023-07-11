const express=require('express')
const path= require('path')
const app=express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'))
})

app.get('/student',(req,res)=>
{
    res.sendFile(path.join(__dirname,'student.html'))
})

app.get('/course',(req,res)=>{
    res.sendFile(path.join(__dirname,'course.html'))
})

app.listen(3000,()=>{console.log("port is running on 3000")})