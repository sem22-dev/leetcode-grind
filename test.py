from typing import List

nums = [100,4,200,1,3,2,5,6,7,8,]

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # 1. convert nums to set to allow O(1) look ups and remove duplicates
        num_set = set(nums)
        print(num_set)

        # 2. declare longest to keep track of the longest consecutive
        longest = 0

        # 3. for each number , make sure the counting starts only if num - 1 is not there,
        for n in num_set:
            if n - 1 not in num_set:
                # 4. increment num + 1, and while loops to look for consecutive counts in nums
                current_streak = 1
                while n + 1 in num_set:
                    n += 1
                    # and keep track of current streak
                    current_streak += 1
       
                # 5. check max (longest, current_streak)
                longest = max(longest, current_streak)

        # 6. return longest
        return longest
    
sol = Solution()
print(sol.longestConsecutive(nums))
