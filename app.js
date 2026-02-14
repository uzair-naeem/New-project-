
// Get DOM elements
const budgetInput = document.getElementById('budget-input');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const setBudgetButton = document.getElementById('set-budget');
const checkAmountButton = document.getElementById('check-amount');
const totalBudget = document.getElementById('total-budget');
const expensesTotal = document.getElementById('expenses-total');
const balance = document.getElementById('balance');

// Set initial values
let totalBudgetValue = 8000;
let expensesValue = 6500;
let balanceValue = totalBudgetValue - expensesValue;

// Function to update the summary
function updateSummary() {
    totalBudget.textContent = totalBudgetValue;
    expensesTotal.textContent = expensesValue;
    balance.textContent = balanceValue;
}

// Handle budget setting
setBudgetButton.addEventListener('click', () => {
    totalBudgetValue = parseInt(budgetInput.value, 10);
    balanceValue = totalBudgetValue - expensesValue;
    updateSummary();
});

// Handle expense checking
checkAmountButton.addEventListener('click', () => {
    const expenseAmount = parseInt(amountInput.value, 10);
    expensesValue += expenseAmount;
    balanceValue = totalBudgetValue - expensesValue;
    updateSummary();
});

