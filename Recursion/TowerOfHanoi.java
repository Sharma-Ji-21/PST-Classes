package Recursion;

public class TowerOfHanoi {
    public static void main(String[] args) {
        int n=3;
        TowerDest(n, "T1", "T2", "T3");
    }
    public static void TowerDest(int n, String T1, String T2, String T3){
        if(n==0){
            return;
        }
        TowerDest(n-1, T1, T3, T2);
        System.out.println("Move disk "+n+" from "+T1+" to "+T2);
        TowerDest(n-1, T3, T2, T1);
    }
}