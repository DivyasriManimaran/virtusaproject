import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
class Employee 
{
    private int id;
    private String name;
    private int age;
    private double salary;
    Employee(int id, String name, int age, double salary) 
    {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    public int getId() 
    {
        return id;
    }
    public String getName() 
    {
        return name;
    }
    public int getAge() 
    {
        return age;
    }
    public double getSalary() 
    {
        return salary;
    }
    public void display() {
        System.out.println(id + " " + name + " " + age + " " + salary);
    }
}
public class java1 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        List<Employee> employees = new ArrayList<>();
        System.out.print("Enter number of employees: ");
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) 
        {
            System.out.println("\nEnter details of Employee " + (i + 1));
            System.out.print("Enter ID: ");
            int id = sc.nextInt();
            System.out.print("Enter name: ");
            String name = sc.next();
            System.out.print("Enter age: ");
            int age = sc.nextInt();
            System.out.print("Enter salary: ");
            double salary = sc.nextDouble();
            employees.add(new Employee(id, name, age, salary));
        }
        System.out.print("\nEnter minimum age: ");
        int minAge = sc.nextInt();
        System.out.print("Enter minimum salary: ");
        double minSalary = sc.nextDouble();
        System.out.println("\nEmployees matching the criteria:");
        employees.stream()
                .filter(e -> e.getAge() >= minAge &&
                             e.getSalary() >= minSalary)
                .forEach(Employee::display);
        sc.close();
    }
}

