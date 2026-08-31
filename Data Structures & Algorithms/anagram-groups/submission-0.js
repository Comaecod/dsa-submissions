class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const storeDistWords = {};
        const sortedArr = strs.map((str) => str.split("").sort().join(""));
        for (let i = 0; i < sortedArr.length; i++) {
            const key = sortedArr[i];
            if (!storeDistWords[key]) storeDistWords[key] = [];
            storeDistWords[key].push(strs[i]);
        }
        return Object.values(storeDistWords);
    }
}
