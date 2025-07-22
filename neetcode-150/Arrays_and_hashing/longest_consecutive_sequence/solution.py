from typing import List

nums = [100, 4, 200, 1, 3, 2, 5, 6, 7, 8]

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # Convert to set for O(1) lookups
        num_set = set(nums)

        longest = 0

        # Check if num starts a sequence
        for n in num_set:
            if n - 1 not in num_set:
                current_streak = 1
                while n + 1 in num_set:
                    n += 1
                    current_streak += 1
                longest = max(longest, current_streak)

        return longest

sol = Solution()
print(sol.longestConsecutive(nums))
