public class Prime {
    static void checkPrime(int a){ 
        // we can also use boolean but when we are using boolean then we need to return true/false but when we are using void we can just return empty for the false case if true then just print that
        if(a<2){
            return;
        }
        if(a==2){
            System.out.println(a);
        }
        else {
            for(int i=2;i<=a/2;i++){
                if(a%i==0){
                    return;
                }
            }
            System.out.println(a);
        }
    }
    public static void main(String args[]){
        for(int i=0;i<=50;i++){
            checkPrime(i);
        }
    }
}
