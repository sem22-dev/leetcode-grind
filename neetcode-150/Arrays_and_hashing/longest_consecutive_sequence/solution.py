from typing import List

nums = [1,2,3,4,5]

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
    
        nums_sort = sorted(set(nums))

        longest = 1
        current = 1

        for i in range(1, len(nums_sort)):
            if nums_sort[i] == nums_sort[i - 1] + 1:
                current += 1
            else:
                longest = max(longest, current)
                current = 1

        return max(longest, current)
    
sol = Solution()
print(sol.longestConsecutive(nums))