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
    // Arrays cannot be directly printed in Java using System.out.println(arr) (unlike in JavaScript), as it would print the array's memory address. To print the actual contents, Arrays.toString(arr) is used, which converts the array to a string representation: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    System.out.println(Arrays.toString(arr));
}
}