package HashMap;
/*
HashMap:
    Stores Data in key value pair

Syantax: 
    HashMap<keyDatatype, valueDatatype> mapName= new HashMap<>();

Method:
    insert-> mapName.put(key, value)
    get-> mapName.get(key)
    remove-> mapName.remove(key)
    update-> mapName.put
    size-> mapName.size()
    clear-> mapName.clear()
    containsKey-> mapName.containsKey(key)
    containsValue-> mapName.containsValue(value)
*/

/*
HashSet:
    Collection of unique elements ONLY;
    HashSet is not autimatically sorted;
    HashMap Does'nt Care about the order of elements.

remove Duplicates: [1,2,1,3,4,5,1] -> HashSet: [1,2,3,4,5]

Syantax:
    HashSet<Integer> set=new HashSet<>();

Method:
    Check element-> setName.contains(element);
    Insert-> setName.add(element);
    Clear-> setName.clear();
    Length-> setName.size();
*/

import java.util.*;
public class HashMapExample {  // Renamed class
    public static void main(String[] args) {

        HashMap<String, Integer> map = new HashMap<>();
        map.put("Om",17);
        map.put("Yug",17);
        map.put("Ram",18);
        map.put("Shyam",20);
        System.out.println(map);
        System.out.println(map.get("Om")); //name.get(key) -> Value
        System.out.println(map.containsKey("Ram")); //true
        System.out.println(map.containsValue(10));//false
        // if I am just using put and the key is not present then it will create a new key value pair but if exist then it will just update the value.
        map.put("Shyam", 19);
        System.out.println(map);
        // if I am using Replace it will replace the value of the key if it is present, if not then it does nothing.
        System.out.println(map.replace("Shyam", 20));// this will replace value
        System.out.println(map);
        // here comes one more method called putIfAbsent it will only add the key value pair if the key is not present;
        map.putIfAbsent("Shyam", 20);
        System.out.println(map); // Nothing changes
        map.putIfAbsent("YOO", 20);
        System.out.println(map); // It will add the key value pair
    }
}