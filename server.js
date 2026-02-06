const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const expenseRoutes = require("./expenseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
connectDB();

// Routes
app.use(expenseRoutes);

// Serve frontend files
app.use(express.static(__dirname));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
