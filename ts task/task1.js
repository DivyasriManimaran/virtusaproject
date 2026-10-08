"use strict";
class FullTimeEmployee {
    name;
    id;
    monthlySalary;
    constructor(name, id, monthlySalary) {
        this.name = name;
        this.id = id;
        this.monthlySalary = monthlySalary;
    }
    getSalary() {
        return this.monthlySalary;
    }
    showDetails() {
        console.log("\n--- Employee Details ---");
        console.log("Name:", this.name);
        console.log("ID:", this.id);
        console.log("Type: Full-Time");
        console.log("Salary:", this.getSalary());
    }
}
class PartTimeEmployee {
    name;
    id;
    hourlyRate;
    hoursWorked;
    constructor(name, id, hourlyRate, hoursWorked) {
        this.name = name;
        this.id = id;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
    showDetails() {
        console.log("\n--- Employee Details ---");
        console.log("Name:", this.name);
        console.log("ID:", this.id);
        console.log("Type: Part-Time");
        console.log("Salary:", this.getSalary());
    }
}
const fullEmployee = new FullTimeEmployee("Divya", 101, 40000);
const partEmployee = new PartTimeEmployee("Harini", 102, 500, 20);
fullEmployee.showDetails();
partEmployee.showDetails();
