import java.util.Arrays;

public class MergeSort {
    public static void func(int arr[], int low, int high) {
        if (low == high) {
            return;
        }
        int mid = (low + (high - low) / 2);
        func(arr, low, mid);
        func(arr, mid + 1, high);
        conquire(arr, low, mid, high);
    }
    public static void conquire(int arr[], int low, int mid, int high) {
        int temp[] = new int[high - low + 1];
        int lp = low;
        int rp = mid + 1;
        int tp = 0;
        while (lp <= mid && rp <= high) {
            if (arr[lp] < arr[rp]) {
                temp[tp] = arr[lp];
                lp++;
                tp++;
            } else {
                temp[tp] = arr[rp];
                rp++;
                tp++;
            }
        }
        while (lp <= mid) {
            temp[tp] = arr[lp];
            tp++;
            lp++;
        }
        while (rp <= high) {
            temp[tp] = arr[rp];
            tp++;
            rp++;
        }
        int op = low;
        for (int val : temp) {
            arr[op] = val;
            op++;
        }
    }
    public static void main(String[] args) {
        int arr[] = {1, 3, 5, 0, 6, 7, 2, 8};
        int low = 0;
        int high = arr.length - 1;
        func(arr, low, high);
        System.out.println(Arrays.toString(arr));
    }
}