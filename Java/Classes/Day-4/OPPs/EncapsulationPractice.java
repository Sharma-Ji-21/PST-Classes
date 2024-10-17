package OPPs;
class Capsule{
    private int medPrice=10;
    private int profit=20;
    public int sPrice=medPrice+profit;
    public void getPrice(){
        System.out.println(sPrice);
    }
}
public class EncapsulationPractice {
    public static void main(String[] args) {
        Capsule obj1=new Capsule();
        obj1.getPrice();
    }
}
