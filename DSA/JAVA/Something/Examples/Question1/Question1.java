package DSA.JAVA.Something.Examples.Question1;
public class Question1 {
    static boolean isSame(String s1[], String s2[]) {
        String lol1="";
        String lol2="";
        for(int i=0;i<s1.length;i++){
            lol1+=s1[i];
        }
        for(int i=0;i<s2.length;i++){
            lol2+=s2[i];
        }
        if(lol1.equals(lol2)){
            return true;
        }
        return false;
    }
    public static void main(String[] args) {
        String s1[] = {"ab","c"};
        String s2[] = {"a", "bc"};
        System.out.println(isSame(s1, s2));
    }
}