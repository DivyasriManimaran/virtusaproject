interface Employee 
{
  name: string;
  id: number;
  getSalary(): number;
  showDetails(): void;
}
class FullTimeEmployee implements Employee 
{
  name: string;
  id: number;
  monthlySalary: number;
  constructor(name: string, id: number, monthlySalary: number) 
  {
    this.name = name;
    this.id = id;
    this.monthlySalary = monthlySalary;
  }
  getSalary(): number 
  {
    return this.monthlySalary;
  }
  showDetails(): void 
  {
    console.log("\n--- Employee Details ---");
    console.log("Name:", this.name);
    console.log("ID:", this.id);
    console.log("Type: Full-Time");
    console.log("Salary:", this.getSalary());
  }
}
class PartTimeEmployee implements Employee 
{
  name: string;
  id: number;
  hourlyRate: number;
  hoursWorked: number;
  constructor(
    name: string,
    id: number,
    hourlyRate: number,
    hoursWorked: number
  ) 
  {
    this.name = name;
    this.id = id;
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  getSalary(): number 
  {
    return this.hourlyRate * this.hoursWorked;
  }
  showDetails(): void 
  {
    console.log("\n--- Employee Details ---");
    console.log("Name:", this.name);
    console.log("ID:", this.id);
    console.log("Type: Part-Time");
    console.log("Salary:", this.getSalary());
  }
}
const fullEmployee = new FullTimeEmployee(
  "Divya",
  101,
  40000
);
const partEmployee = new PartTimeEmployee(
  "Harini",
  102,
  500,
  20
);
fullEmployee.showDetails();
partEmployee.showDetails();