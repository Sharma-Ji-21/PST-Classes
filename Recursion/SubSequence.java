package Recursion;

import java.util.ArrayList;

public class SubSequence {
    public static void main(String[] args) {
        String str = "abc";
        System.out.println(subSequence(str));
    }
    public static ArrayList<String> subSequence(String str) {

        if(str.length()==0){
            ArrayList<String> base = new ArrayList<>();
            base.add(" ");
            return base;
        }

        ArrayList<String> myAns = new ArrayList<>();

        char ch=str.charAt(0);
        String rem_string = str.substring(1);

        ArrayList<String> rem_ans = new ArrayList<>();
        rem_ans=subSequence(rem_string);

        for(String c:rem_ans){
            myAns.add(c);
            myAns.add(ch+c);
        }
        return myAns;
    }
}
