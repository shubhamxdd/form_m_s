const mongoose = require('mongoose');
const User = require("./User")


const userSchema = new mongoose.Schema({
    name: {
        fName: String,
        lName: String
    },
    age: Number,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    friend: mongoose.SchemaTypes.ObjectId,
    address: {
        street: String,
        city: String,
        pincode: Number
    }
})

module.exports = mongoose.model("User", userSchema);