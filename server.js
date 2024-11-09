import express from "express";
import mongoose, { deleteModel } from "mongoose";
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to db
await mongoose.connect(process.env.ATLAS_URI);
console.log("Connected to Mongo!");

import User from "./models/User.js";
import Post from "./models/Post.js";
// import Comment from "./models/Comment.js";

// Body Parser
app.use(express.json());

app.get('/', (req, res) => {
        res.send('Its working!')
})
    
app.listen(PORT, () => {
        console.log(`Matrix is running on port: ${PORT}`)
})