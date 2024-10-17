// import java.time.LocalDate;
// public class Datatest{
//     public static void main(String[] args) {
//         LocalDate d=LocalDate.now();
//         LocalDate Date1=LocalDate.of(2025,2,12);
//         boolean res=Date1.isBefore(d);
//         System.out.println(res);
//         boolean res1=Date1.isAfter(d);
//         System.out.println(res1);
//         boolean res2=Date1.isEqual(d);
//         System.out.println(res2);

//         System.out.println("present date:"+d);
//         System.out.println("current date:"+d.getYear());
//         System.out.println("custom date:"+Date1);
//         System.out.println("custom year:"+Date1.getYear());
//         System.out.println("present date modify:"+d.plusDays(5));
//         System.out.println("present date modify:"+d.plusMonths(5));
//         System.out.println("present date modify:"+d.plusYears(5));
//         System.out.println("present date modify:"+d.minusDays(5));
//         System.out.println("present date modify:"+d.minusMonths(5));
//         System.out.println("present date modify:"+d.minusYears(5));
//     }
// }
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
public class Datatest{
    public static void main(String[] args) {
        LocalDateTime current=LocalDateTime.now();
        DateTimeFormatter myDateTimeFormatter=DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        System.out.println(myDateTimeFormatter.format(current));
    }
}