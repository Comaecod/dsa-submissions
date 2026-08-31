class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {};
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (obj[complement] !== undefined) {
                return [obj[complement], i];
            }
            obj[nums[i]] = i;
        }
    }
}
