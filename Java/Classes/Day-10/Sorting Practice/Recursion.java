public class Recursion {
    static void printNum(long Start, long End) {
        if(Start==End) {
            return;
        }
        System.out.println(Start);
        printNum(Start+1, End);
    }
    public static void main(String[] args) {
        printNum(1, 100);
    }
}