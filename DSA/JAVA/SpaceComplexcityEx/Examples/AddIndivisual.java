package DSA.JAVA.SpaceComplexcityEx.Examples;
public class AddIndivisual {
    static int input(int x){
        // int sum=0;
        // String str=String.valueOf(x);
        // String []StrArray=str.split("");

        // for(int i=0;i<StrArray.length;i++){
        //     sum+=Integer.parseInt(StrArray[i]);
        // }
        // if(sum>9){
        //     return input(sum);
        // }
        // return sum;
    int sum=0;
    while(x>0){
        sum+=x%10;
        x=x/10;
    }
    if(sum>9){
        return input(sum);
    }
    return sum;
    }
    public static void main(String[] args) {
        System.out.println(input(0));
    }
}
