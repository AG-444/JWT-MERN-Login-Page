const express = require("express");
const userController = require("../controllers/user");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();

router.get("/user", authMiddleware.authenticateToken, userController.getUserById);

module.exports = router;
