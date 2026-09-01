class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const postfix = [];

        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            product *= nums[i];
            prefix[i] = product;
        }

        product = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            product *= nums[i];
            postfix[i] = product;
        }

        for (let i = 0; i < nums.length; i++) {
            let prev = i - 1;
            let next = i + 1;
            nums[i] = (prefix[prev] ?? 1) * (postfix[next] ?? 1);
        }

        return nums;
    }
}
