class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        /** 
         * Loop through the strs array and add each one to the string 
         * delimited by a $.
         * */ 
        for (let i = 0; i < strs.length; i++) {
            let string = strs[i];
            let lengthPrefix = string.length + "#";
            encodedString += lengthPrefix + string;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedArray = [];
        let i = 0;

        while (i < str.length) {
            // Read the length part before the '#'
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let len = parseInt(str.slice(i, j));  // extract the length as an integer

            j++;  // move past the '#'

            // Use that length to extract the exact number of characters
            let word = "";
            for (let k = 0; k < len; k++) {
                word += str[j + k];              // Read exactly `len` characters
            }

        decodedArray.push(word);
        i = j + len;  // Move index forward by `len` characters
    }
        return decodedArray;
    }
}
