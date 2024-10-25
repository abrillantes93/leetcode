/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // Convert number to string
    x = x.toString();

    // Define the recursive function
    var recursive = function (x, low, high) {
        if (high <= low) {
            return true; // Base case: all characters checked
        } else if (x.charAt(low) != x.charAt(high)) {
            return false; // Base case: characters don't match
        } else {
            return recursive(x, low + 1, high - 1); // Recursive call
        }
    };

    // Call the recursive function with initial values
    return recursive(x, 0, x.length - 1);
};

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
