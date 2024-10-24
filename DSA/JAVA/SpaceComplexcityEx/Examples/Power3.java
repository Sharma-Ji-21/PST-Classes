
package DSA.JAVA.Something.Examples;
public class Power3 {
    public static boolean isPowerOfThree(int num) {
        int num1=1;
        while(num>num1){
            num1=num1*3;
        }
        if (num==num1){
            return true;
        }
        return false;
    }
    public static void main(String[] args) {
        int num=22;
        System.out.println(isPowerOfThree(num));
        
    }
}