// import java.lang.reflect.Array;
import java.util.Arrays;

public class ArrayConcept2 {
    public static void main(String[] args) {
        // At this point, the array is empty, so all 5 positions inside the array are set to null. null means "nothing" or "empty" for text values in Java.
        String names[]=new String[5];
        int nums[]=new int[5];
        // At the start, all positions in this array are set to 0 because Java automatically fills integer arrays with 0 if you don't put any numbers.
        System.out.println(Arrays.toString(names));
        System.out.println(Arrays.toString(nums));
        // Default Values:
        // String arrays get filled with null.
        // int arrays get filled with 0.
    }
}