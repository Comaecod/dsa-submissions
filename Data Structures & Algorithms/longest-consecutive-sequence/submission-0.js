class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const storeNums = new Set(nums);
        let longest = 0;

        for (const num of storeNums) {
            if (!storeNums.has(num - 1)) {
                let length = 1;
                while (storeNums.has(num + length)) {
                    length++;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}
