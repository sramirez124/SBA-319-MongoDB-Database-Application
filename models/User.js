import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    message: "Email is required."
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 20,
  },
  username: {
    type: String,
    required: true
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
})

// Defining Indexes
userSchema.index({ username: 1 })


// Defining Static model method
userSchema.statics.getByUsername = async function (input) {
  return await this.findOne({username: input})
}



export default model("User", userSchema)