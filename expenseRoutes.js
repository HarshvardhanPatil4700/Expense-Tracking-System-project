const express = require("express");
const Expense = require("./Expense");

const router = express.Router();

// Get all expenses
router.get("/api/expenses", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// Add expense
router.post("/api/expenses", async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.json(expense);
});

// Delete expense
router.delete("/api/expenses/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

module.exports = router;
