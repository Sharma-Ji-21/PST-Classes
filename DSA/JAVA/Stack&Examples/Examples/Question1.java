package DSA.JAVA.Examples.Stack.Examples;
public class Question1 {
    static int SecontLargest(int arr[]){
        int max=arr[0];
        int max2=arr[0];
        for(int i=0;i<arr.length;i++){
            if(arr[i]>max){
                max2=max;
                max=arr[i];
            }
            else if(arr[i]!=max && arr[i]>max2){
                max2=arr[i];
            }
        }
        return max2;
    }

    public static void main(String[] args) {
        int arr[]={1,26,23,4,51,69,38};
        System.out.println(SecontLargest(arr));
    }
}