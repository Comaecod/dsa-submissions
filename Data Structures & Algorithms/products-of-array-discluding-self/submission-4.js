class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [1];

        let product = 1;
        for (let i = 0; i < nums.length - 1; i++) {
            product *= nums[i];
            res[i + 1] = product;
        }

        product = 1;
        for (let i = nums.length - 1; i > 0; i--) {
            product *= nums[i];
            res[i - 1] *= product;
        }

        return res;
    }
}
