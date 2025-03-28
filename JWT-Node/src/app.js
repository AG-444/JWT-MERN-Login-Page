const express = require("express");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const createAdminAccount = require("./scripts/admin");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors(
    {
        origin: ["https://deploy-mern-1whq.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

mongoose.connect('mongodb+srv://aditya444garg:zYsHyKLF8rBkbmrQ@farmsense-prototype.8yh6eru.mongodb.net/?retryWrites=true&w=majority&appName=farmsense-prototype')

createAdminAccount();

app.use("/user",signupRoute);
app.use("/auth",loginRoute);
app.use("/api",userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})