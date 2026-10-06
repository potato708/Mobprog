let cafeName = "Morning Brew";
let customer1 = "Lee";
let customer2 = "Sean";
let customer3 = "Enaro";
let orderNumber = 25;
let tableNumber = 6;
let coffeePrice = 80;
let foodPrice = 120;
let drinkSize = "Medium";
let quantity = 2;

const openingTime = "8:00 AM";
const closingTime = "8:00 PM";
const tax = 0.12;
const serviceFee = 20;
const coffee = "Iced Coffee";
const food = "Club Sandwich";
const dessert = "Chocolate Cake";
const cashier = "Mia";
const branch = "Downtown";
const currency = "PHP";

console.log(`Welcome to ${cafeName}.`);
console.log(`Customer 1: ${customer1}`);
console.log(`Customer 2: ${customer2}`);
console.log(`Customer 3: ${customer3}`);
console.log(`Order number: ${orderNumber}`);
console.log(`Table number: ${tableNumber}`);
console.log(`Coffee price: ${currency} ${coffeePrice}`);
console.log(`Food price: ${currency} ${foodPrice}`);
console.log(`Drink size: ${drinkSize}`);
console.log(`Quantity: ${quantity}`);

const welcome = () => {
    return `Hello ${customer1}, ${customer2}, and ${customer3}!`;
};

const totalPrice = (price1, price2) => {
    return price1 + price2;
};

const getTax = (amount) => {
    return amount * tax;
};

const checkPayment = (payment, total) => {
    return payment >= total;
};

const showOrder = () => {
    return `${coffee} and ${food}`;
};

console.log(welcome());
console.log(`Total: ${currency} ${totalPrice(coffeePrice, foodPrice)}`);
console.log(`Tax: ${currency} ${getTax(200)}`);
console.log(`Payment enough: ${checkPayment(300, 200)}`);
console.log(`Order: ${showOrder()}`);

let drinks = ["Coffee", "Tea", "Juice"];
let [drink1, drink2, drink3] = drinks;

let prices = [80, 60, 50];
let [price1, price2, price3] = prices;

let desserts = ["Cake", "Donut", "Brownie"];
let [dessert1, dessert2, dessert3] = desserts;

console.log(`First drink: ${drink1}`);
console.log(`First price: ${price1}`);
console.log(`First dessert: ${dessert1}`);

let customerInfo = {
    name1: "Lee",
    name2: "Sean",
    name3: "Enaro",
    age: 21,
    favoriteDrink: "Coffee"
};

let {
    name1,
    name2,
    name3
} = customerInfo;

let cafeInfo = {
    name: "Morning Brew",
    location: "Downtown"
};

let {
    name: cafe,
    location
} = cafeInfo;

let orderInfo = {
    item: "Iced Coffee",
    size: "Medium",
    price: 80
};

let {
    item,
    size,
    price
} = orderInfo;

console.log(`Customer names: ${name1}, ${name2}, and ${name3}`);
console.log(`Cafe: ${cafe}`);
console.log(`Location: ${location}`);

let hotDrinks = ["Coffee", "Hot Chocolate"];
let coldDrinks = ["Iced Coffee", "Milkshake"];

let allDrinks = [
    ...hotDrinks,
    ...coldDrinks
];

let updatedDrinks = [
    ...allDrinks,
    "Lemonade"
];

console.log(`Drinks: ${allDrinks}`);
console.log(`Updated drinks: ${updatedDrinks}`);

let basicOrder = {
    item: "Coffee",
    size: "Small"
};

let biggerOrder = {
    ...basicOrder,
    price: 80
};

let finalOrder = {
    ...biggerOrder,
    quantity: 2
};

console.log(biggerOrder);
console.log(finalOrder);

let numbers = [10, 20, 30, 40, 50];

let newNumbers = numbers.map(number => {
    return number + 5;
});

let menu = ["coffee", "tea", "cake"];

let menuList = menu.map(item => {
    return item.toUpperCase();
});

console.log(`New numbers: ${newNumbers}`);
console.log(`Menu: ${menuList}`);

let foodPrices = [50, 80, 100, 150, 200];

let cheapFood = foodPrices.filter(price => {
    return price <= 100;
});

let expensiveFood = foodPrices.filter(price => {
    return price >= 150;
});

console.log(`Affordable food: ${cheapFood}`);
console.log(`Expensive food: ${expensiveFood}`);

let cafeBranch = {
    name: "Morning Brew",
    manager: {
        name: "Mia"
    }
};

let managerName = cafeBranch.manager?.name;

let customerAddress = {
    name: "Lee",
    address: {
        city: "Downtown"
    }
};

let customerCity = customerAddress.address?.city;

console.log(`Manager: ${managerName}`);
console.log(`Customer city: ${customerCity}`);

console.log(`The cafe is ${cafeName}.`);
console.log(`Today's customers are ${customer1}, ${customer2}, and ${customer3}.`);
console.log(`The order number is ${orderNumber}.`);
console.log(`The customers ordered ${coffee}.`);
console.log(`The food ordered is ${food}.`);
console.log(`The dessert available is ${dessert}.`);
console.log(`The cafe opens at ${openingTime}.`);
console.log(`The cafe closes at ${closingTime}.`);
console.log(`The cashier is ${cashier}.`);
console.log(`The branch is ${branch}.`);