class Solution {
    productExceptSelf(nums) {
        // 1.check for zero_count
        let zero_count = 0
        for(let num of nums){
            if(num == 0){
                zero_count += 1
            }
        }
        // 2.calculate the product for non-zero numbers
        let product = 1
        for(let num of nums){
            if(num !== 0){
                product *= num
            }
        }
        // 3.for zero_count > 1, return an array of nums length filled with 0 values
        if(zero_count > 1){
                return new Array(nums.length).fill(0);
        }
        // 4.for 1 zero_count, return all zero for non-zero numbers, and the product for the zero number
        // can use other methods like for loop here if you dont like map
        else if(zero_count == 1){
            return nums.map(num => (num == 0 ? product : 0))
        }
        // 5.lastly for non_zero numbers , divide the product by the num in nums
        else {
            return nums.map(num => product / num)
        }
    }
}
