import java.util.*;

public class StringMethods {
    public static void main(String[] args) {
        String s = "abcdaabc";
        int freq[] = new int[26];
        char ch[] = new char[26];
        int tp = 0;
        for (char i = 'a'; i <= 'z'; i++) {
            ch[tp] = i;
            tp++;
        }
        for (int i = 0; i < s.length(); i++) {
            char currentChar = s.charAt(i);
                freq[currentChar - 'a']++;
        }
        int max = freq[0];
        int idx = 0;
        for (int i = 0; i < freq.length; i++) {
            if (freq[i] > max) {
                max = freq[i];
                idx = i;
            }
        }
        System.out.println(ch[idx]);
        System.out.println(Arrays.toString(ch));
    }
}
