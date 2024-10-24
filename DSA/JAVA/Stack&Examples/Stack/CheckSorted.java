package DSA.JAVA.Examples.Stack;
public class CheckSorted {
    static boolean isSorted(int arr[]){
        for(int i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6,7,8,9};
        System.out.println(isSorted(arr));
    }
}
