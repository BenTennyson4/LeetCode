class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Map each number to its frequency
        const frequencyMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            let count = 1;
            if (frequencyMap.get(nums[i]) > 0) {
                let frequency = frequencyMap.get(nums[i]);
                frequency = frequency + 1;
                frequencyMap.set(nums[i], frequency);
            }
            else {
                frequencyMap.set(nums[i], count);
            }
        }

        if (k == frequencyMap.size) {
            return Array.from(frequencyMap.keys());

        }

        // Get the values of the frequencyMap for comparison
        // Get values as an iterator
        // let valuesIterator = countMap.values(0);
        // let freqArr = Array.from(valuesIterator);

        // Get the k highest frequent numbers 
        let kFreqMap = new Map ();
        // Make sure to track the minimum frequency and its corresponding num in the kFreqMap
        var min = [0, 0];
        // Add to kFreqMap
        for (let [num1, freq1] of frequencyMap) {
            // Set the minimun frequency to be the first number entered in kFreqMap
            if (kFreqMap.size == 0) {
                min = [num1, freq1];
            }
            // If kFreqMap is not full add numbers to it
            if (kFreqMap.size < k) {
                kFreqMap.set(num1, freq1);
                if (freq1 < min[1]) {
                    min = [num1, freq1];
                }
            } 
            else { 
                /**
                 * If kFreqMap is full, add numbers to it if they are greater
                 * than the minimum frequency in kFreqMap.
                 */
                if (freq1 > min[1]) {
                    kFreqMap.set(num1, freq1);
                    // Remove the key with the minimum frequency.
                    kFreqMap.delete(min[0]);
                    min = [num1, freq1];
                    // Calculate the new minimum
                    for (let [num2, freq2] of kFreqMap) {
                        if (freq2 < min[1]) {
                            min = [num2, freq2];
                        }
                    }
                }
            }

        }
        const numArray = [];
        // Get the k highest frequencies from the kFreqMap
        for (let [num, freq] of kFreqMap) {
            numArray.push(num);
        }


        return numArray;
    }
}
