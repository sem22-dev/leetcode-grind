function threeSum(nums){
    let sol = new Solution();
    return sol.threeSum(nums)
}

class Solution{
    threeSum(nums){
        // 1. sort 
        nums.sort((a, b) => a - b);

        let res = new Array()

        // 2. for loop
        for(let i = 0; i < nums.length - 1; i++){
            // 3. initialize two pointer one from left (after i ) and right end
            let l = i + 1
            let r = nums.length - 1

            // 4. skip duplicate values for i 
            if(i > 0 && nums[i] == nums[i - 1]){
                continue;
            }

             // 5. while loop
            while(l < r){
                // 6. initialize sum total
                let sum = nums[i] + nums[l] + nums[r]

                 // 7. found triple , add to res
                if(sum == 0) {
                    res.push([nums[i], nums[l], nums[r]])
                    l++
                    r--
                    while(l < r && nums[l] == nums[l - 1]){
                        l++
                    }
                   
                } else if(sum < 0){ 
                    // 8. sum less than 0 increase l
                    l++
                } else {
                    r--
                }
            }
        }
    return res;
    }
}

//test case
nums = [-1, -1, -1, 0, 1, 2]
const sol = new Solution();
console.log(sol.threeSum(nums))