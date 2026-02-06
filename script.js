const API_URL = "http://localhost:5000/api/expenses";

const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

fetchExpenses();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const expense = {
    title: title.value,
    amount: parseInt(amount.value),
    category: category.value,
    date: date.value,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });

  form.reset();
  fetchExpenses();
});

async function fetchExpenses() {
  const res = await fetch(API_URL);
  const expenses = await res.json();

  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach((exp) => {
    total += exp.amount;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${exp.title}</td>
      <td>${exp.amount}</td>
      <td>${exp.category}</td>
      <td>${exp.date}</td>
      <td>
        <button onclick="deleteExpense('${exp._id}')">Delete</button>
      </td>
    `;
    expenseList.appendChild(row);
  });

  totalDisplay.innerText = total;
}

async function deleteExpense(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchExpenses();
}
