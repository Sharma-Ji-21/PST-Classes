public class Concept {
    String Name;
    int Age;

    Concept(String name, int age){
        this.Name=name;
        this.Age=age;
    }

    public static void main(String[] args) {
        Concept obj1= new Concept("Om", 17);
        Concept obj2= new Concept("Yug", 17);
        System.out.println(obj1.Name);
        System.out.println(obj2);   
    }
}