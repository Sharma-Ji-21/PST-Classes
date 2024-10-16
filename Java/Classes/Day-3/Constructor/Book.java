package collage;
public class Book {
    // basically the variable whoch we are willing to use in the public Constructor function that we have to create before the constructor and we can use the paranthesis to pass the value in it by using constructor function and after passing the paranthesis we have to call the cons. function to create the object by using new and this keywords.
    public String Name;
    public String Writter;
    public int Price;
    public Book(String title, String author, int price) {
        this.Name=title;
        this.Writter=author;
        this.Price=price;
    }
}
