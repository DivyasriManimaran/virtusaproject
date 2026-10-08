import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
public class java2 
{
    public static void main(String[] args) 
    {
        int wordCount = 0;      
        try 
        {
            BufferedReader br = new BufferedReader(new FileReader("input.txt"));
            String line;        
            while ((line = br.readLine()) != null) 
                {
                line = line.trim();          
                if (!line.isEmpty()) 
                    {      
                    String[] words = line.split("\\s+");   
                    wordCount = wordCount + words.length;  
                    }
                }
            br.close();         
            BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"));
            bw.write("Total words: " + wordCount);   
            bw.newLine();                            
            bw.close();         
            System.out.println("Done! Word count written to output.txt");
        } 
        catch (IOException e) 
        {           
            System.out.println("Error: " + e.getMessage());
        }
    }
}