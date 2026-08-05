const express=require('express')

const app=express()


app.get('/',(req,res)=>{
   return res.json({success:true,message:"Order Route v1000000000000"})
})

app.listen(8001,(req,res)=>{
    console.log("Order Server File")
})