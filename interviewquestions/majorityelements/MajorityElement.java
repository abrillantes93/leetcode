package interviewquestions.majorityelements;

import java.util.HashMap;

public class MajorityElement {
    public static void main(String[] args) {
        
    }

    int boyerMooreVotingAlgoithm(int[] nums){
        int count = 0;
    int candidate = 0;

    // Find the candidate for the majority element
    for (int num : nums) {
        if (count == 0) {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }

    // The candidate is the majority element
    return candidate;
    } 

    int majorityElementMap(int[] nums){
        HashMap<Integer, Integer> map = new HashMap<>();

        // Count occurrences of each element
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        //put (key: value)
        //getOrDefault(key: default value) -- returns value for key, if no value defined, returns default value

        // Find the element that appears more than n / 2 times
        int majorityCount = nums.length / 2;
        for (int key : map.keySet()) {
            if (map.get(key) > majorityCount) {
                return key;
            }
        }

        return -1; // This line should never be reached if there's always a majority element
    }
}

