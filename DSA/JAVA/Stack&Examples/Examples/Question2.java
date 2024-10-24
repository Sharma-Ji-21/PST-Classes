package DSA.JAVA.Examples.Stack.Examples;

public class Question2 {
    static int duplicates(int arr[]){
        for(int i=0;i<arr.length;i++){
            int count=0;
            for(int j=0;j<arr.length;j++){
                if(arr[i]==arr[j]){
                    count++;
                }
            }
            if(count>1){
                return arr[i];
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6,7,8,9};
        System.out.println(duplicates(arr));
    }
}
