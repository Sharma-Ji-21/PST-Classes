interface contract{
    abstract public void Legacy();
    default public void message(){
        System.out.println("This is Legacy Method");
    }
}
class HotelStaff implements contract {
    public void Legacy(){
        System.out.println("Welcome Sir/Ma'am");
    }
    // You can also override the default method message() if needed
    // public void message(){
    //     System.out.println("Overridden message method");
    // }
}
public class InterfaceEx1 {
    public static void main(String[] args) {
        HotelStaff obj = new HotelStaff();
        obj.Legacy();
        obj.message();
    }
}