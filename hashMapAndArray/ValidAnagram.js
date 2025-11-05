class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // First check that the strings are the same length
        if (s.length != t.length) {
            return false;
        }
        // Map each letter in string s
        const sMap = new Map();
        for (let i = 0; i < s.length; i++) {
            if (sMap.has(s[i])) {
                let count = sMap.get(s[i]);
                count += 1;
                sMap.set(s[i], count);
            } else {
                sMap.set(s[i], 1);
            }
        }
        // Map each letter in t
        const tMap = new Map();
        for (let i = 0; i < t.length; i++) {
            if (tMap.has(t[i])) {
                let count = tMap.get(t[i]);
                count += 1;
                tMap.set(t[i], count);
            } else {
                tMap.set(t[i], 1);
            }
        }
        // Check if the maps for s and t are the same
        for (let i = 0; i < s.length; i++) {
            let letter = s[i];
            let sCount = sMap.get(letter);
            let tCount = tMap.get(letter);
            if (sCount != tCount) {
                return false;
            }
        }

        return true;

    }
}
