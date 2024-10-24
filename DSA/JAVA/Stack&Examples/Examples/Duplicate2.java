package DSA.JAVA.Examples.Stack.Examples;

// public class Question3 {
//     static int isFinding(int arr[],int target){
//         for(int i=0;i<arr.length;i++){
//             int total=0;
//             int count=0;
//             for(int j=0;j<arr.length;j++){
//                 if(arr[i]==arr[j]){
//                     // total+=i+j;
//                     count++;
//                 }
//                 else if(count>1){
//                     total+=i+j;
//                 }
//             }
//             if(total>0){
//                 return total;
//             }
//         }
//         return -1;
//     }
//     public static void main(String[] args) {
//         int arr[]={2,3,9,4,3,5,9};
//         int target=5;
//         System.out.println(isFinding(arr,target));
//     }
// }

public class Duplicate2 {
    static boolean check(int[] arr,int k) {
        for(int i=0;i<arr.length;i++) {
            for(int j=i+1;j<arr.length;j++) {
                if(arr[i]==arr[j] && i+j<=k) {
                    return true;
                }
            }
        }
        return false;                 
    }

    public static void main(String[] args) {    
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 5, 10};
        int k = 15;
        System.out.println(check(arr,k));
    }
}