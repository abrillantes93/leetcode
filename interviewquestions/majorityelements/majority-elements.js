/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {};

    // Count occurrences of each element
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map[num] !== undefined) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    // Find the element that appears more than n / 2 times
    let majorityCount = Math.floor(nums.length / 2);
    for (let key in map) {
        if (map[key] > majorityCount) {
            return parseInt(key);
        }
    }

    return -1; // This line should never be reached if there's always a majority element
};
