const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://mukeshrawatmkr:fwded6bmlG8RQ2Qf@cluster0testing.lgzkt.mongodb.net/DevDumps");
};

module.exports=connectDB;
/* ~ 6 = % `  + ^ | _*/
