import java.util.*;
abstract class Parent {
    abstract public void language(); // abstract method
    public void message() {
        System.out.println("I am Concrete Method");
        // this is concrete method as it is same as other ones
    }
}
class child extends Parent {
    public void language() {
        System.out.println("Hindi");
    }
}
public class AbstractNotes {
    public static void main(String[] args) {
        child obj = new child();
        obj.language();
        obj.message();
    }
}
