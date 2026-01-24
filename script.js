// Load expenses from localStorage
var expenses = JSON.parse(localStorage.getItem("expenses"));
if (expenses === null) {
  expenses = [];
}

var form = document.getElementById("expenseForm");
var expenseList = document.getElementById("expenseList");
var totalDisplay = document.getElementById("total");

// Show existing expenses on load
showExpenses();

// Add expense
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var title = document.getElementById("title").value;
  var amount = parseInt(document.getElementById("amount").value);
  var category = document.getElementById("category").value;
  var date = document.getElementById("date").value;

  var expense = {
    title: title,
    amount: amount,
    category: category,
    date: date,
  };

  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  form.reset();
  showExpenses();
});

// Display expenses
function showExpenses() {
  expenseList.innerHTML = "";
  var total = 0;

  for (var i = 0; i < expenses.length; i++) {
    total = total + expenses[i].amount;

    var row = document.createElement("tr");
    row.innerHTML =
      "<td>" +
      expenses[i].title +
      "</td>" +
      "<td>" +
      expenses[i].amount +
      "</td>" +
      "<td>" +
      expenses[i].category +
      "</td>" +
      "<td>" +
      expenses[i].date +
      "</td>" +
      "<td><button onclick='deleteExpense(" +
      i +
      ")'>Delete</button></td>";

    expenseList.appendChild(row);
  }

  totalDisplay.innerText = total;
}

// Delete expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  showExpenses();
}
