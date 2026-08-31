class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const storeLetters = {};

        for (const letter of s) {
            storeLetters[letter] = (storeLetters[letter] || 0) + 1;
        }

        for (const letter of t) {
            if (!storeLetters[letter]) {
                return false;
            }

            storeLetters[letter]--;
        }

        return true;
    }
}
