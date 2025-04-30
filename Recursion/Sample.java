package Recursion;

public class Sample {
    static int func(int arr[], int n) {
        int x;
        if (n == 1)
            return arr[0];
        else
            x = func(arr, n - 1);
        if (x > arr[n - 1])
            return x;
        else
            return arr[n - 1];
    }

    public static void main(String[] args) {
        int arr[] = { 12, 10, 30, 50, 100 };
        System.out.println(func(arr, 5));
    }
}
