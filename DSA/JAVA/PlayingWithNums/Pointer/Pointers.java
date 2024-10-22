package DSA.JAVA.PlayingWithNums.Pointer;

public class Pointers {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8,9,10};
        int leftPointer=0;
        int middlePointer=arr.length/2;
        int rightPointer=arr.length-1;
        int input=6;
        if(input<arr[middlePointer]){
            for(int i=middlePointer;i>leftPointer;i--){
                if(input==arr[i]){
                    System.out.println("Left Found "+i);
                }
            }
        }
        else if(input>arr[middlePointer]){
            for(int i=rightPointer;i>middlePointer;i--){
                if(input==arr[i]){
                    System.out.println("Right Found "+i);
                }
            }
        }
        else if(input==arr[middlePointer]){
            System.out.println("Middle Found "+middlePointer);
        }
        else{
            System.out.println("Not Found");
        }
    }
}