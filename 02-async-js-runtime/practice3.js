class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    drive() {
        console.log("Vehicle is moving");
    }

    stop() {
        console.log(`${this.brand} has stopped.`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed, fueltype) {
        super(brand, speed);
        this.fueltype = fueltype;
    }

    showFuelType() {
        console.log(`Fuel type: ${this.fueltype}`);
    }

    showDetails() {
        console.log(`Brand Name: ${this.brand} Car Speed: ${this.speed} FuelType: ${this.fueltype}`);
    }

    drive() {
        super.drive();
        console.log(`${this.brand} is moving at the speed of ${this.speed}`);
    }
}

const car1 = new Car("Bmw", 120, "Petrol");

car1.drive();
car1.showFuelType();
car1.showDetails();
car1.stop();

// 2.
class user{
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`Hi, I am ${this.name}`)
    }
    static getPlatform(){
        console.log(`Platform:  Node.js`)
    }
}
const user1 = new user('Ajitesh')
user1.introduce();
user.getPlatform();