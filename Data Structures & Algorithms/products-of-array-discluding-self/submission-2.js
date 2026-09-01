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

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                nums[i] = counter > 1 ? 0 : finalProduct;
            } else if (counter >= 1) {
                nums[i] = 0;
            } else {
                nums[i] = finalProduct / nums[i];
            }
        }

        return nums;
    }
}
