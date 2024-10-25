// Given an array - find two numbers whose sum is to equal target 
// Assume only one pair for each array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                output[0] = i;
                output[1] = j;
                return output; // return as soon as we find the solution
            }
        }
    }
    return output; // return an empty array if no solution is found
};




/**Two-pass hashmap method o(1) most cases
First - pass/iteration : assign array to map→ value as key, index as value 
2nd pass :  
*/
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        //complement + nums[i] = target
        const complement = target - nums[i];
        //if complement is present AND complement does not equal pointer - return
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)];
        }
    }
    // If no valid pair is found, return an empty array
    return [];
};
//single pass - same logic as  double pass
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    // Return an empty array if no solution is found
    return [];
};
