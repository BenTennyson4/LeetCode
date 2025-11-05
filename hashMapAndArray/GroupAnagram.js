class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Map each anagram
        const mapArr = []
        for (let i = 0; i < strs.length; i++) { 
            let string = strs[i];
            let map_i = new Map();
            // Get the letter counts
            for (let j = 0; j < string.length; j++) {
                let count = 1;
                // Increase count if the char has already been added
                if (map_i.get(string[j]) > 0) {
                    let num = map_i.get(string[j]);
                    map_i.set(string[j], num + 1);
                } else {
                    map_i.set(string[j], count);
                }
            }
            // Add the anagram map (map_i) to mapArr
            mapArr[i] = map_i;
        }

        const groupedAnagrams = [];

        // Add each anagram to a group in groupedAnagrams
        for (let i = 0; i < mapArr.length; i++) {
            let map_i = mapArr[i];
            let added = false;
            /** Compare each anagram with the other anagram groups, 
             *  if map_i matches an anagram in one of the groups add it 
             *  to the group. */
            for (let j = 0; j < groupedAnagrams.length; j++) {
                // Get group j
                let group_j = groupedAnagrams[j];
                let refString = group_j[0];
                // Get the index of of refString in the original strs array.
                let group_j_map = mapArr[strs.indexOf(refString)];
                // First check if length of the map matches group j 
                if (map_i.size === group_j_map.size) {
                    // Check the counts of the letters in each map
                    let isEqual = true;
                    for (let [char, count] of group_j_map) {
                        /** Check the letter counts of the string in map_i 
                         *  against the first map in group_j. */  
                        if (map_i.get(char) !== count) {
                            isEqual = false;
                            break;
                        }
                    }

                    // if all the counts matched add to group
                    if (isEqual) {
                        group_j.push(strs[i]);
                        added = true;
                        break;
                    }
                }
            }
            /** If after going through groupedAnagrams, we were not 
             *  able to find any groups for map_i, create a new group.*/
            if (!added) {
                let new_group = [strs[i]];
                groupedAnagrams.push(new_group);
            } 
        }

        return groupedAnagrams;

    }
}
