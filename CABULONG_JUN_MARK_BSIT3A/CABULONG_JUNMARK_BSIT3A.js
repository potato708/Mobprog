
let cafeName = "Morning Brew";
let branch = "Downtown";
let openingTime = "8:00 AM";
let closingTime = "8:00 PM";

let customers = ["Lee", "Sean", "Enaro"];

let coffee = {
    name: "Iced Coffee",
    price: 80,
    size: "Medium",
    quantity: 2
};

let food = {
    name: "Club Sandwich",
    price: 120
};

let dessert = "Chocolate Cake";
let cashier = "Mia";

const tax = 0.12;
const serviceFee = 20;
const currency = "PHP";

console.log("===== MORNING BREW =====");
console.log("Cafe: " + cafeName);
console.log("Branch: " + branch);
console.log("Open: " + openingTime + " - " + closingTime);

console.log("\n===== CUSTOMERS =====");

for (let customer of customers) {
    console.log("- " + customer);
}

const welcome = () => {
    return "Welcome, " + customers.join(", ") + "!";
};

const calculateTotal = (price1, price2) => {
    return price1 + price2;
};

const calculateTax = (amount) => {
    return amount * tax;
};

const checkPayment = (payment, total) => {
    return payment >= total;
};

let subtotal = calculateTotal(coffee.price, food.price);
let taxAmount = calculateTax(subtotal);
let total = subtotal + taxAmount + serviceFee;

console.log("\n===== ORDER =====");
console.log("Coffee: " + coffee.name);
console.log("Size: " + coffee.size);
console.log("Quantity: " + coffee.quantity);
console.log("Food: " + food.name);
console.log("Dessert: " + dessert);

console.log("\n===== PAYMENT =====");
console.log("Subtotal: " + currency + " " + subtotal);
console.log("Tax: " + currency + " " + taxAmount);
console.log("Service Fee: " + currency + " " + serviceFee);
console.log("Total: " + currency + " " + total);

let payment = 400;

console.log("Payment: " + currency + " " + payment);

if (checkPayment(payment, total)) {
    console.log("Payment is enough.");
    console.log("Change: " + currency + " " + (payment - total));
} else {
    console.log("Payment is not enough.");
}

console.log("\n===== MENU =====");

let drinks = ["Coffee", "Tea", "Juice"];

let updatedDrinks = [
    ...drinks,
    "Milkshake"
];

console.log("Drinks: " + updatedDrinks);

let prices = [80, 60, 50, 120, 150];

let affordableFood = prices.filter(price => price <= 100);

console.log("Affordable prices: " + affordableFood);

let upperMenu = drinks.map(drink => drink.toUpperCase());

console.log("Menu: " + upperMenu);

console.log("\n===== ORDER DETAILS =====");

let basicOrder = {
    item: coffee.name,
    size: coffee.size
};

let finalOrder = {
    ...basicOrder,
    price: coffee.price,
    quantity: coffee.quantity
};

console.log(finalOrder);

console.log("\n===== CUSTOMER INFORMATION =====");

let customerInfo = {
    name: "Lee",
    address: {
        city: "Calbayog City"
    }
};

let customerCity = customerInfo.address?.city;

console.log("Customer: " + customerInfo.name);
console.log("City: " + customerCity);

console.log("\n===== SUMMARY =====");

console.log(welcome());
console.log("Cashier: " + cashier);
console.log("Order: " + coffee.name + " and " + food.name);
console.log("Dessert: " + dessert);
console.log("Total: " + currency + " " + total);
```
