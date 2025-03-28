const User = require("../models/user");
const bcrypt = require("bcrypt");

async function createAdminAccount() {
    try {
        const existingAdmin = await User.findOne({ email:"admin@2128.com"});
        if (!existingAdmin){
            const newAdmin = new User({
                email: "admin@2128.com",
                name: "Admin",
                password: await bcrypt.hash("admin", 10),
                role: "admin"
            })
            await newAdmin. save();
            console.log("Admin account created successfully");
        } else {
            console.log("Admin already exist");
        }
    } catch (error) {
        console.error(error.message);
    }
}


module.exports = createAdminAccount;