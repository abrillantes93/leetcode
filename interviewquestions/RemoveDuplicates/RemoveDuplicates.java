package interviewquestions.RemoveDuplicates;

public class RemoveDuplicates {

    public static void main(String[] args) {
        
    }

    /** Remove duplicates from array, move elements forward 
     * Leetcode test checks array nums[0-counter]
    */
    public int removeDuplicates(int[] nums) {
        //return number of unique elements from array 
        int counter = 1;

        for (int i = 1; i < nums.length; i++){
            //if element does not equal previous element, increment counter, move element forward in array
            if (nums[i] != nums[i-1]){
                nums[counter] = nums[i];
                counter++;
            }

        }
        return counter;
    }
}
