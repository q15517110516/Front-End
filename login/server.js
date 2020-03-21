//server.js 
//Pull in our required dependencies (namely 'express', 'mongoose' and 'bodyParser')
//Initialize our app using 'express()'
//Apply the middleware function for 'bodyparser' so we can use it
//Pull in our 'MongoURI' from our 'keys.js' file and connect to our MongoDB database
//Set the 'port' for our server to run on and have our app listen on this port

const express = require("express");
const mongoose = require("mongoose"); // used to interact with MongoDB
const bodyParser = require("body-parser"); //used to parse incoming request bodies in a middleware
const passport = require("passport"); //used to authenticate requests, which it does through an extensible set of plugin known as 'strategies'

const users = require("./routes/api/users");
const app = express(); //Initialize app

//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended:false
    })
);
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
    .connect(
        db,
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; //process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));