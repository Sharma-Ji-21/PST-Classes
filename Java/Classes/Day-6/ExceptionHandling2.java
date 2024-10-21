// public class ExceptionHandling2 {
//     public static void main(String[] args) {
//         try{
//             int a =50/0;
//             System.out.println("No Exception");
            
//         }catch(ArithmeticException e){
//             // here sout is used to print the error, what the error is
//             System.out.println("Exeption in Code");
//         }
//         finally{
//             System.out.println("Coomman Process");
//         }
//     }
// }
public class ExceptionHandling2 {
    public static void main(String[] args)throws ArithmeticException{
        try{
            if (5>4) {
                throw new ArithmeticException("Exception Custom");
                // ye E me hi throw kar raha h.
            }
            // int a =50/0;
            // System.out.println("No Exception");
            
        }catch(ArithmeticException e){
            System.out.println("Exeption in Code "+e);
            
            // here sout is used to print the error, what the error is
            // System.out.println("Exeption in Code");
        }
        finally{
            System.out.println("Coomman Process");
        }
    }
}