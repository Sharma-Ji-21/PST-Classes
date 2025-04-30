package Recursion;

public class Array {
    public static void printArr(int[] arr, int i){
        if(arr.length==i){
            return;
        }
        System.out.println(arr[i]);
        printArr(arr, i+1);
        System.out.println(arr[i]);
    }
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        printArr(arr, 0);
    }
}
