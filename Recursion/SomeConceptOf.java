package Recursion;

public class SomeConceptOf {
    public static void foo(int n) {
        if(n<0){
            return;
        }
        System.out.println("start: " + n);
        foo(n-1);
        System.out.println("end: " + n);
    }
    public static void main(String[] args) {
        foo(5);
    }
}
