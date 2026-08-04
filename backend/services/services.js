const express=require('express')

const app=express()

app.get('/',(req,res)=>{
   return res.json({success:true,message:"Service Route"})
})

app.listen(8002,(req,res)=>{
    console.log("Service Server File")
})