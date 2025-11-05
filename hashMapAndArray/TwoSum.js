class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Add all numbers to a map
        const numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            numMap.set(nums[i], i);
        }
        /** For each number in the map, check if the number 
         *  necessary to sum to the target exists in the map*/ 
        const indices = []
        for (let i = 0; i < nums.length; i++) {
            let num1 = nums[i];
            let num2 = target - num1;
            if (numMap.has(num2)) {
                /** Make sure that the second index is different 
                 *  from the first.*/  
                indices[0] = i;
                if (indices[0] != numMap.get(num2)) {
                    indices[1] = numMap.get(num2);
                    break;
                }
            }
        }
        return indices;
    }
}
