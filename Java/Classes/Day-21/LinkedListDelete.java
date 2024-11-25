class Node{
    int age;
    String name;
    Node next;
    Node(int age, String name){
        this.age=age;
        this.name=name;
        this.next=null;
    }
}
public class LinkedListDelete {
    static void check(Node head, int index){
        int i=0;
        Node temp=head;
        while (i<index-1) {
            temp=temp.next;
            i++;
        }
        temp.next=temp.next.next;
    }
    public static void main(String[] args) {
        Node count1=new Node(17, "Om");
        count1.next=new Node(13, "naughty");
        count1.next.next=new Node(12, "sharma");
        count1.next.next.next=new Node(14, "abc");
        count1.next.next.next.next=new Node(7, "xyz");
         check(count1, 3);
        while (count1!=null) {
            System.out.println(count1.age);
            count1=count1.next;
        }
    }
}
