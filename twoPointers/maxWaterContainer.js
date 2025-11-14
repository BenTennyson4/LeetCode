class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let maxArea = 0;
        while (i < j) {
            let area = 0;
            // Calculate the area with the current heights
            let height1 = heights[i];
            let height2 = heights[j];
            let height = 0;
            if (height1 > height2) {
                height = height2;
            } else {
                height = height1;
            }
            let width = j - i;
            area = height * width;
            if (area > maxArea) {
                maxArea = area;
            }
            // Calculate the new indices
            if (height1 < height2) {
                i += 1;
            } else {
                j -= 1;
            }
        }
        return maxArea;
    }
}
