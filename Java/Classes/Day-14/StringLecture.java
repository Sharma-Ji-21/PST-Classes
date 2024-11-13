public class StringLecture {
    public static void main(String[] args) {
        String str="Hello";
        System.out.println(str);
        str.concat("World"); // this will never change the str because of String Pool;
        System.out.println(str.concat("World"));
        /*
        String Builder:
            Mutable Sequence of character
            better than string+= ;
            as in this we edit the og string only whereas int string+= we add one more string to the string pool
        */
        StringBuilder str21=new StringBuilder("Hello");
        System.out.println(str21);
        str21.append(" Naughty");
        System.out.println(str21);
        /*
        String Buffer:
        more safer because of Synchronization.
            same as String builder but slower because of Synchronization
        */
        /*
        -> go for string builder when there are less updation;
        -> go for string buffer when there are more updation to be safe for data corruption;
        */
        StringBuffer str212=new StringBuffer("Hello");
        System.out.println(str212);
        str212.append(" Naughty 1");
        System.out.println(str212);

        /*
        String Literal Methods:
        -> StringName.length();
        -> StringName.charAt(index);
        -> StringName.toUpperCase();
        -> StringName.toLowerCase();
        -> StringName.equals("Another String");
        -> StringName.toCharArray();
        -> StringName.replace('a','b');
        -> StringName.substring(1, 3);
        -> StringName.trim(); //Remove " ";
        */

        /*
        String Builder/Buffer Methods:
        -> StringName.toString();
        -> StringName.append('String'); // add at last index
        -> StringName.delete(index, index+1); // index+1 is not included
        -> StringName.insert(index,'String');
        -> StringName.reverse();
        */
    }
}
