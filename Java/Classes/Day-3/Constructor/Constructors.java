public class Constructors {
    /*
    Constructor in Java:
    - Used to intialize the property of the object.
    - A constructor is a special method in a class that is used to initialize the objects.

    RULES:
    - A constructor must has the same Name as the class Name.
    - A constructor doesn't have any return type.

    SYNTAX:
    */
    int x;
    public Constructors(){
        x=5;
    }
    public static void main(String[] args) {
        //  here the obj is behaving like refrence not the key value pair.
        Constructors obj = new Constructors();
        System.out.println(obj.x);
    }
}
