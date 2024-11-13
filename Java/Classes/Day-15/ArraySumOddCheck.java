// import java.util.Scanner;

// public class ArraySumOddCheck {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);

//         int t = sc.nextInt();
//         StringBuilder result = new StringBuilder();

//         while (t-- > 0) {
//             int n = sc.nextInt();
//             int q = sc.nextInt();

//             int[] arr = new int[n];
//             long initialSum = 0;
//             for (int i = 0; i < n; i++) {
//                 arr[i] = sc.nextInt();
//                 initialSum += arr[i];
//             }

//             for (int i = 0; i < q; i++) {
//                 int l = sc.nextInt() - 1;
//                 int r = sc.nextInt() - 1;
//                 int k = sc.nextInt();

//                 long rangeSum = 0;
//                 for (int j = l; j <= r; j++) {
//                     rangeSum += arr[j];
//                 }

//                 long newRangeSum = (long) (r - l + 1) * k;

//                 long sumAfterChange = initialSum - rangeSum + newRangeSum;

//                 if (sumAfterChange % 2 != 0) {
//                     result.append("YES\n");
//                 } else {
//                     result.append("NO\n");
//                 }
//             }
//         }
//         System.out.print(result);
//         sc.close();
//     }
// }
