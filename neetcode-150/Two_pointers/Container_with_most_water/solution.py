
from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:

        max_area = 0

        l, r = 0, len(height) - 1

        while l < r:
            width = r - l
            min_height = min(height[l], height[r])
            
            max_area = max(max_area, width * min_height)

            if height[l] < height[r]:
                l += 1
            else:
                r -= 1

        return max_area
    
# test
height = [1,8,6,2,5,4,8,3,7]
sol = Solution()
print(sol.maxArea(height))
