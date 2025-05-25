import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectToDB } from "./dbConfig/db";
import { TestModel } from "./models/test.model";


const app = express();
const PORT = process.env.PORT || 3002;


connectToDB();
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World");
})


app.post("/add", (req, res) =>{
    const { name, age } = req.body;
    const newTest = new TestModel({ name, age });
    newTest.save();

    res.send("Test added to DB");
})

app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})  