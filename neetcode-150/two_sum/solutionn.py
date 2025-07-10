class Solution:
    def twoSum(self, nums, target):
        numMap = {}
        for i, num in enumerate(nums):
            complement = target - nums[i]
            if complement in numMap:
                return [numMap[complement], i]
            numMap[num] = i
        return None
sol = Solution()
demo = sol.twoSum([2,1,5,3], 4)
print(demo)