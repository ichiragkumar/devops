import express from 'express';


const app = express();



app.get("/", (req , res)=>{

    const NODE_ENV = process.env.NODE_ENV;
    if(!NODE_ENV){
        res.send("NODE_ENV is not set")
    }

    res.send(`hello from i am express app typescript ${NODE_ENV}`)


})


app.listen(3005 , ()=>{
    console.log(`server is running on port 3005`)
})