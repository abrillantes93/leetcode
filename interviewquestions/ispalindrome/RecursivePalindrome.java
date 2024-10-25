package interviewquestions.ispalindrome;

public class RecursivePalindrome {
    public static boolean isPalinDrome(String s){
        return isPalinDrome(s, 0 , s.length() - 1);
    }
    
    public static boolean isPalinDrome(String s, int low, int high){ //more efficent than creating substring
        if (high <= low) 
            return true;
        else if (s.charAt(low) != s.charAt(high)) //base case
            return false;
        else 
            return isPalinDrome(s, low + 1, high - 1); //check next value
    }
}