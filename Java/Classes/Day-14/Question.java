// create a string which stores name of a person and create a method which adds last name in orignal String
// write a method which adds last name in orignal String.

import java.util.Scanner;

public class Question {
    static String names(String name,int n){
        StringBuilder xyz=new StringBuilder();
        xyz.append(name);
        String total=xyz.toString();
        return total+" ";
    }
    public static void main(String[] args) {
        Scanner id= new Scanner(System.in);
        System.out.println("Number of names: ");
        int n=id.nextInt();
        id.nextLine();
        String total="";
        for(int i=0;i<n;i++){
            System.out.println("Enter name: ");
            String name=id.next();
            total+=names(name, n);
        }
        id.close();
        System.out.println(total);
    }
}
