package HashMap;
import java.util.HashMap;
public class HashMapPractice {
    public static void main(String[]args){
        String names[]={"Karan","Raj","mohit","raj","karan","raj","karan"};//given array

        String name="";  //assume name is maxium occured name
        HashMap<String,Integer>map=new HashMap<>(); //creating hashmap to store value
        for(String i:names){  //iterating map with for each loop
            map.put(i,map.getOrDefault(i,0)+1); 
            //step 1 i=karan {karan=1}
            //step 2 i=raj {raj=1,karan=1}
            //step 3 i=mohit {mohit=1,raj=1,karan=1}
            //step 4: i=raj fetched value of raj which is 1 now{karan=1,raj=1+1,mohit=1}
            //step 5: i=karan fetched value of karan which is 1 now{karan=1+1,raj=2,mohit=1}
            //step 6: i=raj fetched value of raj which is 1 now{karan=2,raj=2+1,mohit=1}
            //resultant map:{karan=2,raj=3,mohit=1}
        } 
        for(String key:map.keySet()){   //
            if(map.get(key)>map.getOrDefault(name,0)){
                name=key;
            }
        }
        System.out.println(name);
    }
}