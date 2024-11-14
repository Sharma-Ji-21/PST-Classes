// import java.util.*;

// public class PrintUniqueSub {
//     public static boolean UniqueCheck(String str){
//         HashSet<Character> set= new HashSet<>();
//         for(int i=0;i<str.length();i++){
//            if(set.contains(str.charAt(i))){
//             return false;
//            }
//            set.add(str.charAt(i));
//         }
//         return true;
//     }
//        public static void findSubStr(String str) {
//         for(int i=0;i<str.length();i++){
//             for(int j=i+1;j<str.length()+1;j++){
//                 String substr=str.substring(i,j);
//                 if(UniqueCheck(substr)){
//                     System.out.println(substr);
//                 }
//             }
//         }
//        }
//        public static void main(String[] args) {
//         String str="aabc";
//         findSubStr(str);
//        }
// }


// DRY RUN:
// STEP 1:   i=0 , i<4 
//        1. j=1 , j<=4
//           substr =  "a" -> UniqueCheck("a") => i=0 , i<1 => ["a"] -> true
//                                         i=1 , i<1 !!!
//           print -> a
//        2. j=2 , 2<=4
//           substr = "aa" -> UniqueCheck("aa") => i=0 , i<2 => ["a"] -> false 
//                                                 i=1 , i<2
//        3. j=3 , 3<=4
//           substr = "aab" -> UniqueCheck("aab") => i=0 , i<3 => ["a"] -> false
//                                                   i=1 , i<3 !! same character
public class findunique {
    public static void main(String[] args) {
        String str = "aabc";
        printUniqueCharacterSubstrings(str);
    }
    public static void printUniqueCharacterSubstrings(String str) {                                                 
        int n = str.length();
        for (int i = 0; i < n; i++) {
            int[] charCount = new int[256];
            boolean hasDuplicate = false;
            for (int j = i; j < n; j++) {
                char currentChar = str.charAt(j);
                charCount[currentChar]++;
                if (charCount[currentChar] > 1) {
                    hasDuplicate = true;
                    break;
                }
                if (!hasDuplicate) {
                    System.out.println(str.substring(i, j + 1));
                }
            }
        }
    }
}