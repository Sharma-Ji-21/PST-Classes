package DSA.JAVA.LinkedListLL;

public class DLL {
    static class Node {
        int data;
        Node prev;
        Node next;
        Node(int data){
            this.data=data;
            this.next=null;
            this.prev=null;
        }
    }
    public static void main(String[] args) {
        Node head=new Node(0);
        Node temp=head;
        for(int i=0;i<5;i++){
            Node temp1=new Node(i);
            temp.next=temp1;
            temp1.prev=temp;
            temp=temp.next;
        }
        temp.next=head;
        temp=head.prev;
    }
}
