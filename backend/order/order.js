const express=require('express')

const app=express()


app.get('/',(req,res)=>{
   return res.json({success:true,message:"Order Route"})
})

app.listen(8001,(req,res)=>{
    console.log("Order Server File")
})