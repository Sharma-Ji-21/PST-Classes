public class Second {
    static String check(int a){ 
        // here i introduced static before void so that i can access the check in the same class
        // void is like undefined in js
        // Here now I am Writting String then the code is running as previously i was printing the output instead of return when i am retuning anything the i have to tell the data type of the returning element
        if (a%2==0){
            // System.out.println(a + " is an even number");
            return "even number";
        }
        else{
            // System.out.println(a + " is an odd number");
            return "odd number";
        }
    }
    public static void main(String[] args) {
        int a=8;
        // calling the static method check with the variable a as argument
        System.out.println(check(a));
        // here i used void instead of giving any data type as here i am printing the output instead of returning.
        // check(a);
    }
}
