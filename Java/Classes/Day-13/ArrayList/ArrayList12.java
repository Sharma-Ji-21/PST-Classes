package ArrayList;
import java.util.ArrayList;
import java.util.Scanner;
public class ArrayList12 {
    public static void main(String[] args) {
        ArrayList<String> friends=new ArrayList<>();
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter ur Friends Name: ");
        while (true) {
            String name=sc.nextLine();
            if(!name.equals("Exit")){
                friends.add(name);
                System.out.println("Enter New Friend Or Type Exit to Close:");
            }
            else{
                break;
            }
        }
        System.out.println("Friends :"+ friends);
        friends.remove(friends.size()-1);
        System.out.println("New Friends :"+ friends);
        System.out.println("Best Friend: "+ friends.get(0));
        System.out.println("I had fight");
        friends.set(0, "Nobody");
        System.out.println("Best Friend Now: "+ friends.get(0));
        System.out.println("I need 100k");
        friends.clear();
        System.out.println("Friends Now: "+ friends);
    }
}
