package Recursion;

public class recursrionPractise {
    public static void main(String[] args) {
        fun(1,5);
    }
    public static void fun(int n, int max) {
        if(n==max){
            System.out.println(n);
            return;
        }
        System.out.println(n);
        fun(n+1,max);
    }
}
