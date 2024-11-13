public class StringMethod2 {
    public static void main(String[] args) {
        String str = "Hello World";
        String str1 = "Hello World";
        System.out.println(str.equals(str1)); // true
        System.out.println(str == str1); // true
        System.out.println(str.compareTo(str1)); // 0
    }
}