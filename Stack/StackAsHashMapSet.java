package Stack;
import java.util.Stack;

public class StackAsHashMapSet {
    public static void main(String[] args) {
        Stack<Integer> s = new Stack<>();
        s.push(10);
        s.push(20);
        s.push(30);
        s.push(40);
        System.out.println("peer: "+s.peek());
        while(!s.isEmpty()){
            System.out.println("Popped: "+s.pop());
        }
    }
}
