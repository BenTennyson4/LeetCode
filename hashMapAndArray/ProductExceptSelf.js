class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prodArray = [];
        let prod = 1;
        for (let i = 0; i < nums.length; i++) {
            // Calculate the first product in the array
            if (i === 0) {
                for (var j = i; j < nums.length; j++) {
                    if (j === i) {
                        continue;
                    }
                    prod = prod * nums[j]; 
                }
                prodArray.push(prod);
            }
            else if (nums[i] === 0) {
                prod = 1;
                for (let k = 0; k < nums.length; k++) {
                    if (k === i) {
                        continue;
                    }
                    prod = prod * nums[k];
                }
                prodArray.push(prod);
            }
            else {
                // Calculate the rest of the products
                prod = prod / nums[i];
                prod = prod * nums[i - 1];
                prodArray.push(prod);
            }
        }
        return prodArray;
    }
}
