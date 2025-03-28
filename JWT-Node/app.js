const express = require("express");
const signupRoute = require("./src/routes/signup");
const loginRoute = require("./src/routes/login");
const userRoute = require("./src/routes/user");
const bodyParser = require("body-parser");
const cors = require("cors");
const createAdminAccount = require("./src/scripts/admin");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://aditya444garg:zYsHyKLF8rBkbmrQ@farmsense-prototype.8yh6eru.mongodb.net/?retryWrites=true&w=majority&appName=farmsense-prototype"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

createAdminAccount();

// Routes
app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/api", userRoute);

// ✅ Remove app.listen() for Vercel
module.exports = app;
