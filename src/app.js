const express = require('express');
const connectDB = require('./config/db');
const User = require('./models/user.js');
const app = express();
app.use(express.json());

//Adding a User into the DB
app.post("/signup", async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send("User Successfully added");
    } catch (err) {
        // console.log(err);
        res.status(500).send("can't add, req failed!");
    }
});

//getting the user by emailID from the DB
app.get('/user', async (req, res) => {
    const userEmail = req.body.email;
    try {
        const totalUser = await User.find({ email: userEmail });
        if (totalUser.length === 0) { res.status(400).send("Sorry not available in our DB"); }
        else {
            res.send("About User: \n" + totalUser);
        }
    } catch (err) {
        res.status(400).send("Can't be fetched from the DB");
    }
});

//Getting all the users from the DB
app.get('/users', async (req, res) => {
    try {
        const totalUsers = await User.find({});
        res.send("All the users from the DB are printed: \n" + totalUsers.length);
    } catch (err) {
        res.status(400).send("Can't be fetched from the DB");
    }
});


//Deleting a user in our DB
app.delete('/delete', async (req, res) => {
    const userId=req.body._id;
    try {
        const totalUsers = await User.findByIdAndDelete(userId);
        res.send("User removed from our DB");
    } catch (err) {
        res.status(400).send("Can't be fetched from the DB");
    }
});


//updating our user info in our DB
app.patch('/updateUser', async(req, res)=>{
const userId=req.body._id;
const updatedData=req.body;
try{
const user=await User.findByIdAndUpdate({_id:userId}, updatedData);
res.send("User data updated successfully!");
}catch(err){
    res.status(400).send("Sorry, can't be updated!");
}
});


connectDB().then(() => {
    console.log("Connected To DB");

    app.listen(3000, () => {

        console.log("Server is available to take the request...");
    });
})
    .catch((err) => {
        console.error("Some error occurred, can't be connected to DB");
    });
