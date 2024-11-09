import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        naxLength: 20,
    },
    username: {
        type: String,
        required: true
    },
    posts: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
})

// Defining Indexes
userSchema.index({ username: 1 })

// Definig custom instance methods
userSchema.methods.sayHello = function() {
    return `Hello ${this.name}!`
}

// Defining Static Model Methods
userSchema.statics.getByUsername = async function(username) {
    return this.findOne({ username: username })
}

userSchema.virtual("yellName").get(function() {
    return this.name.toUpperCase() + "!!!"
})

export default model('User', userSchema)