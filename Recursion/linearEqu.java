package Recursion;

public class linearEqu {
    public static int equ(int n, int x) {
        if(x==0){
            return 1;
        }
        return n*equ(n, x-1);
    }
    public static void main(String[] args) {
        System.out.println(equ(2, 4));
    }
}
