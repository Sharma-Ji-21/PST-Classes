package ArrayList;

import java.util.ArrayList;

public class ArrayListEx2 {
    public static ArrayList<Integer> even(ArrayList<Integer> list){
        ArrayList<Integer> evenList=new ArrayList<>();
        for(int i=0;i<list.size();i++){
            if (list.get(i)%2==0) {
                evenList.add(list.get(i));
            }
        }
        return evenList;
    }
    public static void main(String[] args) {
        int n=20;
        ArrayList<Integer> arr=new ArrayList<>();
        for(int i=0;i<=n;i++){
            if(i%2==0){
                arr.add(i);
            }
            System.out.println(arr);
            ArrayList<Integer> evennum=even(arr);
            System.out.println(evennum);
        }
    }
}
