class Node{
    String Name;
    int rollNo;
    boolean present=false;
    Node next;
    Node(int rollNo,String Name,boolean present){
        this.Name=Name;
        this.rollNo=rollNo;
        this.present=present;
        this.next=null;
    }
}
public class LinkedListPractice {
    public static void main(String[] args) {
        Node student1=new Node(1, "Om", true);
        Node student2=new Node(2, "Yug", false);
        Node student3=new Node(3, "Sneha", true);
        student1.next=student2;
        student2.next=student3;
        student3.next=null;
        Node student4=new Node(8, "Kanishka", true);
        student2.next=student4;
        student4.next=student3;
        System.out.println(student1.Name+" "+student1.rollNo+" "+student1.present);
        System.out.println(student1.Name+" "+student1.next.Name+" "+student1.next.next.Name);
    }
}
