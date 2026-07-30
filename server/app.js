require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");


const app = express();


main()
.then(()=>{
    console.log("mongodb is connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOURI);
}

app.get("/",(req,res)=>{
    res.send("this is home route");
})


app.listen(8080,()=>{
    console.log("app is listening..");
})