import java.util.*;
class Parent{
    public void multiple(int a, int b){
        System.out.println("here is theMultiplication: "+(a*b));
    }
    public void add(float a, int b){
        System.out.println("here is the Addition: "+(a+b));
    }
}
class Child extends Parent{
    public void multiple(int a, int b){
        System.out.println("Multiplication: "+(a*b));
    }
    public void add(float a, int b){
        System.out.println("Addition: "+(a+b));
    }
}
public class PolymophismEx2 {
    // Compile time Polymorphism
    public static void main(String[] args) {
        Parent p = new Parent();
        p.multiple(10, 20);
        p.add(10.5f, 20);
        Child c = new Child();
        c.multiple(1, 20);
        c.add(10.5f, 2);
    }
}
