const User = require("../models/user");

async function getUserById(req, res) {
    try {
        const userId = req.user.id; // Extract user ID from decoded token
        const user = await User.findById(userId).select("-password"); // Exclude password
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { getUserById };
