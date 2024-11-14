public class StringToLowerCase {
    public static void main(String[] args) {
        char c1='a';
        char c2='A';
        System.out.println(c1-c2); // 32 : which means small letter case is having 32 more value in numaric than Caps alphabets
        String s="aBcD";
        String s1="";
        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);
            if(ch>='A' && ch<='Z'){
                ch=(char)(ch+32);
            }
            s1+=ch;
        }
        System.out.println(s1);
    }
}
