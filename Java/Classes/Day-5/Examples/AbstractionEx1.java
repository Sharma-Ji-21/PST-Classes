import java.util.*; 
abstract class StrictParent{
    abstract public void language();
    public void message(){
        System.out.println("Yaa Hu");
    }
}
class ScaredChild extends StrictParent{
    public void language(){
        System.out.println("Hindi");
    }
    public void plan(){
        System.out.println("Wil play with friends");
    }
}
public class AbstractionEx1 {
    public static void main(String[] args) {
        ScaredChild obj = new ScaredChild();
        obj.language();
        obj.message();
        obj.plan();
    }
}
