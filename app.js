const express = require('express');
const connectToDB = require('./db/connectToDB')

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

app.get('/' , (req , res)=>{
    return res.json("Hellow World");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, async() => {
    await connectToDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
