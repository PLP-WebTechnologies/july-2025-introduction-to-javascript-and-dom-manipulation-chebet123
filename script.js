// Variables, data types, and conditionals
let userName = "Alice";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult ✅");
} else {
  console.log(userName + " is not an adult ❌");
}

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Function 2: Format greeting message
function formatGreeting(name) {
  return `Welcome, ${name}! 🎉`;
}

// Example usage in console:
console.log(calculateTotal(100, 0.2));
console.log(formatGreeting("Charlie"));

// Loop 1: for loop (countdown)
function countdown(start) {
  for (let i = start; i >= 0; i--) {
    console.log(i);
  }
}

// Loop 2: forEach loop over an array
let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];
fruits.forEach(fruit => console.log(fruit));

// DOM Manipulation

// 1. Update content dynamically
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = prompt("Enter your age:");
  if (age >= 18) {
    document.getElementById("greeting").innerText = "You are an adult ✅";
  } else {
    document.getElementById("greeting").innerText = "You are not an adult ❌";
  }
});

// 2. Use function to calculate and display result
document.getElementById("calculateBtn").addEventListener("click", function() {
  let price = parseFloat(prompt("Enter price:"));
  let tax = 0.15;
  let total = calculateTotal(price, tax);
  document.getElementById("greeting").innerText = `Total with tax: $${total.toFixed(2)}`;
});

// 3. Toggle a class (dark mode)
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// 4. Countdown displayed in list (using loops)
document.getElementById("countdownBtn").addEventListener("click", function() {
  let list = document.getElementById("list");
  list.innerHTML = ""; // Clear old items
  for (let i = 5; i >= 0; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
});
