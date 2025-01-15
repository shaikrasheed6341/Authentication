import express from "express";
import mongoose from "mongoose";
 // Corrected to lowercase 'crypto' for the Node.js built-in module

import router from "./src/routes/user.route.js";
import cors from "cors";

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use("/api/user", router);

// MongoDB Connection and Server Start
const start = async () => {
    try {
        const url = "mongodb+srv://shaikrasheed6341:8mofLLCyf3OlVK97@cluster0.rqhas.mongodb.net/";

        ;
        await mongoose.connect(url);
        console.log(`Database successfully connected`);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error(`Failed to start the server: ${error.message}`);
        process.exit(1); // Exit the process if the server cannot start
    }
};

start();
