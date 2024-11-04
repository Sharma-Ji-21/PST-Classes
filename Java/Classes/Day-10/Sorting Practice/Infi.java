public class Infi {
    static long printNum(long Start, long End) {
        while(Start<=End) {
            System.out.println(Start);
            Start++;
        }
        return Start;
    }
    public static void main(String[] args) {
        printNum(1, 100000000000010000l);
    }
}