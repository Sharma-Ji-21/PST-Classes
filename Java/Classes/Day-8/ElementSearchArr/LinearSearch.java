public class LinearSearch {
    static int linearSearch(int arr[], int x) {
        int result = -1;
        for(int i=0;i<arr.length;i++) {
            if(arr[i] == x) {
                return i;
            }
        }
        return result;
    }
    public static void main(String[] args) {
        int []data={2,3,1,5,4};
        int x=5;
        int res=linearSearch(data, x);
        System.out.println(res);
    }
}
