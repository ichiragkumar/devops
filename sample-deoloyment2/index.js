const express = require("express")



const app = express()

app.get("/", (req, res)=>{
    res.send('hello from sample app  deployment')
})


app.listen(3000, ()=>{
    console.log("server is running at 3000")
})