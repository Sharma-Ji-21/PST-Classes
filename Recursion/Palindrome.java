package Recursion;

public class Palindrome {
    public static boolean PalindromeCheck(int arr[], int low, int high) {
        if(arr[low]!=arr[high]){
            return false;
        }
        if(low==high)return true;;
        return PalindromeCheck(arr, low+1, high-1);
    }
    public static void main(String[] args) {
        int arr[] = {1,2,3,2,1};
        System.out.println(PalindromeCheck(arr, 0, arr.length-1));
    }
}
