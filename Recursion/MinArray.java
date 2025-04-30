package Recursion;

public class MinArray {
    public static int findMin(int arr[], int i, int min) {
        if(arr.length==i){
            return min;
        }
        min=Math.min(min, arr[i]);
        return findMin(arr, i+1, min);
    }
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5};
        System.out.println(findMin(arr, 0, arr[0]));
    }
}
