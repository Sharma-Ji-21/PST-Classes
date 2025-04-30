package Recursion;

public class Target {
    public static void Search(int arr[], int i, int target,int maxOuccurance) {
        if(i==arr.length)return;
        if(arr[i]==target){
            maxOuccurance=Math.max(maxOuccurance, i);
            System.out.println("Target found at index "+maxOuccurance);
        }
        Search(arr, i+1, target,maxOuccurance);
    }
    public static void main(String[] args) {
        int arr[] = {3,4,1,2,4};
        int target = 4;
        Search(arr, 0, target,0);
    }
}
