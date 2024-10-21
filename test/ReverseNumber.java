package test;
import java.util.*;

public class ReverseNumber {
    public static void main(String[] args) {
        // Scanner input = new Scanner(System.in);
        // int num = input.nextInt();
        // input.close();
        // String newNum = "";
        // while (num > 0) {
        //     int a = num % 10;
        //     newNum += String.valueOf(a);
        //     num = num / 10;
        // }
        // System.out.println(newNum);
        // System.out.println(Integer.parseInt(newNum)); 

        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        input.close();
        int fact = 1;
        for (int i = 1; i <= num; i++) {
            for(int j = 1; j <= i; j++) {
                fact *= j;
            }
            System.out.println(fact);
            fact = 1;
        }
    }
}
