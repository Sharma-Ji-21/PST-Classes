package DSA.JAVA.LinkedListLL;
public class LL {
    static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public static void main(String[] args) {
        Node head = new Node(0); // Head node
        Node temp = head;

        // Create the linked list
        for (int i = 1; i <= 5; i++) {
            Node newNode = new Node(i);
            temp.next = newNode;
            temp = temp.next;
        }

        // Making it circular
        temp.next = head; // Last node points back to the head

        // Traversing the circular linked list
        Node current = head;
        System.out.print("Circular Linked List: ");
        do {
            System.out.print(current.data + " -> ");
            current = current.next;
        } while (current != head); // Stop when we complete the circle
        System.out.println("(back to head)");
    }
}
