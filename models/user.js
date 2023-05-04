import {mongoose, Schema} from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: [true, "Please enter a user name"]},
    surname: {type: String, required: [true, "Please enter a user surname"]},
    age: {type: Number, required: [true, "Please enter a user age"]}
})

export const User = mongoose.model('User', userSchema);