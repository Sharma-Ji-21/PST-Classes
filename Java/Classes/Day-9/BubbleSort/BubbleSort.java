import java.util.Arrays;
/*
1. Bubble sort: (Adjacent elements are swapped if they are in wrong order) (smaller element left, larger element right)
    -Time complexity: O(n^2)
    -Space complexity: O(1)
    -Best case: O(n)
    -Worst case: O(n^2)
    -Average case: O(n^2)
*/

public class BubbleSort {
    static void bubbleSort(int[] arr) {
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr.length-1;j++){
                if(arr[j]>arr[j+1]){
                    int temp=arr[j+1];
                    arr[j+1]=arr[j];
                    arr[j]=temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {5, 4, 3, 2, 1};
        bubbleSort(arr);
    }
}