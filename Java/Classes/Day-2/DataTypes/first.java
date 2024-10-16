package DataTypes;
/*
Primitive Data Types:
D-> double=> number with decimal (upto 15 decimal) and use 8 byte
l-> long=> uses 8 Byte when the value to be is very big
F-> float=> number with decimal (upto 6 decimal) and use 4 byte
I-> int=> Used to store Integers and use 4 byte.
S-> short=> uses 2 bytes and Stores whole numbers from -32,768 to 32,767
B-> byte=> uses 1 Byte and Stores whole numbers from -128 to 127
B-> boolean=> True or False and use 1 Bit
C-> char=> Stores a single character/letter or ASCII values and uses 2 Bytes

Non-Premitive Data Types:
Array=> Array is a collection of element and the element which are stored must be of same data type like if we are storing age then the values stored must be numbers only.
String=> The String data type is used to store a sequence of characters (text). String values must be surrounded by double quotes:
Class=> Class is a blue print which is a collection of variables/fields and methods.

Class and Object:
Class is a blue print which is a collection of variables/fields and methods.
Object is an instance of class.
*/
public class first {
    public static void main(String[] args){
        int myNum = 5;
        float myFloatNum = 5.99f;
        //  Here we are using 'f' for float because whenwe don't use float the java treat it as double by default.
        char myLetter = 'D';
        boolean myBool = true;
        String myText = "Hello";
        String name = "John";
        int myInt1 = 9;
        double myDouble1 = myInt1; // Automatic casting: int to double
        double myDouble3 = 9.78d;
        int myInt3 = (int) myDouble3; // This will convert this double to an int Basically works same as Math.floor in JS.

        System.out.println(myInt3);
        System.out.println(myNum);
        System.out.println(myFloatNum);
        System.out.println(myLetter);
        System.out.println(myBool);
        System.out.println(myText);
        System.out.println(myDouble1);
        System.out.println("Hello " + name);
        //  OR
        System.out.println(myText+" "+name);
    }
}
