import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Scanner;

public class Date {
/*
LocalTime.now() // Current time
LocalDate.now() // Current date
LocalDateTime.now() // Current date and time
*/
public static void main(String[] args) {
    // LocalDate date = LocalDate.of(year, month, day);
    // System.out.println(date);
        LocalDate today = LocalDate.now();
        LocalTime current = LocalTime.now();
        LocalDateTime dt = LocalDateTime.now();
        LocalDate date1 = LocalDate.of(2007, 2, 11);
        System.out.println(today);
        System.out.println(current);
        System.out.println(dt);
        System.out.println(date1);
        System.out.println(date1.getYear());
        System.out.println(date1.getMonth());
        System.out.println(date1.getMonthValue());
        System.out.println(date1.getDayOfMonth());
        System.out.println(date1.getDayOfWeek());
        System.out.println(date1.getDayOfYear());
        System.out.println(date1.lengthOfMonth());
        System.out.println(date1.lengthOfYear());
        System.out.println(date1.isLeapYear());
    }
}
