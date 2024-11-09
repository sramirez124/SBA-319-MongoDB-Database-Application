import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: Number,
    userID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export default model("Post", postSchema);