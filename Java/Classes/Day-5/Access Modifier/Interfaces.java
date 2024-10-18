/*
Interfaces:
- Perfroms Abstraction
- helps to implement multiple inheritance
- define set of rules or contact for sub classes before 2008, interfaces could have only abstract methods but now we can also define some default methods with derfault keyword.
*/
interface Legacy{
    abstract public void culture();
}
class HotelStaff implements Legacy{
    public void culture(){
        System.out.println("Good day Sir/ma'am");
    }
}
public class Interfaces {
    public static void main(String[] args) {
        HotelStaff obj = new HotelStaff();
        obj.culture();
    }
}