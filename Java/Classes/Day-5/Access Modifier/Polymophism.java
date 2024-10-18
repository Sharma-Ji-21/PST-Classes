/*
Polymorphism : (Different behavior of the same person like facee among parents is Different that the face amoung the friends) when methods or other behave differently is different situation.(Class remains the same).
Compile time Overloading. Function name same but different parameter.
Compile time Overriding. Function name same and same parameter.

=> OVERLOADING:

-> if number of parameter are same then atleast one parameter should have different datatype.
-> if datatype is smae then they should have different number of parameters.
Ex:-
add(int a,int b)
add(int a,int b,int c) 
// if I remove int a then it will give an error as number of parameters are same and the datatype is also same. Ex->
import java.util.*;
class Polymophism{
public static void main(String[] args){   
}
public static void add(int a,int b){
    System.out.println(a+b);
}
public void add(double a,float b){
    System.out.println(a+b);
}
}


=> OVERRIDDING:
*/
// Runtime Polymorphism (Method Overriding)
// Compile time is not actuale exicution 
// Runtime it the actual exicution as it consist both invoke method and properties.
class parent{
    public void add(int a,int b){
        int sum=b/a;
        System.out.println(sum);
    }
}
class child extends parent{
    public void add(int a,int b){
        super.add(a,b);
        // super keyword is used to call parent class method
        System.out.println(a+b);
    }
}
public class Polymophism {
    public static void main(String[] args) {
        child obj = new child();
        obj.add(1,2);
    }
}