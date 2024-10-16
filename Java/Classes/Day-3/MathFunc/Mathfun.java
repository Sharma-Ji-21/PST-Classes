import java.util.Scanner;
public class Mathfun {
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("Enter 1st number: ");
        int x=input.nextInt();
        System.out.println("Enter 2nd number: ");
        int y=input.nextInt();
        input.close();
        int a=Math.max(x,y);
        int b=Math.min(x,y);
        int r=(int)(Math.random()*(10-1)+1);
        System.out.println(a);
        System.out.println(b);
        System.out.println(r);
    }
}
