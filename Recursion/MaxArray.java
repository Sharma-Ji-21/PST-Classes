package Recursion;

public class MaxArray {
    public static int findMax(int arr[], int i, int max) {
        if(arr.length==i){
            return max;
        }
        max=Math.max(max, arr[i]);
        return findMax(arr, i+1, max);
    }
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5};
        System.out.println(findMax(arr, 0, arr[0]));
    }
}
