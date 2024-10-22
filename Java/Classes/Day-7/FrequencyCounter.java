/*
    Array as frequency Counter :
    these all are conditions to be satisfied in array as frequency counter
    - 1 to n
    - duplicate
    - missing
    - repeated
    - Max Frequency
    - Min Frequency
*/
public class FrequencyCounter {
    public static void main(String[] args) {
        int arr[]={2,2,2,4,3,5,7};
        int res[]=new int[arr.length+1];  
        for(int i=0;i<arr.length;i++){
            res[arr[i]]++;
        }
        for(int i=0;i<res.length;i++){
            if(res[i]>0){
                System.out.println(i+" was found repeated "+res[i]+" times");
            }
        }
    }
}
