package Stack;
import java.util.Stack;

public class Bracket {
    public static void main(String[] args) {
        String str = "((2-1)*(71)";
        solve(str);
    }
    public static void solve(String str) {
        Stack<Character> operator = new Stack<>();
        Stack<Integer> operand = new Stack<>();
        for(int i=0;i<str.length();i++){
            char ch = str.charAt(i);
            if(ch=='('){
                operator.push(ch);
            }
            else if(ch==')'){
                while (operator.peek()!='('){
                    int a = operand.pop();
                    int b = operand.pop();
                    char op = operator.pop();
                    int res = performOperation(a, b, op);
                    operand.push(res);
                }
                operator.pop();
            }
            else if(Character.isDigit(ch)){
                operand.push(ch-'0');
            }
            else{
                while((operator.size()!=0 && operand.size()>=2) && (operator.peek()!='(') && priority(operator.peek())>=priority(ch)){
                    int a = operand.pop();
                    int b = operand.pop();
                    char op = operator.pop();
                    int res = performOperation(a, b, op);
                    operand.push(res);
                }
                operator.push(ch);
            }
        }
        System.out.println(operand.peek());
    }
    public static int performOperation(int a, int b, char ch){
        if(ch=='+'){
            return a+b;
        }
        else if(ch=='-'){
            return b-a;
        }
        else if(ch=='*'){
            return a*b;
        }
        else if(ch=='/'){
            return b/a;
        }
        else{
            return 0;
        }
    }
    public static int priority(char ch){
        if(ch=='+' || ch=='-'){
            return 1;
        }
        else if(ch=='*' || ch=='/'){
            return 2;
        }
        return -1;
    }
}
