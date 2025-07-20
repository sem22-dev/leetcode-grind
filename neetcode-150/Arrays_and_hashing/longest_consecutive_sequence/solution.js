
let nums = [1,2,3,5,4,6,7,8,9]

function longestConsecutive(nums){
    let sol = new Solution();
    return sol.longestConsecutive(nums)
}

class Solution{
    longestConsecutive(nums){
        // 1: check if nums is empty
        if(nums.length == 0){
            return 0
        }
        // 2: sort and remove duplicates
        let sorted_nums = [...new Set(nums.sort((a, b) => a - b))]

        // 3: define longest and current consecutive numbers
        let longest = 1;
        let current = 1;

        // 4: for loop and compare the ith number with the previous one(adding with 1) to check if it is consecutive
        for(let i = 1; i < sorted_nums.length; i++){
            if(sorted_nums[i] == sorted_nums[i - 1] + 1){
                current += 1
            } else {
                longest = Math.max(longest, current)
                current = 1
            }
        }
        // 5: return max(longest, current)
        return Math.max(longest, current)
        
    }
}