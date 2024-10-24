package DSA.JAVA.Examples.Stack;

public class Angstomer {
    static boolean isAngstomer(int n) {
        int sum=0;
        int count=0;
        int orignal=n;
        int orignal1=n;
        while(orignal>0){
            orignal=orignal/10;
            count++;
            }
        while (orignal1>0){
            int num=orignal1%10;
            sum+=Math.pow(num,count);
            orignal1=orignal1/10;
        }
        if(sum==n){
            return true;
        }
        return false;
    }
    public static void main(String[] args) {
        int n=1634;
        System.out.println(isAngstomer(n));
    }
}