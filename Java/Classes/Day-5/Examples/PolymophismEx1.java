import java.util.*;
// compile time polymorphism
public class PolymophismEx1{
    static void add(int a, int b){
        System.out.println("This is Sum: "+(a+b));
    }
    // overloading
    static void add(int a, int b, int c){
        System.out.println("Sum: "+(a+b+c));
    }
    public static void main(String[] args){
        add(1,2);
        add(1,2,3);
    }
}