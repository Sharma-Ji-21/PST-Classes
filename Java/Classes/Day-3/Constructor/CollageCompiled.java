import collage.Book;
import collage.Mentor;
import collage.Student;
public class CollageCompiled {
    public static void main(String[] args) {
        Book book1 = new Book("The Hobbit", "J.R.R. Tolkien", 200);
        Student student1 = new Student("Yug", 17, 81);
        Mentor mentor1 = new Mentor("Om", 17, 1);

        System.out.println(book1.Name + " by " + book1.Writter + " is " + book1.Price + " dollars");
        System.out.println(student1.name + " " + student1.age + " " + student1.rollNo);
        System.out.println(mentor1.name + " " + mentor1.age + " " + mentor1.empId);
    }
}