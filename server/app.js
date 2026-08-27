require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Food = require('./models/food');
const User = require('./models/user');
const foods = require("./routes/food");
const users = require("./routes/auth");
const cart = require("./routes/cart");
const orders = require("./routes/order");
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
app.use("/",users);
app.use("/",cart);
app.use("/",orders)



app.get("/",(req,res)=>{
    res.send("this is home route");
})




app.listen(8080,()=>{
    console.log("app is listening..");
})