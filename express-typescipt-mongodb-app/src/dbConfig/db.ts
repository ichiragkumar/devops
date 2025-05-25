import mongoose from "mongoose";



export const connectToDB = async () => {
    try{

        const DB_URI = process.env.MONGODB_URI;
        if(!DB_URI){
            throw new Error("No MongoDB URI found");
        }

        await mongoose.connect(DB_URI);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("failed to connect to db");
    }
}