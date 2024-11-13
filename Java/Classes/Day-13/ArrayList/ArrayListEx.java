package ArrayList;
import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListEx {
    public static void main(String[] args) {
        String Names[]={"Raj","Karan","Raj","Gopal","Som","Karan"};
        ArrayList<String> Str=new ArrayList<>(Arrays.asList(Names));
        ArrayList<String> Final=new ArrayList<>();
        for(String i:Str){
            if(!Final.contains(i)){
                Final.add(i);
            }
        }
        System.out.println(Final);
    }
}
