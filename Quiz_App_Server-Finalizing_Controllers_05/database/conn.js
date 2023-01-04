import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect('mongodb+srv://sparsh:sparsh123@cluster0.b9egr1y.mongodb.net/?retryWrites=true&w=majority')
    console.log("Database Connected")
}