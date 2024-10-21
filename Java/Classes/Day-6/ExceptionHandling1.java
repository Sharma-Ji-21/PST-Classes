public class ExceptionHandling1 {
    public static void main(String[] args) {
        try {
            // Attempt to divide by zero, which will cause an exception
            int a = 50 / 0;
            int b = 5 / 4; // This line won't be executed due to the previous exception
        } 
        catch (ArithmeticException e) {
            // Handle the division by zero (exception)
            System.out.println("ArithmeticException: Division by zero occurred.");
        } 
        finally {
            // Code in the 'finally' block always runs, regardless of an exception
            System.out.println("All resources detached.");
        }
        // This will still execute because the exception was caught
        System.out.println("Server not crashed.");
    }
}

/*
throw: Custom Exception
throws: 
*/