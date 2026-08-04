require("dotenv").config();
const Food = require('../models/food');
const {foods} = require('./data');
const mongoose = require("mongoose");


main()
.then(()=>{
    console.log("mongodb is connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOURI);
}



const adddata = async ()=>{
    await Food.deleteMany({});
    await Food.insertMany(foods);
    console.log("data inserted successfully")
}

adddata();