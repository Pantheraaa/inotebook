import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbLink = process.env.DB_LINK;

const connectDB = async () => {
    mongoose.connect(dbLink, (err) => {
        if (err)
            throw err;
        
        console.log("Connected to Database")
    });
}

export default connectDB;