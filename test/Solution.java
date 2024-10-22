public class Solution {
    public int romanToInt(String s) {
        String[] CharArr = s.split("");
        int sum = 0;
        for (int i = 0; i < CharArr.length; i++) {
            if (CharArr[i].equals("I")) {
                if (i+1<CharArr.length && CharArr[i+1].equals("V")) {
                    sum += 4;
                    i++;
                } else if (i+1<CharArr.length && CharArr[i+1].equals("X")) {
                    sum += 9;
                    i++;
                } else {
                    sum += 1;
                }
            } else if (CharArr[i].equals("V")) {
                sum += 5;
            } else if (CharArr[i].equals("X")) {
                if(i+1<CharArr.length && CharArr[i+1].equals("L")){
                    sum+=40;
                    i++;
                }
                else if(i+1<CharArr.length && CharArr[i+1].equals("C")){
                    sum+=90;
                    i++;
                }
                else{
                    sum+=10;
                }
            } else if (CharArr[i].equals("L")) {
                sum += 50;
            } else if (CharArr[i].equals("C")) {
                if(i+1<CharArr.length && CharArr[i+1].equals("D")){
                    sum+=400;
                    i++;
                }
                else if(i+1<CharArr.length && CharArr[i+1].equals("M")){
                    sum+=900;
                    i++;
                }
                else{
                    sum+=100;
                }
            } else if (CharArr[i].equals("D")) {
                sum += 500;
            } else if (CharArr[i].equals("M")) {
                sum += 1000;
            }
        }
        return sum;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        System.out.println(solution.romanToInt("III"));
        System.out.println(solution.romanToInt("IV"));
        System.out.println(solution.romanToInt("IX"));
        System.out.println(solution.romanToInt("LVIII"));
        System.out.println(solution.romanToInt("MCMXCIV"));
    }
}