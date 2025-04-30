package Stack;

class Stack {
    int top=-1;
    int[] stack = new int[100];
    int n=10;
    
    public void push(int a){
        if (top==n-1){
            System.out.println("Stack Overflow");
            return;
        }
        top++;
        stack[top]=a;
        System.out.println("Pushed: "+a);
    }

    public void peek(){
        if (top==-1){
            System.out.println("Stack Underflow"); // stack is empty
            return;
        }
        System.out.println("Peek: "+stack[top]);
    }

    public void display(){
        if(top==-1){
            System.out.println("Stack Underflow");
            return;
        }
        System.out.println("Elements present in stack are -> ");
        for(int i=0;i<=top;i++){
            System.out.print(stack[i] + " ");
        }
        System.out.println();
    }

    public boolean isEmpty(){
        return top==-1;
    }

    public void pop(){
        if(top==-1){
            System.out.println("Stack Underflow");
            return;
        }
        System.out.println("Popped: "+stack[top]);
        top--;
    }

    public void size(){
        System.out.println("Size of stack: "+(top+1));
    }
}

public class StackMain {
    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(10);
        s.push(20);
        s.push(30);
        s.push(40);
        s.push(50);
        s.display();
        s.peek();
        s.pop();
        s.display();
        s.size();
        System.out.println("Is stack empty? "+s.isEmpty());
    }
}