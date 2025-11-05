class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestConsecutiveSeq = 0;
        // Get all unique numbers from the given array
        const numSet = new Set(nums);

        for (let num of numSet) {
            // Ensure that the number is the start of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentSeq = 1;

                // Check if there is a consecutive number
                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentSeq += 1;
                }

                if (longestConsecutiveSeq < currentSeq) {
                    longestConsecutiveSeq = currentSeq;
                }
            }
        }

        return longestConsecutiveSeq;
    }
}
