function twoSum(nums, target){
    const sol = new Solution()
    return sol.twoSum(nums, target)
}

class Solution{
    twoSum(nums, target){
        let l = 0
        let r = nums.length - 1

        while(l < r){
            const sum = nums[l] + nums[r]

            if(sum == target){
                return [l + 1, r + 1]
            } else if(sum < target){
                l++
            } else{
                r--
            }
        }
    }
}

