class Node{
    int data;
    Node next;
    Node prev;
    Node(int data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
public class DoubleLinkedList {
    public static void main(String[] args) {
        Node x =new Node(50);
        Node B =new Node(30);
        Node C =new Node(70);
        x.next=B;
        B.next=C;
        x.prev=null;
        C.next=null;
        C.prev=B;
        B.prev=x;
    }
}