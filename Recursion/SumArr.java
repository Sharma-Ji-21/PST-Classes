package Recursion;

public class SumArr {
    public static int sum(int [] arr,int i){
        if (arr.length==i){
            return 0;
        }
        return arr[i]+sum(arr, i+1);       
    }
    public static void main(String[] args) {
        int [] arr={1,2,3,4,5};
        System.out.println(sum(arr, 0));
    }
}
