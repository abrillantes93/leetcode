package interviewquestions.ransomnote;
// Given two strings ransomNote and magazine, 
// return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
import java.util.HashMap;
// Each letter in magazine can only be used once in ransomNote.

 
public class RansomNote {
    public static void main(String[] args) {
       String ransomNote = "aa", magazine = "abb";
    //    System.out.println(canConstruct(ransomNote, magazine));  
       System.out.println(construct2(ransomNote, magazine));
    }

    public static boolean canConstruct(String ransomNote, String magazine) {
        // Count letters in ransomNote
        HashMap<Character, Integer> noteMap = new HashMap<>();
        for (char c : ransomNote.toCharArray()) {
            noteMap.put(c, noteMap.getOrDefault(c, 0) + 1);
        }

        // Count letters in magazine
        HashMap<Character, Integer> magMap = new HashMap<>();
        for (char c : magazine.toCharArray()) {
            magMap.put(c, magMap.getOrDefault(c, 0) + 1);
        }

        // Check if magazine contains enough of each character
        for (char c : noteMap.keySet()) {
            if (noteMap.get(c) > magMap.getOrDefault(c, 0)) { // If ransomNote requires more than magazine provides
                return false;
            }
        }
        
        return true;
}
    public static boolean construct2(String ransomNote, String magazine) { //faster
        // Initialize an array of count with the size 26...
        int[] counter = new int[128];  //array for each possible char

        for (final char ch : magazine.toCharArray())
            ++counter[ch];
        // Run another for loop for ransomNote...
        for (final char ch : ransomNote.toCharArray())
             // If the charachter doesn't exists in magazine for ransomNote, we return false...
            if (--counter[ch] < 0)
                return false;
        return true;      // If nothing goes wrong, return true...
    }
}
