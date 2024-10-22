import java.util.*;
public class Sample {
    public static void main(String[] args) {
        int sum=0;
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        sc.close();
        for(int i=1; i<=a; i++){
            // for(int j=1; j<=i; j++){
            sum+=i;
        // }
        }
        System.out.println(sum);
    }
}