import java.util.Scanner;
class First {
    static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int a =input.nextInt();
        input.close();
        int b = 20;
        String  c= "String";
        int sum = a + b;
        System.out.println("Sum of " + a + " and " + b + " is: " + sum +c);
        System.out.print("Hello Polaris");
        System.out.print("hello PST21!");
        System.out.println("Hello Polaris");
        System.out.println("hello PST21!");
        if(a%2==0){
            System.out.println(a + " is even");
        }
        else{
            System.out.println(a + " is odd");
        }
        for(int i=1; i<=a; i++){
            System.out.println("Hello Polaris"+i);
        }
    }
}

// here scanner is the concept which been not tought
