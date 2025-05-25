import express from "express"


const app = express()


app.get("/" , (req, res) =>{
    res.send("Multi stage docker file")
})



app.listen(3002, () =>{
    console.log("server is running at http://localhost:3002")
})