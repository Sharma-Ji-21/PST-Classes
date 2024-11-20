package DSA.JAVA.LeetCode;

public class Question8 {

    public int myAtoi(String s) {
        s=s.trim();
        if(s.length()==0){
            return 0;
        }
            int sign=1;
            if(s.charAt(0)=='-'){
                sign =-1;
                s=s.substring(1);
            }else if(s.charAt(0)=='+'){
                s=s.substring(1);
            }
        StringBuilder xyz = new StringBuilder();
        for(int i=0;i<s.length();i++){
            char c=s.charAt(i);
            if((c>='0' && c<='9')){
                xyz.append(c);
            }
            else{
                break;
            }
        }
        if(xyz.length()==0){
            return 0;
        }
        String ansstr=xyz.toString();
        if(ansstr.length()>1){
        while(ansstr.charAt(0)=='0' && (ansstr.charAt(1)>='0' && ansstr.charAt(1)<='9')){
            ansstr=ansstr.substring(1);
            if(ansstr.length()==1){
                break;
            }
        }
        }
        if(ansstr.length()>10){
            if(sign==1){
                return Integer.MAX_VALUE;
            }else{
                return Integer.MIN_VALUE;
            }
        }
        long ans=Long.parseLong(ansstr);
        if(ans <-2147483648||ans>2147483647){
            if(sign==-1){
                return Integer.MIN_VALUE;
            }else{
                return Integer.MAX_VALUE;
            }
        }
        return ((int) (ans*sign));
    }
}
