import java.util.Scanner;
public class java3 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        {
            System.out.print("Enter number of terms: ");
            int n = sc.nextInt();
            int x = 0;
            int y = 1;
            int z = x+y;
            System.out.println("Fibonacci series up to " + n + " terms:");
            for (int i = 1; i <= n; i++) 
            {
                System.out.print(x + " ");
                z = x+y;
                x = y;
                y = z;
            }
            System.out.println();
        }
    }
}