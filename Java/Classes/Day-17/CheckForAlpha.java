public class CheckForAlpha {
    // chech all the values are only alphanumaric ina given string.
    // ex: a9h6-> true;
    static boolean chech(String s){
        for(int i=0;i<s.length();i++){
            char c=s.charAt(i);
            if((c>='A' && c<='Z') || (c>='a' && c<='z') || (c>='0' && c<='9')){
                continue;
            }
            else{
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        String s="a5h4k3";
        System.out.println(chech(s));
    }
}
