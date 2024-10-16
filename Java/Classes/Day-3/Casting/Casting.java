public class Casting {
    public static void main(String[] args) {
        // implicit casting:
        // int a = 5;
        // double b = a;
        // long c = a;
        // System.out.println(a);
        // System.out.println(b);
        // System.out.println(c);

        // Explicit and Narrowing casting:
        double a=5.0;
        int b=(int)a; // if we don't use (int) it will give an error this is because convertion of double to int is not possible cause it is not a whole number as both are different data types.
        long c=723;
        int d=(int)c; // if we don't use (int) it will give an error caus eboth are different data types. and both takes different spaces accordingly.
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
    }
}