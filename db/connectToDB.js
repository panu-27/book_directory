const mongoose = require('mongoose');
require('dotenv').config(); 


const MONGODB_URI = process.env.MONGODB_URI ;

const connectToDB = async()=>{
    await mongoose.connect(MONGODB_URI);
    console.log("databse connected successfully");
}

module.exports = connectToDB ;