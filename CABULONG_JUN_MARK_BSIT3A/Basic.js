let name = "Jun Mark";
let age = 20;
let course = "Information Technology";
let grade = 85;

console.log("Hello, " + name);
console.log("Your age is " + age);
console.log("Your course is " + course);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

if (grade >= 90) {
    console.log("Your grade is Excellent.");
} else if (grade >= 75) {
    console.log("You passed.");
} else {
    console.log("You failed.");
}

let subjects = ["IT303", "IT304", "IT Elec2"];

console.log("Your subjects:");

for (let subject of subjects) {
    console.log("- " + subject);
}

function introduce() {
    console.log("My name is " + name);
    console.log("I am taking " + course);
}

introduce();