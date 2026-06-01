const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err);
});

// Routes
app.use("/api/leads", require("./routes/leadRoutes"));

// DEFAULT ROUTE (IMPORTANT FOR RENDER TEST)
app.get("/", (req, res) => {
    res.send("MiniCRM Backend is Running 🚀");
});

// PORT FIX (VERY IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});