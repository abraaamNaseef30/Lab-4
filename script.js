// 1. Welcome alert
alert("Welcome to the store!");

// Items the store sells
var menu = ["pizza", "chicken", "oranges"];

// 2. Prompts
var name = prompt("What is your name?");

var item = prompt("What item would you like to order? (pizza, chicken, oranges)");

// Error if the item is not in the list, then ask again
while (menu.indexOf(item.toLowerCase().trim()) === -1) {
  alert("Error: '" + item + "' is not available. Please choose pizza, chicken, or oranges.");
  item = prompt("What item would you like to order? (pizza, chicken, oranges)");
}

var quantity = parseInt(prompt("How many would you like? (1-99)"));

while (isNaN(quantity) || quantity < 1 || quantity > 99) {
  alert("Error: quantity must be a number between 1 and 99.");
  quantity = parseInt(prompt("How many would you like? (1-99)"));
}

// 3. Time-based greeting
var now = new Date();
var hour = now.getHours();
var greeting;

if (hour < 12) {
  greeting = "Good Morning";
} else if (hour < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

// 5. Arrival date (7 days later)
var arrival = new Date();
arrival.setDate(now.getDate() + 7);

// 4. Show everything on the page
document.getElementById("greeting").innerHTML = greeting + " " + name + ", Thank you for Ordering!";
document.getElementById("name").innerHTML = "Name: " + name;
document.getElementById("item").innerHTML = "Item: " + item;
document.getElementById("quantity").innerHTML = "Quantity: " + quantity;
document.getElementById("arrival").innerHTML = "Expected arrival: " + arrival.toDateString();