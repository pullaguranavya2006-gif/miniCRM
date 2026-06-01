const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Error:", err));

// Schema
const leadSchema = new mongoose.Schema({
    name: String,
    email: String,
    source: String,
    status: String,
    notes: String
});

const Lead = mongoose.model("Lead", leadSchema);

// GET all leads
app.get("/api/leads", async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST add lead
app.post("/api/leads", async (req, res) => {
    try {
        const lead = await Lead.create(req.body);
        res.json(lead);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE lead
app.delete("/api/leads/:id", async (req, res) => {
    try {
        await Lead.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE lead
app.put("/api/leads/:id", async (req, res) => {
    try {
        const updated = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});