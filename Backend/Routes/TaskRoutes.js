require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const NodeCache = require('node-cache');

const mongoURI = process.env.MONGO_URI;
const cache = new NodeCache({ stdTTL: 300 }); // Cache TTL (time-to-live) in seconds

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

const fetchTasksFromDB = async () => {
    await connectDB();
    return await mongoose.connection.collection("properties").find({}).toArray();
};

const getTasks = async () => {
    let tasks = cache.get("tasks");
    if (!tasks) {
        tasks = await fetchTasksFromDB();
        cache.set("tasks", tasks);
    }
    return tasks;
};

router.post('/TaskRoutes', async (req, res) => {
    try {
        const tasks = await getTasks();
        res.json({ Task_Routes: tasks });
    } catch (error) {
        console.error("Error in /TaskRoutes route:", error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
