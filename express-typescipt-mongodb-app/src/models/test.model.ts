import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const testSchema2 = new mongoose.Schema({
    name: String,
    age: Number
})


export const TestModel = mongoose.model("Test", testSchema);    