class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent = function (nums, k) {
        const storeObj = new Map();
        const finalArr = [];

        //   const arrN = Array.from({length: nums.length + 1}).fill([]); this doesnt work as it uses same array reference.
        const arrN = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) storeObj.set(num, (storeObj.get(num) || 0) + 1);
        for (const [key, value] of storeObj) arrN[value].push(key);

        for (let i = arrN.length - 1; i >= 0; i--) {
            for (const num of arrN[i]) {
                finalArr.push(num);
                if (finalArr.length === k) {
                    return finalArr;
                }
            }
        }
    };
}
