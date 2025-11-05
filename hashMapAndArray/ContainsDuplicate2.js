class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Create a hashmap
        const map = new Map();
        // Add all numbers and their counts to the hashmap
        for (let i = 0; i < nums.length; i++) {

            // Simplified solution using .has()
            if (map.has(nums[i])) {
                return true;
            }
            map.set(nums[i], i);
        }
        return false;
    }
}
