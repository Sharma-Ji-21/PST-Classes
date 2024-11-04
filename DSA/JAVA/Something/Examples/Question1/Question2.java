package DSA.JAVA.Something.Examples.Question1;
import java.util.*;
public class Question2 {
    public static int[] relativeSortArray(int[] arr1, int[] arr2) {
        int[] count = new int[1001];
        for (int i =0;i<arr1.length;i++) {
            count[arr1[i]]++;
        }
        int j = 0;
        for (int i=0;i<arr2.length;i++) {
            while (count[arr2[i]] > 0) {
                arr1[j++] = arr2[i];
                count[arr2[i]]--;
            }
        }
        for (int i = 0; i < count.length; i++) {
            while (count[i] > 0) {
                arr1[j++] = i;
                count[i]--;
            }
        }
        return arr1;
    }
    public static void main(String[] args) {
        int[] arr1 = {28,6,22,8,44,17};
        int[] arr2 = {22,28,8,6};
        System.out.println(Arrays.toString(relativeSortArray(arr1,arr2)));
    }
}
