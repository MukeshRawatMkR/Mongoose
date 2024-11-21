const express = require('express');
const connectDB = require('./config/db');
const User = require('./models/user.js');
const app = express();
app.use(express.json());

//Adding a User into the DB
app.post("/signup", async (req, res) => {
    const user =new User( req.body);
    try {
        await user.save();
        res.send("User Successfully added");
    } catch (err) {
        // console.log(err);
        res.status(500).send("can't add, req failed!");
    }
});

//getting the user by emailID from the DB
// app.get()


connectDB().then(() => {
    console.log("Connected To DB");

    app.listen(3000, () => {

        console.log("Server is available to take the request...");
    });
})
    .catch((err) => {
        console.error("Some error occurred, can't be connected to DB");
    });
