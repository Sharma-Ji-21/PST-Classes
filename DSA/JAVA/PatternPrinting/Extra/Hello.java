import java.util.*;
public class Hello {
    static void merge(int arr1[], int arr2[]){
        int arr[]=new int [arr1.length+arr2.length];
        int k=0;
        for(int i=0;i<arr1.length;i++){
            arr[k]=arr1[i];
            k++;
        }
        for(int j=0;j<arr2.length;j++){
            arr[k]=arr2[j];
            k++;
        }
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int arr1[]={1,2,3,4,5,6,7,8};
        int arr2[]={1,3,4,6,13};
        merge(arr1, arr2);
    }
}
