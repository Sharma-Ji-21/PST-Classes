import java.util.Arrays;
import java.util.Scanner;

public class StudentInventry {
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("Enter number of students: ");
        int n=input.nextInt();
        String name[]=new String[n];
        input.nextLine();
        // To take input in the first cycle as the default behavior is that when the loops sarts it doesn't take input for the first time.
        for(int i=0;i<n;i++){
            System.out.println("Enter name "+ (i+1) +": ");
            name[i]=input.nextLine();
        }
        input.close();
        System.out.println("Array of students: "+ Arrays.toString(name));
    }
}