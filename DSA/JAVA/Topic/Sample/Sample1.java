public class Sample1 {
    public static void main(String[] args) {
        int nums[]={0,0,1,5,5,7,1,3,3};
        for(int i : nums){
            int count=0;
            for(int j : nums){
                if(i==j){
                    count++;
                }
            }
            if(count==1){
                System.out.println("Unique value: "+i);
            }
        }
    }
}
