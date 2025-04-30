package Recursion;

public class ReverseStr {
    public static String reverseStr(String str, int low, int high) {
        if (low >= high) {
            return str;
        }
        char[] charArr = str.toCharArray();
        char temp = charArr[low];
        charArr[low] = charArr[high];
        charArr[high] = temp;
        return reverseStr(new String(charArr), low + 1, high - 1);
    }
    public static void main(String[] args) {
        String str = "hello";
        System.out.println(str);
        System.out.println(reverseStr(str, 0, str.length() - 1));
    }
}
