class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const triplets =[];
        // Add all numbers in nums to a map
        const numsMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (!numsMap.has(nums[i])) numsMap.set(nums[i], []);
            numsMap.get(nums[i]).push(i);
        }

        /**
         * Calculate all possible sums of two numbers in nums,
         * then see if the necessary number to make the sum zero exists
         * in the numsMap.
         */
        // Check all unique pairs (i ≠ j)
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const sum = nums[i] + nums[j];
                const complement = -sum;

                if (numsMap.has(complement)) {
                    for (let k of numsMap.get(complement)) {
                        if (k !== i && k !== j) {
                            const triplet = [nums[i], nums[j], complement].sort((a, b) => a - b);
                            triplets.push(triplet);
                            break; // only add once per valid i-j pair
                        }
                    }
                }
            }
        }

        // Remove duplicates
        const set = new Set();
        for (let t of triplets) {
            set.add(t.toString());
        }

        return Array.from(set).map(s => s.split(',').map(Number));
    }
}
