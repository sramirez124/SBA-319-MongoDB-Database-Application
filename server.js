import express from "express";
import mongoose, { deleteModel } from "mongoose";
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to db
await mongoose.connect(process.env.ATLAS_URI);
console.log("Connected to Mongo!");


// Models Import
import User from "./models/User.js";
import Post from "./models/Post.js";
// import Comment from "./models/Comment.js";

// Body Parser
app.use(express.json());

app.get('/', (req, res) => {
        res.send('Its working!')
})

app.get("/users", async(req, res) => {
        try {
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) {
            res.send(error).status(400);
        }
 });
    
 // Get by ID
app.get("/users/:id", async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.send(error).status(400);
        }
});
    
// Create New User
 app.post("/users", async (req, res) => {
        try {
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
        } catch (error) {
            res.send(error).status(400);
        }
});

// Create New Post
app.post("/post/:id", async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                res.status(404).json({ message: "User not found" });
            }
            const post = Post(req.body);
            post.userID = user._id;
    
            user.posts.push(post._id);
    
            await user.save();
            await post.save();
    
            res.status(201).json(post);
        } catch (error) {
            res.send(error).status(400);
        }
    });

app.delete("/users/:id", async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.send(error).status(400);
        }
})
    
app.listen(PORT, () => {
        console.log(`Matrix is running on port: ${PORT}`)
})