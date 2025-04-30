package Stack;
class Node{
    int data;
    Node next;
    Node(int data){
        this.data = data;
        this.next = null;
    }
}
class Stack{
    Node top;
    public void push(int data){
        Node newNode = new Node(data);
        System.out.println("Pushed: "+ newNode.data);
        newNode.next = top;
        top = newNode;
    }
    public void pop(){
        if(top==null){
            System.out.println("Stack Underflow");
            return;
        }
        System.out.println("Popped: "+top.data);
        top = top.next;
    }
    public void peek(){
        if(top==null){
            System.out.println("Stack Underflow");
            return;
        }
        System.out.println("Peek: "+top.data);
    }
    public void display(){
        if(top==null){
            System.out.println("Stack Underflow");
            return;
        }
        Node temp = top;
        while(temp!=null){
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }
}
public class NodeStack {
    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(10);
        s.push(20);
        s.push(30);
        s.push(40);
        s.display();
        s.pop();
        s.display();
        s.peek();
    }
}
