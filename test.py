from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []

        # Step 1: Sort the array to apply two-pointer technique
        nums.sort()

        # Step 2: Iterate through the array, treating each number as the first element of the triplet
        for i, v in enumerate(nums):
            # Skip duplicate values for i (to avoid duplicate triplets)
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            # Two pointers: one from the left (just after i), one from the right (end of list)
            l, r = i + 1, len(nums) - 1

            while l < r:
                total = nums[i] + nums[l] + nums[r]

                if total == 0:
                    # Found a triplet
                    res.append([nums[i], nums[l], nums[r]])
                    l += 1
                    r -= 1

                    # Skip duplicates for l (to avoid duplicate triplets)
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1

                elif total < 0:
                    # Sum too small → need larger number → move left pointer right
                    l += 1
                else:
                    # Sum too big → need smaller number → move right pointer left
                    r -= 1

        return res


# Test case
nums = [-1, 0, 1, 2, -1, -4]
sol = Solution()
print(sol.threeSum(nums))
