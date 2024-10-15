public class New {
    static int Max(int a, int b, int c){
        if (a>b && a>c){
            return a;
        }
        else if (a<b && c<b){
            return b;
        }
        else{
            return c;
        }
    }
    public static void main(String[] args){
        int a = 10, b = 20, c = 30;
        System.out.println("The maximum number is: " + Max(a, b, c));
    }
}
