import java.util.Scanner;

public class palinedromCheckInString {
    static boolean check(String s){

        for(int i=0,j=s.length()-1;i<s.length() && j>=0;i++,j--){
            if(s.charAt(i)!=s.charAt(j))return false;
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        s=s.replaceAll(" ", "");
        System.out.println(s);
        System.out.println(check(s));
    }
}
