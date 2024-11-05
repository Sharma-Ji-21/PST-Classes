public class first {
    static void print(int n) {
        for(int i=1;i<=n;i++){
            if(i==1 ||i==n){
                for(int j=1;j<=n;j++){
                    System.out.print("*");
                }
            }
            else{
                for(int j=2;j<=n;j++){
                    if(j==2 || j==n){
                        System.out.print("*");
                    }
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        // --------------------------------
    //     for(int i=1;i<=n;i++){
    //         for(int k=1;k<=n-i;k++){
    //             System.out.print("   ");
    //         }
    //         for(int j=1;j<=i;j++){
    //             System.out.print(" *");
    //         }
    //         for(int j=1;j<=i;j++){
    //             System.out.print("  *");
    //         }
    //         System.out.println();
    //     }
    //     for(int i=n+4;i>=1;i--){
    //         for(int j=1;j<=n;j++){
    //             if(j==1){
    //                 System.out.print("         *");
    //             }else{
    //                 System.out.print(" *");
    //             }
    //         }
    //         System.out.println();
    //     }
    //     for(int i=1;i<=n-2;i++){
    //         for(int j=1;j<=n-2-i;j++){
    //             System.out.print("  ");
    //         }
    //         for(int j=1;j<=i*2;j++){
    //             System.out.print(" *");
    //         }
    //         for(int j=1;j<=n-i-1;j++){
    //             System.out.print("  ");
    //         }
    //         for(int j=1;j<=n-2-i;j++){
    //             System.out.print("  ");
    //         }
    //         for(int j=1;j<=i*2;j++){
    //             System.out.print(" *");
    //         }
    //         System.out.println();
    //     }
    //     for(int i=n-2;i>=1;i--){
    //         for(int j=1;j<=n-2-i;j++){
    //             System.out.print("  ");
    //         }
    //         for(int j=1;j<=i*2;j++){
    //             System.out.print(" *");
    //         }
    //         for(int j=1;j<=n-i-1;j++){
    //             System.out.print("  ");
    //         }
    //         for(int j=1;j<=n-2-i;j++){
    //             System.out.print("  ");
    //         }
    //         for(int j=1;j<=i*2;j++){
    //             System.out.print(" *");
    //         }
    //         System.out.println();
    //     }
    }

    public static void main(String[] args) {
        print(5);
    }
}
