class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let counter = 0;
        let finalProduct = 1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                counter++;
            } else {
                finalProduct *= nums[i];
            }
        }

        const result = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                result[i] = counter > 1 ? 0 : finalProduct;
            } else if (counter >= 1) {
                result[i] = 0;
            } else {
                result[i] = finalProduct / nums[i];
            }
        }

        return result;
    }
}
