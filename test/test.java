package test;
import java.util.Scanner;
public class test {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter Numbers that u want to add: ");
        int a = input.nextInt();
        while(a!=-1){
            System.out.println("Enter Numbers that u want to add: ");
            int b = input.nextInt();
            if (b==-1) break;
            a+=b;
        }
        input.close();
        System.out.println("Here is the sum: "+a);
    //     System.out.println(
    //         "Enter a number: "
    //     );
    //     int a=input.nextInt();
    //     int sum=0;
    //     input.close();
    //     while(a>0){
    //         System.out.println(a);
    //         sum+=a;
    //         a--;
    //     }
    //     System.out.println(sum);
    }
}
