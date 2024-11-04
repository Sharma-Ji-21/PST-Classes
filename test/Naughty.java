public class Naughty {
    static void input(int length) {
        for(int i=1;i<=length;i++){
            for(int j=1;j<=length-i;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        for(int i=length;i>=1;i--){
            for(int j=1;j<=length-i;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        input(4);
    }
}