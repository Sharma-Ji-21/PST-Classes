public class Practice {
    public static void main(String[] args) {
        String str="hello yo I am from PST";
        String converted="";
        String str1=str.toUpperCase();
        // System.out.println(str2);
        String str2[]=str.split(" ");
        for(int i=1;i<str2.length;i++){
            str2[i]=str2[i].substring(0,1).toUpperCase()+str2[i].substring(1);
        }
        for(int i=0;i<str2.length;i++){
            converted+=str2[i];
        }
        System.out.println(converted);
    }
}
