//User.js
//Pull in our required dependencies
//Create a Schema to represent a User, defining fields and types as objects of the Schema 
//Export the model so we can access it outside of this file

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserSchema);