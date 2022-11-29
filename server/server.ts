import express from "express"

const app=express()




app.use(express.json())
app.use(express.urlencoded({extended:true}))







app.listen(2900,()=>{
    console.log("server is running on port 2900")
})