class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Create a hashmap
        const map = new Map();
        // Create a count variable to track if a variable has 
        // been seen more than once.
        let duplicate = false;
        let return_boolean = false;
        // Add all numbers and their counts to the hashmap
        for (let i = 0; i < nums.length; i++) {
            // This works because.get() evaluates to undefined
            // when the index has not been entered previously,
            // which means that the if statement will not
            // be triggered when the number is not in the map.
            if (map.get(nums[i]) === false) {
                duplicate = true;
            }
            // We must set the map index and value before checking
            // or we will always find the false in the map.
            map.set(nums[i], duplicate);

            if (map.get(nums[i]) === true) {
                return_boolean = true;
                break;
            }
        }
        return return_boolean;
    }
}
