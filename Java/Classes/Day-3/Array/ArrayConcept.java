/*
Array in JAVA
- Group of same data values(Basically same data type)

Creating Array:
Datatype arrayName[]={ ... values seperated by ',' ... }
Datatype arrayName[]=new dataType[Size];

Rules:
-Fix the size or lenght
Note: push,pop, etc. are not applicable on array in Java
we cannot directly print array like JS.
 */

 import java.util.Arrays;
public class ArrayConcept {
public static void main(String[] args) {
    int arr[]={1,2,3,4,5,6,7,8,9};
    int len=arr.length;
    for(int i=0; i<len;i++){
        System.out.println(arr[i]);
    }
    System.out.println(Arrays.toString(arr));
}
}