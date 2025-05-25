import dotenv from 'dotenv'
dotenv.config()
import express from "express"


const PORT = process.env.PORT || 3001
const app = express()


app.get("/", (req, res)=>{
    res.status(200).send("hello world")
})


app.listen(PORT, () => {
    console.log(`server is running at http://3000/`)
})
