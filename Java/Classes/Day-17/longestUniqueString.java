import java.util.HashSet;

public class longestUniqueString {
    public static void main(String[] args) {
        String s="abbscssasasde";
        int max=0;
        for(int i=0;i<s.length();i++){
            boolean check[]=new boolean[256];
            int count=0;
            for(int j=i;j<s.length();j++){
                char c=s.charAt(j);
                if(check[c]){
                    break;
                }
                check[c]=true;
                count++;
            }
            max=Math.max(max, count);
        }
        System.out.println(max);
    }
}