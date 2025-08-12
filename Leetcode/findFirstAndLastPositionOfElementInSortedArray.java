package Leetcode;

public class findFirstAndLastPositionOfElementInSortedArray {

    public int[] searchRange(int[] nums, int target) {
        int arr[] = { -1, -1 };
        arr[0] = firstOcc(nums, target);
        arr[1] = lastOcc(nums, target);
        return arr;
    }

    public int firstOcc(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        int mid;
        int ans = -1;
        while (right >= left) {
            mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                ans = mid;
                right = mid - 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    }

    public int lastOcc(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        int mid;
        int ans = -1;
        while (right >= left) {
            mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                ans = mid;
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    }
}