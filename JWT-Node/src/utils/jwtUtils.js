const jwt = require("jsonwebtoken");
const { secretKey } = require("../confirguration/jwtConfig");

function generateToken(user) {
    console.log("Secret Key:", secretKey);
    console.log("Type of Secret Key:", typeof secretKey);
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });

};

module.exports = {
    generateToken
};