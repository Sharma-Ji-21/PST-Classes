public class WindowSum {
    static int check(int nums[], int target){
        int n=nums.length;
        int minLength=Integer.MAX_VALUE;
        for(int i=0;i<n;i++){
            int count=0;
            int wSum=0;
            for(int j=i;j<n;j++){
                wSum+=nums[j];
                count++;
                if(wSum==target){
                    minLength=Math.min(count, minLength);
                    break;
                }
                if(wSum>target){
                    break;
                }
            }
        }
        if(minLength==Integer.MAX_VALUE){
            minLength=0;
        }
        return minLength;
    }
    public static void main(String[] args) {
        int nums[]={1,1,3,7,3};
        int target=5;
        System.out.println(check(nums, target));
    }
}
// --------------------------------

// public class WindowSum {
//     static int check(int nums[], int target) {
//         int n=nums.length;
//         int minLength=Integer.MAX_VALUE;
//         int start=0;
//         int wSum=0;
//         for (int end=0;end<n;end++){
//             wSum+=nums[end];
//             while (wSum>=target) {
//                 if(wSum==target){
//                     minLength=Math.min(minLength,end-start+1);
//                 }
//                 wSum-=nums[start];
//                 start++;
//             }
//         }
//         return (minLength==Integer.MAX_VALUE)?0:minLength;
//     }
//     public static void main(String[] args) {
//         int nums[] = {1, 8, 3, 1, 2};
//         int target = 5;
//         System.out.println(check(nums, target));
//     }
// }
