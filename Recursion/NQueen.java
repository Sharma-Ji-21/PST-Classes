package Recursion;

public class NQueen {
    public static void main(String[] args) {
        int n=4;
        int board[][] = new int[n][n];
        NQueenProblem(board, 0,"");
    }
    public static void NQueenProblem(int board[][], int row,String ans){
        if(row==board.length){
            System.out.println(ans);
            return;
        }
        for(int col=0;col<board.length;col++){
            if(isSafe(board,row,col)){
                board[row][col]=1;
                NQueenProblem(board, row+1, ans+row+"-"+col+", ");
                board[row][col]=0;
            }
        }
    }
    public static boolean isSafe(int board[][],int row,int col) {
        for(int i=row-1,j=col;i>=0;i--){
            if(board[i][j]==1)return false;
        }
        for(int i=row-1,j=col+1;i>=0 && j<board.length;i--,j++){
            if(board[i][j]==1)return false;
        }
        for(int i=row-1,j=col-1;i>=0 && j>=0;i--,j--){
            if(board[i][j]==1)return false;
        }
        return true;
    }
}
