import java.util.*;

public class QuickSort {
    public static void quickSort(int arr[], int low, int high) {
        if (low < high) {
            int pidx = partition(arr, low, high);
            quickSort(arr, low, pidx - 1);
            quickSort(arr, pidx + 1, high);
        }
    }

    public static int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int start = low - 1;

        for (int i = low; i < high; i++) {
            if (arr[i] <= pivot) {
                start++;
                int temp = arr[i];
                arr[i] = arr[start];
                arr[start] = temp;
            }
        }
        start++;
        int temp = arr[high];
        arr[high] = arr[start];
        arr[start] = temp;
        return start;
    }

    public static void main(String[] args) {
        int arr[] = {4, 3, 6, 5};
        int low = 0;
        int high = arr.length - 1;
        quickSort(arr, low, high);
        System.out.println(Arrays.toString(arr));
    }
}
