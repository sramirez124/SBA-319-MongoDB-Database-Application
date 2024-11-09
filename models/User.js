import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: 5,
        naxLength: 20,
    },
    username: {
        type: String,
        minLength: 5,
        required: [true, "Please enter a username"],
    },
    posts: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
})

// Defining Indexes
userSchema.index({ username: 1 })

// Definig custom instance methods
// userSchema.methods.sayHello = function() {
//     return `Hello ${this.name}!`
// }

// Defining Static Model Methods
userSchema.statics.getByUsername = async function(username) {
    return this.findOne({ username: username })
}


export default model('User', userSchema)