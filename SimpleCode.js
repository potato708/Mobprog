class Car {
    constructor(brand, color, year, speed) {
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
    }

    showInfo() {
        console.log("Brand: " + this.brand);
        console.log("Color: " + this.color);
        console.log("Year: " + this.year);
        console.log("Speed: " + this.speed + " km/h");
    }

    start() {
        console.log("The " + this.brand + " is starting.");
    }

    checkSpeed() {
        if (this.speed > 100) {
            console.log("The car is going fast.");
        } else {
            console.log("The car is going at a normal speed.");
        }
    }
}

let car1 = new Car("Toyota", "Black", 2024, 80);

console.log("===== CAR INFORMATION =====");

car1.showInfo();
car1.start();
car1.checkSpeed();