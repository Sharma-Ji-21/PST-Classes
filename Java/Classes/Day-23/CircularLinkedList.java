public class CircularLinkedList {
    static class Node{
        int num;
        Node next;
        Node(int num){
            this.num=num;
            this.next=null;
        }
    }
    public static void main(String[] args) {
        Node hey=new Node(0);
        Node temp=hey;
        for(int i=1;i<=5;i++){
            Node temp1=new Node(i);
            temp.next=temp1;
            temp=temp.next;
        }
        temp.next=hey;
        for(int i=0;i<10;i++){
            System.out.println(hey.num);
            hey=hey.next;
        }
    }
}
