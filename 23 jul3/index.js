const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("hello from express js");
})

app.get("/home",(req,res)=>{
    res.send("hello from home page");
})

app.listen(2000,()=>{
    console.log("server is listening http://localhost:2000");
})