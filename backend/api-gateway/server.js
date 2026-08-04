
require('dotenv').config()
const { createProxyMiddleware } = require("http-proxy-middleware");
const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors({origin: "*"}));


app.use("/order",createProxyMiddleware({target: process.env.ORDER,changeOrigin: true,}));

app.use("/services",createProxyMiddleware({target: process.env.SERVICE,changeOrigin: true,}));


app.get('/',(req,res)=>{
   return res.json({success:true,message:"Home Routee"})
})

app.listen(8000,(req,res)=>{
    console.log("Main Server File")
})