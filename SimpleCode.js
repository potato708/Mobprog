class Car {
    constructor(brand, color, year, speed, fuel) {
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.fuel = fuel;
    }

    showInfo() {
        console.log("Brand: " + this.brand);
        console.log("Color: " + this.color);
        console.log("Year: " + this.year);
        console.log("Speed: " + this.speed + " km/h");
        console.log("Fuel: " + this.fuel + "%");
    }

    start() {
        console.log(this.brand + " is starting...");
    }

    drive() {
        if (this.fuel > 0) {
            console.log(this.brand + " is driving.");
            this.fuel = this.fuel - 10;
        } else {
            console.log("The car has no fuel.");
        }
    }

    checkFuel() {
        if (this.fuel <= 20) {
            console.log("Warning: Fuel is low.");
        } else {
            console.log("Fuel level is good.");
        }
    }
}

let car1 = new Car("Toyota", "Black", 2024, 80, 50);

console.log("===== CAR INFORMATION =====");

car1.showInfo();

console.log("\n===== CAR ACTIONS =====");

car1.start();
car1.drive();
car1.checkFuel();

console.log("\nFuel after driving: " + car1.fuel + "%");