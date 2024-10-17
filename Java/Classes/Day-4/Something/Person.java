package people;

public class Person {
    public String Name="Om";
    protected int Age=17;
    private int ATMpin=1234;

    public void getName() {
        System.out.println("Name: " + Name);
    }
    protected void getAge() {
        System.out.println("Age: " + Age);
    }
    private void getATMpin() {
        System.out.println("ATM pin: " + ATMpin);
    }
}
