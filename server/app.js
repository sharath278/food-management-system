require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Food = require('./models/food');
const foods = require("./routes/food");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());  


main()
.then(()=>{
    console.log("mongodb is connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOURI);
}




app.use("/",foods);



app.get("/",(req,res)=>{
    res.send("this is home route");
})




app.listen(8080,()=>{
    console.log("app is listening..");
})