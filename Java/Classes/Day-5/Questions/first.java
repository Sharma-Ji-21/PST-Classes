import java.util.*;
class Parent {
    String name;
    int age;
    int ATMpin;
    int Balance;
    int Credits;
    int Debits;
    public void Account(String accountName, int Age, int ATMpin, int Balance, int Credits, int Debits) {
        this.name = accountName;
        this.age = Age;
        this.ATMpin = ATMpin;
        this.Balance = Balance;
        this.Credits = Credits;
        this.Debits = Debits;
    }
}
public class first {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
            while (true){
            Parent obj = new Parent();
        System.out.println("Enter your name: ");
        obj.name = input.nextLine();
        System.out.println("Enter your age: ");
        obj.age = input.nextInt();
        System.out.println("Enter your balance: ");
        obj.Balance = input.nextInt();
        System.out.println("Enter your ATM pin: ");
        obj.ATMpin = input.nextInt();
        System.out.println("Do You Want To Credit Or Debit Money: ");
        System.out.println("1. Credit");
        System.out.println("2. Debit");
        System.out.println("Enter your choice: ");
        int choice = input.nextInt();
        if (choice == 1) {
            System.out.println("Enter your credits: ");
            obj.Credits = input.nextInt();
            obj.Balance = obj.Balance + obj.Credits;
        } else if (choice == 2) {
            System.out.println("Enter your debits: ");
            obj.Debits = input.nextInt();
            obj.Balance = obj.Balance - obj.Debits;
        }
        obj.Account(obj.name, obj.age, obj.ATMpin, obj.Balance, obj.Credits, obj.Debits);
        System.out.println("Account Details:");
        System.out.println("Name: "+obj.name);
        System.out.println("Age: "+obj.age);
        System.out.println("ATM pin: "+obj.ATMpin);
        System.out.println("Current Balance: "+obj.Balance);

        System.out.println("Thank You For Using Our Services");
        System.out.println("Visit Again??");
        System.out.println("1. Yes");
        System.out.println("2. No");
        System.out.println("Enter your choice: ");
        int choice1 = input.nextInt();
        if (choice1 == 1) {
            continue;
        } else if (choice1 == 2) {
            break;
        }
    }
    input.close();
}
}