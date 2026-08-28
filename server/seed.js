const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const User = require("./models/user");

const seedAdmin = async () => {

    try {

        await mongoose.connect(process.env.MONGOURI);

        const existingAdmin = await User.findOne({
            email: "admin@gmail.com"
        });

        if (existingAdmin) {

            console.log("Admin already exists");

            await mongoose.connection.close();

            return;
        }

        const hashedPassword = await bcrypt.hash(
            "admin123",
            10
        );

        const admin = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashedPassword,
            role: "admin"
        });

        await admin.save();

        console.log("Admin created successfully");
        console.log("Email: admin@gmail.com");
        console.log("Password: admin123");

        await mongoose.connection.close();

    } catch (error) {

        console.log(error);

        await mongoose.connection.close();

    }
};

seedAdmin();