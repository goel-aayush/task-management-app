const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://mgoel1296:VhqerKdvw2B1AyXO@cluster0.npxbqk8.mongodb.net/?retryWrites=true&w=majority";
const mongodb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
        // const task = await mongoose.connection.collection("properties").find({}).toArray();
        // Store fetched data in global variables
        // global.tasks = task;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

module.exports = mongodb;
