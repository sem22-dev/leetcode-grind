class Solution{
    two_sum(nums, target){
        const num_map = new Map();
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(num_map.has(diff)){
                return [num_map.get(diff), i]
            }
            num_map.set(nums[i], i)
        }
    }
    return
}
const sol = new Solution()
const haha = sol.two_sum([2,1,5,3], 4)
console.log(haha)