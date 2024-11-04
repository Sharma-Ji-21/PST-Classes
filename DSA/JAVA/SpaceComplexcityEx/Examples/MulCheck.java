package DSA.JAVA.SpaceComplexcityEx.Examples;

public class MulCheck {
    static int mulCheck(int []a){
        int mul=1;
        for(int i=0;i<a.length;i++){
            mul*=a[i];
        }
        if(mul>0){
            return 1;
        }
        else if(mul<0){
            return -1;
        }
        else{
            return 0;
        }
    }
    public static void main(String[] args) {
        int arr[]={2,2,2,4,3,5,-7};
        System.out.println(mulCheck(arr));
    }
}
