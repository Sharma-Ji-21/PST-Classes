package DSA.JAVA.Something.Examples;
public class sumTheThetriplet {
    static String sumOfArriszero(int [] arr){
        for(int i=0;i<arr.length;i++){
            for(int j=i+1;j<arr.length;j++){
                for(int k=j+1;k<arr.length;k++){
                    if(arr[i]+arr[j]+arr[k]==0){
                        return(arr[i]+"+"+arr[j]+"+"+arr[k]+"=0");
                    }
                }
            }
        }
        return "No triplet found";
    }
    public static void main(String[] args) {
        int arr[]={-4,-1,0,1,2};
        System.out.println(sumOfArriszero(arr));
    }
}