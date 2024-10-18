import java.util.*; 
abstract class StrictParent{
    abstract public void language();
    public void message(){
        System.out.println("Yaa Hu");
    }
    public void greeting(){
        System.out.println("Namaste");
    }
}
class ScaredChild extends StrictParent{
    public void language(){
        System.out.println("Hindi");
    }
    public void plan(){
        System.out.println("Will play with friends");
    }
    @Override
    public void greeting(){
        System.out.println("I am scared");
    }
}
public class AbstractionEx1 {
    public static void main(String[] args) {
        ScaredChild obj = new ScaredChild();
        obj.language();
        obj.message();
        obj.greeting();
        obj.plan();
    }
}
