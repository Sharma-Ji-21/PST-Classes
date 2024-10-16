package Java.Game;
import java.util.Scanner;

public class firstGame {
    static void main(){
        Scanner NameInput=new Scanner(System.in);
        System.out.println("Enter Full Name:");
        String playerName=NameInput.nextLine();
        if (playerName.length()<1){
            System.out.println("Invalid Input");
            main();
        }
        else {
            System.out.println("Welcome "+playerName+" to the game!");
        }
        NameInput.close();
        int randomNum12 = (int)(Math.random()*(100 - 1))+1;
        int count=1;
        while(true){
            Scanner userInput=new Scanner(System.in);
            System.out.println("Guess a number between 1 and 100:");
            int guess=userInput.nextInt();
            if (guess>randomNum12){
                System.out.println("Too high!");
            }
        else if (guess<randomNum12){
            System.out.println("Too low!");
        }
        else {
            System.out.println("Congratulations! You guessed the correct number in "+count+" times.");
            break;
        }
        count++;
    }
}
}