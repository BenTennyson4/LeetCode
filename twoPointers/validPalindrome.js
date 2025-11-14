class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /** 
         * Use a two pointer approach where i is the pointer for
         * beginning of s and j is the pointer for the end of s. 
         */ 
        let j = s.length - 1;
        let alphanumericRegex = /^[a-z0-9]$/i;
        for (let i = 0; i < s.length;) {
            // If the charactrs are not alphanumeric skip them
            if (!alphanumericRegex.test(s[i])) {
                i += 1;
                continue;
            }
            if (!alphanumericRegex.test(s[j])) {
                j -= 1
                continue;
            }
            // When the pointers meet or pass each other exit loop
            if (i >= j) {
                break;
            }
            // If the letters do not match s is not palindrome
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            j -= 1;
            i += 1;
        }
        return true
    }
}
