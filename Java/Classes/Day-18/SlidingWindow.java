public class SlidingWindow {
    // can be used in subarray, SubString, Max Sum, Min Sum;
    /*
    Fixed Size:->window will always there,
    ex: maximum sum of subArray with size in k

    Variable size:
    langest SubString-> Max Sum Min Sum

    Question:
    nums[]={2,3,4,5,-2,4,6};
    find Maximum sum for window Size k;

    windowSize-> end -start+1 
    */
    // static void something(int nums[], int k){
    //     int MaxSum=Integer.MIN_VALUE;
    //     int windowSum=0;
    //     for(int i=0;i<k;i++){
    //         windowSum+=nums[i];
    //     }
    //     for(int i=k;i<nums.length;i++){
    //         windowSum+=(nums[i]-nums[i-k]);
    //         MaxSum=Math.max(MaxSum, windowSum);
    //     }
    //     System.out.println(MaxSum);
    // }
    // public static void main(String[] args) {
    //     int arr[]={2,3,4,5,-2,4,6};
    //     int k=2;
    //     something(arr, k);
    // }

    // static int check(int nums[], int target){
    //     int min=Integer.MAX_VALUE;
    //     for(int i=0;i<nums.length;i++){
    //         int sum=0;
    //         int count=0;
    //        while(sum<target){
    //             sum+=nums[i];
    //             count++;
    //             if(sum==target){
    //                 min=Math.min(count,min);
    //                 break;
    //             }
    //             if(sum>target){
    //                 count=0;
    //                 break;
    //             }
    //         }
    //     }
    //     return min;
    // }
    // public static void main(String[] args) {
    //     int nums[]={4,1,2,1,5,1};
    //     int target=3;
    //     System.out.println(check(nums, target));
    // }

    public static void main(String[] args) {
        int nums[]={4,3,2,1,5};
        int target=5;
        int end=0;
        int start=0;
        int sum=0;
        int windowLength=0;
        while(end>=start){
            for(int i=start;i<=end;i++){
                sum+=nums[i];
            }
            if(target>sum){
                end++;
            }
            if(target<sum){
                start++;
            }
            if(target==sum){
                windowLength=Math.min(windowLength,end-start+1);
            }
        }
        System.out.println(windowLength);
    }
}

//     static int minSubStr(int arr[], int target){
//         int start=0;
//         int end=0;
//         int sum=Integer.MAX_VALUE;
//         int currentSum=0;
//         while(start<=end && end<arr.length){
//             while(currentSum<target || start<end){
//                 currentSum+=arr[end];
//                 end++;
//             }
//             while(currentSum>target){
//                 currentSum-=arr[start];
//                 start++;
//             }
//             if(target==currentSum){
//                 sum=Math.min(sum, end-start+1);
//             }
//             end++;
//         }
//         return 0;
//     }
//     public static void main(String[] args) {
//         int nums[]={4,3,2,1,5};
//         int target=5;
//         System.out.println(minSubStr(nums, target));
//     }
// }