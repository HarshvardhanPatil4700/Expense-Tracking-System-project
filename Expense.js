const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: String,
    amount: Number,
    category: String,
    date: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Expense", expenseSchema);
