package DSA.JAVA.PlayingWithNums.Nums;

import java.util.Scanner;

public class ReversingNum {
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        int num=input.nextInt();
        input.close();
        int rev=0;
        String str="";
        while(num>0){
            rev=num%10;
            str+=String.valueOf(rev);
            num=num/10;
        }
        System.out.println(str);
    }
}
