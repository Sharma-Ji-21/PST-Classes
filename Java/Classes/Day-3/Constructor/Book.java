public class Book {
    // basically the variable whoch we are willing to use in the public Constructor function that we have to create before the constructor and we can use the paranthesis to pass the value in it by using constructor function and after passing the paranthesis we have to call the cons. function to create the object by using new and this keywords.
    String Name;
    String Writter;
    int Price;
    public Book(String title, String author, int price) {
        this.Name=title;
        this.Writter=author;
        this.Price=price;
    }
    public static void main(String[] args){
        Book book1 = new Book("The Hobbit", "J.R.R. Tolkien", 200);
        Book book2 = new Book("The Hobbit", "J.R.R. Tolkien", 200);
        Book book3 = new Book("The Hobbit", "J.R.R. Tolkien", 200);
        Book book4 = new Book("The Hobbit", "J.R.R. Tolkien", 200);
        System.out.println(book1.Name + " by " + book1.Writter + " is " + book1.Price + " dollars");
        System.out.println(book2.Name + " by " + book2.Writter + " is " + book2.Price + " dollars");
        System.out.println(book3.Name + " by " + book3.Writter + " is " + book3.Price + " dollars");
        System.out.println(book4.Name + " by " + book4.Writter + " is " + book4.Price + " dollars");
    }
}
